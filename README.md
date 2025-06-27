# Red Hat Website Skeleton

A modern, responsive website skeleton built with Next.js, featuring Red Hat branding and a dynamic card carousel.

## 🚀 Features

- **Modern Design**: Clean, professional UI similar to enterprise SaaS platforms
- **Red Hat Branding**: Custom Red Hat logo and red accent colors throughout
- **Responsive Header**: Mobile-friendly navigation with hamburger menu
- **Card Carousel**: Interactive product showcase with navigation controls
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **TypeScript**: Type-safe development with full TypeScript support
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Carousel**: Embla Carousel React
- **Icons**: Lucide React
- **Development**: Hot reload with Turbopack

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🏗 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and utilities
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
└── components/
    ├── Header.tsx           # Responsive header with Red Hat branding
    └── CardCarousel.tsx     # Interactive card carousel component
```

## 🎨 Components

### Header Component
- Red Hat logo with "RH" monogram
- Responsive navigation menu
- Mobile hamburger menu
- Styled with Red Hat brand colors

### Card Carousel Component
- Smooth horizontal scrolling
- Navigation arrows
- Responsive design (1 card on mobile, 2 on tablet, 3 on desktop)
- Card categories and descriptions
- Hover effects and transitions

## 📝 Customization

### Adding New Cards
Edit the `sampleCards` array in `src/app/page.tsx`:

```typescript
const sampleCards: CardData[] = [
  {
    id: 'unique-id',
    title: 'Your Card Title',
    description: 'Your card description...',
    image: 'placeholder', // or actual image URL
    category: 'Your Category',
    link: '#' // or actual link
  },
  // Add more cards...
];
```

### Changing Colors
The website uses Red Hat's brand colors. To customize:
- Primary red: `bg-red-600`, `text-red-600`
- Hover red: `hover:bg-red-700`
- Update in Tailwind classes throughout components

### Modifying Layout
- Header: Edit `src/components/Header.tsx`
- Content sections: Edit `src/app/page.tsx`
- Carousel: Edit `src/components/CardCarousel.tsx`

## 🎯 Ready for Production

This skeleton is production-ready and includes:
- ✅ SEO-friendly structure
- ✅ Performance optimizations
- ✅ Mobile responsiveness
- ✅ TypeScript for reliability
- ✅ Modern React patterns
- ✅ Accessible design

## 🚀 Deployment

Deploy easily to Vercel (recommended for Next.js):

```bash
npm run build
```

Or deploy to any platform that supports Node.js applications.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
