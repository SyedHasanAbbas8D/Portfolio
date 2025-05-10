# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring 3D animations, smooth transitions, and a clean UI design. Perfect for showcasing your work as a web developer.

## Features

- 🎨 Modern UI with dark mode support
- 🌟 Interactive 3D animations using Three.js
- ✨ Smooth scroll animations with GSAP
- 📱 Fully responsive design
- 🎯 SEO optimized
- 📝 Contact form with validation
- 📸 Instagram integration
- 🎭 Project showcase with modals
- 💬 Testimonials carousel

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Three.js
- GSAP
- Radix UI
- ShadCN UI

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-3d.git
cd portfolio-3d
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Testimonials.tsx
│       ├── InstagramCTA.tsx
│       └── Contact.tsx
└── public/
    └── projects/
```

## Customization

1. Update the content in each section component to match your information
2. Add your project images to the `public/projects` directory
3. Update the Instagram handle in `InstagramCTA.tsx`
4. Customize the color scheme in `tailwind.config.js`

## Deployment

The project can be easily deployed to Vercel:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
