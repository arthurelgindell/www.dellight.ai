export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Serve index.html for root
    if (url.pathname === '/') {
      return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dellight AI - Intelligent Solutions</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            overflow: hidden;
        }

        .container {
            text-align: center;
            padding: 2rem;
            animation: fadeIn 1s ease-out;
            position: relative;
            z-index: 2;
        }

        .logo {
            font-size: 4rem;
            font-weight: 900;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: glow 3s ease-in-out infinite;
        }

        .tagline {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 3rem;
            opacity: 0.95;
        }

        .features {
            display: flex;
            gap: 2rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 3rem;
        }

        .feature {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 250px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .feature-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .feature-desc {
            font-size: 0.95rem;
            opacity: 0.9;
            line-height: 1.5;
        }

        .cta {
            margin-top: 3rem;
            display: inline-block;
            padding: 1rem 2.5rem;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .cta:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            animation: float 20s infinite linear;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes glow {
            0%, 100% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.5); }
            50% { text-shadow: 0 0 60px rgba(255, 255, 255, 0.8); }
        }

        @keyframes float {
            from {
                transform: translateY(100vh) rotate(0deg);
                opacity: 1;
            }
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .logo { font-size: 3rem; }
            .tagline { font-size: 1.2rem; }
            .features { flex-direction: column; align-items: center; }
        }
    </style>
</head>
<body>
    <div class="particles" id="particles"></div>

    <div class="container">
        <h1 class="logo">DELLIGHT.AI</h1>
        <p class="tagline">Illuminating Intelligence, Delivering Delight</p>

        <div class="features">
            <div class="feature">
                <div class="feature-icon">🚀</div>
                <h3 class="feature-title">Lightning Fast</h3>
                <p class="feature-desc">Powered by cutting-edge AI models for instant, accurate responses</p>
            </div>

            <div class="feature">
                <div class="feature-icon">🎯</div>
                <h3 class="feature-title">Precision Focused</h3>
                <p class="feature-desc">Tailored solutions that hit the mark every single time</p>
            </div>

            <div class="feature">
                <div class="feature-icon">✨</div>
                <h3 class="feature-title">Simply Delightful</h3>
                <p class="feature-desc">Intuitive experiences that make AI accessible to everyone</p>
            </div>
        </div>

        <a href="mailto:hello@dellight.ai" class="cta">Get Started</a>
    </div>

    <script>
        // Create floating particles
        const particlesContainer = document.getElementById('particles');
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Add subtle parallax effect
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            document.querySelector('.container').style.transform =
                \`translate(\${(x - 0.5) * 20}px, \${(y - 0.5) * 20}px)\`;
        });
    </script>
</body>
</html>`, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
