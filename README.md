# ANFAIA Website

Official website for the Asociación Nacional Faro, para la
Aceleración de la Inteligencia Artificial (ANFAIA).

## Description

ANFAIA is a non-profit organization dedicated to driving progress with Artificial Intelligence across multiple areas: culture, art, health, automatization, robotics, and environmental sustainability. This website showcases the association's initiatives.

## Technologies Used

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Main application layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── page.tsx          # Main page component
│   └── ui/               # Base UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── input.tsx
├── lib/                  # Utilities and helpers
│   └── utils.ts
├── public/               # Static assets
│   ├── ANFAIA_logo_web.png
│   ├── ANFAIA_logo_square.jpg
│   └── *.webp           # Work area images
└── styles/              # Additional style files
```

## Key Features

### Areas of Action
- **Culture**: Revolutionizing how we create and experience culture
- **Art**: Creative exploration at the intersection of art and AI
- **Health**: AI applications to improve quality of life
- **Robotics/Automation**: Intelligent systems and automation
- **Sustainability**: AI for fighting climate change
- **Ethics**: Responsible and ethical AI development

### Functionality
- Smooth navigation between sections
- Interactive animations with Framer Motion
- Responsive design for all devices
- Subscription modal to stay informed
- Links to official documents (calls, guidelines, policies)

## Installation and Development

### Prerequisites
- Node.js (version 20 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/ANFAIA/web.git
cd web
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

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs code linter

## Deployment

The project is configured for easy deployment on platforms like Vercel, which offers native Next.js integration.

### Environment Variables

No special environment variables are required for basic site functionality.

## Contributing

To contribute to the project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Contact

- **Email**: info@anfaia.org
- **Website**: [anfaia.org](http://anfaia.org)

## License

This project is under the terms specified in the LICENSE file.

## Official Documents

- [2025 Scholarship Call](https://docs.google.com/document/d/e/2PACX-1vSuT7Mb9YqG9bywfEwXlF1uznTJfb5EwGj-dJv3DI1aYao-ffYHUDRln3wntacOcRDnI7dGnOpX8y0o/pub)
- [General Guidelines](https://docs.google.com/document/d/e/2PACX-1vTTYdJO1w3Nzb4tP7lbkhs1UecyrDNPIZhJ9wKc4WYlrXDv4lGE2uZYtugKYDC6S9uQeh4tHF06_ZEf/pub)
- [Legal Notice](https://docs.google.com/document/d/e/2PACX-1vSYW5wIThnu-WR2ji_cdaMuWhxbqopbHdZwhLyiKC2WV77owIJqqvzPl691etyZ_l3hc098v17xuSHo/pub)
- [Privacy Policy](https://docs.google.com/document/d/e/2PACX-1vSFn9FHOtk83no0OTTN09rF9iHWIEJBqvdKToBenau6sPezSZqo9DDgzw8twhTZuxPM2Rt8-i9emJZo/pub)