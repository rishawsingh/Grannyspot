import Image from "next/image";

/* ──────────────────────────────────
   Pickle product data
   ────────────────────────────────── */
const pickles = [
  {
    name: "Classic Mango Pickle",
    description:
      "Sun-ripened raw mangoes with a fiery blend of mustard, fenugreek and red chilli. A timeless family favourite.",
    tag: "Bestseller",
  },
  {
    name: "Tangy Lemon Pickle",
    description:
      "Zesty lemons slow-cured with turmeric and asafoetida. Perfect alongside dal-rice or parathas.",
    tag: "Popular",
  },
  {
    name: "Spicy Mixed Vegetable Pickle",
    description:
      "A medley of carrots, cauliflower, green chillies and raw mango tossed in aromatic spices.",
    tag: "New",
  },
  {
    name: "Garlic Pickle",
    description:
      "Whole garlic cloves marinated in mustard oil and a secret spice mix. Bold, pungent and addictive.",
    tag: "Hot",
  },
  {
    name: "Green Chilli Pickle",
    description:
      "Crisp green chillies stuffed with a tangy spice paste. For those who love it extra hot!",
    tag: "Spicy",
  },
  {
    name: "Amla (Gooseberry) Pickle",
    description:
      "Indian gooseberries brined with mustard and fennel. A delicious way to get your daily dose of Vitamin C.",
    tag: "Healthy",
  },
];

/* ──────────────────────────────────
   Navbar
   ────────────────────────────────── */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fffaf5]/90 backdrop-blur-md border-b border-[#f39c12]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Granny's Pot Logo"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-[#2d1810]">
            Granny&apos;s Pot
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2d1810]">
          <li>
            <a href="#about" className="hover:text-[#c0392b] transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-[#c0392b] transition-colors"
            >
              Our Pickles
            </a>
          </li>
          <li>
            <a
              href="#buy"
              className="hover:text-[#c0392b] transition-colors"
            >
              Buy Now
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#c0392b] transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────
   Hero Section
   ────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdebd0] via-[#fffaf5] to-[#eafaf1]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-20 md:py-32">
        <div className="space-y-6">
          <span className="inline-block bg-[#c0392b] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Homemade with Love
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#2d1810]">
            Taste the Tradition of{" "}
            <span className="text-[#c0392b]">Granny&apos;s Pot</span>
          </h1>
          <p className="text-lg text-[#5a3825] max-w-lg leading-relaxed">
            Authentic handcrafted pickles made from the finest ingredients and
            age-old family recipes. Every jar is packed with love, spice and
            everything nice.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#buy"
              className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <CartIcon />
              Shop Now
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Explore Pickles
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#f39c12]/40 shadow-2xl">
            <Image
              src="/photo1.jpeg"
              alt="Delicious homemade pickle from Granny's Pot"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/photo2.jpeg"
              alt="Pickle variety"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────
   About Section
   ────────────────────────────────── */
function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810]">
          Our Story
        </h2>
        <div className="w-16 h-1 bg-[#c0392b] mx-auto rounded-full" />
        <p className="text-lg text-[#5a3825] leading-relaxed max-w-2xl mx-auto">
          At <strong>Granny&apos;s Pot</strong>, every pickle tells a story.
          Inspired by generations of home cooking, we bring you the same
          authentic flavours that once filled our grandmother&apos;s kitchen.
          Using only the freshest seasonal produce, cold-pressed mustard oil,
          and hand-ground spices, our pickles are sun-cured the old-fashioned
          way — no preservatives, no shortcuts, just pure homemade goodness.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 pt-8">
          <FeatureCard
            icon={<SunIcon />}
            title="Sun-Cured"
            text="Slow-cured under the natural sun for deep, authentic flavour."
          />
          <FeatureCard
            icon={<LeafIcon />}
            title="100% Natural"
            text="No preservatives, no artificial colours — ever."
          />
          <FeatureCard
            icon={<HeartIcon />}
            title="Made with Love"
            text="Small-batch production to ensure the highest quality in every jar."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#fffaf5] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-[#fdebd0] text-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-[#2d1810] text-lg mb-2">{title}</h3>
      <p className="text-sm text-[#5a3825] leading-relaxed">{text}</p>
    </div>
  );
}

/* ──────────────────────────────────
   Products Section
   ────────────────────────────────── */
function Products() {
  return (
    <section
      id="products"
      className="bg-gradient-to-b from-[#fffaf5] to-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810]">
            Our Pickle Collection
          </h2>
          <div className="w-16 h-1 bg-[#c0392b] mx-auto rounded-full" />
          <p className="text-[#5a3825] max-w-xl mx-auto">
            From fiery mango to tangy lemon — discover the perfect pickle to
            spice up every meal.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pickles.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-[#f39c12]/10 hover:border-[#f39c12]/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🫙</span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-[#fdebd0] text-[#c0392b] px-2 py-0.5 rounded-full">
                  {p.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#2d1810] mb-2 group-hover:text-[#c0392b] transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-[#5a3825] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────
   Buy Now Section (Amazon + Instagram)
   ────────────────────────────────── */
function BuyNow() {
  return (
    <section id="buy" className="bg-[#2d1810] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Your Jar Today!
        </h2>
        <div className="w-16 h-1 bg-[#f39c12] mx-auto rounded-full" />
        <p className="text-lg text-[#e8c9a0] max-w-2xl mx-auto leading-relaxed">
          Our pickles are available on <strong>Amazon</strong> for quick and
          easy delivery right to your doorstep. You can also reach out to us on{" "}
          <strong>Instagram</strong> for custom orders, bulk queries, or just to
          say hello!
        </p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto pt-4">
          {/* Amazon Card */}
          <a
            href="https://www.amazon.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-8 transition-all border border-white/10 hover:border-[#f39c12]/50"
          >
            <div className="w-16 h-16 rounded-full bg-[#ff9900] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <AmazonIcon />
            </div>
            <h3 className="text-xl font-bold">Buy on Amazon</h3>
            <p className="text-sm text-[#e8c9a0]">
              Fast delivery &middot; Secure payment &middot; Easy returns
            </p>
            <span className="inline-flex items-center gap-1 text-[#f39c12] text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
              Shop Now <ArrowRight />
            </span>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/grannys_pot_flavor_unmatched"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-8 transition-all border border-white/10 hover:border-[#c0392b]/50"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <InstagramIcon />
            </div>
            <h3 className="text-xl font-bold">Follow on Instagram</h3>
            <p className="text-sm text-[#e8c9a0]">
              Recipes &middot; Behind the scenes &middot; Custom orders
            </p>
            <span className="inline-flex items-center gap-1 text-[#e74c3c] text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
              Visit Page <ArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────
   Footer
   ────────────────────────────────── */
function Footer() {
  return (
    <footer id="contact" className="bg-[#1e0f09] text-[#e8c9a0] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Granny's Pot"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-bold text-white">
              Granny&apos;s Pot
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Authentic homemade pickles crafted with love, tradition, and the
            finest ingredients since generations.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-[#f39c12] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#f39c12] transition-colors">
                Our Pickles
              </a>
            </li>
            <li>
              <a href="#buy" className="hover:text-[#f39c12] transition-colors">
                Buy Now
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold text-white">Connect With Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff9900] transition-colors"
              aria-label="Amazon"
            >
              <AmazonIcon />
            </a>
            <a
              href="https://www.instagram.com/grannys_pot_flavor_unmatched"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:hello@grannyspot.com"
              className="hover:text-[#f39c12] transition-colors"
            >
              hello@grannyspot.com
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-xs text-[#a07050]">
        &copy; {new Date().getFullYear()} Granny&apos;s Pot. All rights
        reserved.
      </div>
    </footer>
  );
}

/* ──────────────────────────────────
   SVG Icons
   ────────────────────────────────── */
function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function AmazonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705a.66.66 0 0 1-.753.077c-1.06-.881-1.25-1.289-1.834-2.128-1.756 1.789-2.998 2.326-5.27 2.326-2.69 0-4.787-1.66-4.787-4.979 0-2.594 1.405-4.361 3.404-5.224 1.733-.755 4.155-.892 6.005-1.1v-.41c0-.755.058-1.648-.385-2.3-.385-.582-1.124-.822-1.776-.822-1.208 0-2.285.62-2.548 1.904-.054.285-.263.567-.549.581l-3.075-.333c-.259-.058-.548-.266-.472-.663C5.77 1.97 8.752.588 11.418.588c1.37 0 3.156.365 4.235 1.4 1.37 1.283 1.24 2.993 1.24 4.858v4.394c0 1.322.548 1.9 1.064 2.614.18.254.22.558-.009.744-.576.481-1.601 1.373-2.163 1.873l-.641-.677zM21.779 20.13C19.455 21.891 16.06 22.8 13.132 22.8c-4.05 0-7.697-1.498-10.453-3.99-.217-.196-.023-.463.237-.312 2.977 1.733 6.66 2.778 10.46 2.778 2.563 0 5.383-.531 7.979-1.633.39-.168.72.257.424.487z" />
      <path d="M22.814 18.844c-.313-.4-2.073-.19-2.862-.096-.24.028-.278-.18-.06-.332 1.402-.984 3.702-.7 3.97-.37.268.332-.07 2.633-1.386 3.73-.203.168-.396.079-.306-.144.297-.742.963-2.388.644-2.788z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ──────────────────────────────────
   Page
   ────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <BuyNow />
      <Footer />
    </>
  );
}
