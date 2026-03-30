# Granny's Pot — Homemade Pickles

A modern, responsive website for **Granny's Pot**, a homemade pickle business that sells a wide variety of traditional, handcrafted pickles.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)

---

## Features

- **Hero Section** — Eye-catching landing area showcasing the brand with product images
- **About / Our Story** — Brand story with key selling points (sun-cured, 100% natural, made with love)
- **Pickle Collection** — Product cards for 6 pickle varieties (Mango, Lemon, Mixed Veg, Garlic, Green Chilli, Amla)
- **Buy Now Section** — Prominent links to purchase on **Amazon** and follow on **Instagram**
- **Sticky Navbar** — Smooth-scroll navigation with glassmorphism effect
- **Responsive Footer** — Quick links, social icons, and contact info
- **Fully Responsive** — Mobile-first design that looks great on all devices

## Tech Stack

| Technology     | Purpose            |
| -------------- | ------------------ |
| Next.js 16     | React framework    |
| TailwindCSS 4  | Utility-first CSS  |
| TypeScript     | Type safety        |

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd GrannysPot

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
GrannysPot/
├── public/
│   ├── logo.png          # Brand logo
│   ├── photo1.jpeg       # Hero image
│   └── photo2.jpeg       # Secondary product image
├── src/
│   └── app/
│       ├── globals.css    # Global styles & TailwindCSS theme
│       ├── layout.tsx     # Root layout with metadata
│       └── page.tsx       # Homepage (all sections)
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Customisation

- **Amazon link** — Update the `href` in the Buy Now section (`src/app/page.tsx`) with your actual Amazon product/store URL
- **Instagram link** — Update the `href` with your Instagram page URL
- **Email** — Replace `hello@grannyspot.com` in the footer with your real email
- **Products** — Edit the `pickles` array at the top of `page.tsx` to add, remove, or modify pickle varieties
- **Images** — Replace images in `public/` with your own product photos

## License

This project is private and proprietary to Granny's Pot.
