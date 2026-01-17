# Dellight AI Website

Enterprise AI infrastructure, autonomous cyber defense, and multi-agent orchestration.

## Pages

- `index.html` - Main landing page
- `gladiator.html` - GLADIATOR cyber defense platform
- `aya-platform.html` - AYA multi-agent orchestration
- `solutions.html` - Business solutions (LinkedIn, YouTube, JITFM, Code Audit)
- `yaraevents.html` - Redirect to Yara Events

## Deployment

This site is deployed via **Cloudflare Pages**.

### Automatic Deployment
Push to `main` branch triggers automatic deployment.

### Manual Deployment (Wrangler CLI)
```bash
npx wrangler pages deploy . --project-name=www-dellight-ai
```

### Local Development
```bash
python3 -m http.server 8888
```

## Custom Domain

Configure `dellight.ai` in Cloudflare Pages:
1. Go to Cloudflare Dashboard > Pages > www-dellight-ai
2. Custom domains > Add custom domain
3. Add `dellight.ai` and `www.dellight.ai`

## Assets

- `gladiator-hero.png` - GLADIATOR hero image
- `GLADIATOR_NVIDEA.jpeg` - NVIDIA DGX Spark image
