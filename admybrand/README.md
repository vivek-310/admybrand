# ADmyBRAND AI - Marketing Platform

A modern, AI-powered marketing platform built with React, Framer Motion, and Tailwind CSS. Features a sleek dark theme design with smooth animations and interactive components.

![ADmyBRAND AI](https://img.shields.io/badge/React-18.0+-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0+-0055FF?style=for-the-badge&logo=framer)

## 🚀 Features

### Core Features
- **AI Content Generation** - Generate engaging ad copy and marketing content
- **Smart Campaign Optimization** - ML-powered campaign optimization
- **Audience Insights** - Deep analytics and audience behavior analysis
- **Multi-Channel Management** - Unified dashboard for all marketing channels
- **Predictive Analytics** - Forecast campaign performance and trends
- **Automated Reporting** - Comprehensive reports with actionable insights

### Technical Features
- **Modern Dark Theme** - Sleek black and white design
- **Smooth Animations** - Framer Motion powered interactions
- **Responsive Design** - Mobile-first approach
- **Interactive Components** - Pricing calculator, testimonials carousel
- **Custom Preloader** - Animated loading screen
- **Bento Grid Layout** - Modern card-based feature showcase
- **Parallax Effects** - Scroll-based animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: npm
- **Language**: JavaScript (JSX)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admybrand
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 Project Structure

```
admybrand/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── AnimatedBackground.jsx
│   │   ├── AnimatedLogo.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FAQ.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── PreLoader.jsx
│   │   ├── Pricing.jsx
│   │   ├── PricingCalculator.jsx
│   │   ├── Testimonials.jsx
│   │   └── VideoSection.jsx
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md
```

## 🎯 Key Components

### PreLoader
- Custom animated loading screen
- Letter-by-letter text animation
- Progress indicator
- Smooth transition to main content

### Hero Section
- Video production focus
- Floating images with parallax
- Interactive play button
- Social media links
- Call-to-action buttons

### Features (Bento Grid)
- Modern card-based layout
- Hover animations and effects
- Responsive grid system
- Icon animations

### Pricing Calculator
- Interactive sliders for credits and team size
- Real-time price calculation
- Billing period toggle
- Annual discount display

### Testimonials
- Carousel with navigation
- Smooth transitions
- Dot indicators
- Responsive design

## 🎨 Design System

### Color Palette
- **Primary Background**: Black (`#000000`)
- **Text**: White (`#FFFFFF`)
- **Secondary Text**: Gray (`#9CA3AF`)
- **Accents**: White for interactive elements
- **Borders**: Gray (`#374151`)

### Typography
- **Headings**: Bold, large scale
- **Body Text**: Regular weight, readable
- **Interactive Elements**: Medium weight

### Animations
- **Entrance**: Fade-in with slide-up
- **Hover**: Scale and color transitions
- **Scroll**: Parallax and reveal effects
- **Loading**: Staggered animations

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Features

- **Lazy Loading**: Components load on demand
- **Code Splitting**: Automatic bundle optimization
- **Image Optimization**: Optimized assets
- **Smooth Scrolling**: Enhanced user experience
- **Scrollbar Hidden**: Clean, minimal design

## 🔧 Customization

### Adding New Features
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to lazy loading or eager import as needed

### Styling Changes
- Modify `tailwind.config.js` for theme changes
- Update `src/index.css` for global styles
- Component-specific styles in respective files

### Animation Modifications
- Update Framer Motion variants in components
- Modify transition durations and easing
- Add new animation sequences

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

**Dependencies issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Clear build cache
npm run build --force
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
