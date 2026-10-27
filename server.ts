import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// API Endpoint: NAP Data (Name, Address, Phone)
app.get('/api/nap', (req, res) => {
  res.json({
    name: "Encadernadora JR",
    legalName: "Encadernadora JR Ltda",
    telephone: "+5531987702774",
    phoneDisplay: "(31) 98770-2774",
    email: "encadernadorajr@hotmail.com",
    address: {
      streetAddress: "Av. Olegário Maciel, 742 - Mercado Novo, Corredor O, Loja 1249",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "30180-110",
      addressCountry: "BR"
    },
    geo: {
      latitude: -19.92582998660662,
      longitude: -43.94544838450166
    },
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    experienceYears: 20,
    rating: 5.0
  });
});

// API Endpoint: Lead / Quote Inquiries
app.post('/api/quotes', (req, res) => {
  const { name, service, pages, urgency, notes } = req.body;
  if (!service) {
    return res.status(400).json({ error: 'Serviço é obrigatório' });
  }

  const quoteRecord = {
    id: Date.now().toString(),
    name: name || 'Anônimo',
    service,
    pages: pages || '80',
    urgency: urgency || 'normal',
    notes: notes || '',
    createdAt: new Date().toISOString()
  };

  // Return success with generated WhatsApp referral url
  const whatsappText = `Olá! Solicitei um orçamento no site da Encadernadora JR:
• Nome: ${quoteRecord.name}
• Serviço: ${quoteRecord.service}
• Páginas: ${quoteRecord.pages}
• Urgência: ${quoteRecord.urgency}`;

  return res.status(201).json({
    success: true,
    message: 'Orçamento gerado com sucesso',
    quote: quoteRecord,
    whatsappUrl: `https://wa.me/5531987702774?text=${encodeURIComponent(whatsappText)}`
  });
});

// Explicit Static SEO Files Route Handlers (Ensuring strict headers)
app.get('/robots.txt', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'robots.txt');
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    return res.sendFile(filePath);
  }
  res.status(404).send('Not Found');
});

app.get('/sitemap.xml', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'sitemap.xml');
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    return res.sendFile(filePath);
  }
  res.status(404).send('Not Found');
});

app.get(['/llms.txt', '/.well-known/llms.txt'], (req, res) => {
  const filePath = path.join(__dirname, 'public', 'llms.txt');
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'text/markdown; charset=UTF-8');
    return res.sendFile(filePath);
  }
  res.status(404).send('Not Found');
});

// Start server with Vite middleware in dev or static dist in prod
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Encadernadora JR server rodando na porta ${PORT}`);
  });
}

startServer().catch(console.error);
