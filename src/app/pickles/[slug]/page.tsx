import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPickleBySlug, pickles } from "@/data/pickles";

type PicklePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pickles.map((pickle) => ({ slug: pickle.slug }));
}

function getOfficialPriceList(slug: string) {
  const mangoAndGreenChilliSlugs = new Set([
    "aam-ka-achar",
    "chilli-pickle",
  ]);

  if (mangoAndGreenChilliSlugs.has(slug)) {
    return {
      smallPack: "350g = ₹250",
      largePack: "500g = ₹400",
    };
  }

  return {
    smallPack: "350g = ₹350",
    largePack: "500g = ₹500",
  };
}

export default async function PickleDetailPage({ params }: PicklePageProps) {
  const { slug } = await params;
  const pickle = getPickleBySlug(slug);

  if (!pickle) {
    notFound();
  }

  const pricing = getOfficialPriceList(slug);

  return (
    <main className="min-h-screen bg-[#fff7ed] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-[#b9412e] hover:text-[#8c2f22] mb-6"
        >
          ← Back to Homepage
        </Link>

        <section className="bg-white rounded-3xl border border-[#ce7a1b]/25 shadow-sm p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2f1608]">
              {pickle.name}
            </h1>
            <span className="inline-flex items-center bg-[#fde2bb] text-[#b9412e] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {pickle.tag}
            </span>
          </div>

          <p className="text-[#5a3825] leading-relaxed text-lg">{pickle.intro}</p>

          <div className="mt-6">
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#b9412e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#9e3626] transition-colors"
            >
              Buy on Amazon <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-[#fff3df] p-5 border border-[#ce7a1b]/20">
              <h2 className="text-xl font-bold text-[#2f1608] mb-3">Ingredients</h2>
              <ul className="space-y-2 text-sm text-[#5a3825]">
                {pickle.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex items-start gap-2">
                    <span className="mt-1 text-[#b9412e]">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#fff3df] p-5 border border-[#ce7a1b]/20 space-y-3">
              <h2 className="text-xl font-bold text-[#2f1608]">Product Info</h2>
              <p className="text-sm font-bold text-[#2f1608]">
                🏺 Granny&apos;s Pot - Official Price List
              </p>
              <p className="text-sm text-[#5a3825]"><strong>350g:</strong> {pricing.smallPack.replace("350g = ", "")}</p>
              <p className="text-sm text-[#5a3825]"><strong>500g:</strong> {pricing.largePack.replace("500g = ", "")}</p>
              <p className="text-sm text-[#5a3825]"><strong>Shelf Life:</strong> {pickle.shelfLife}</p>
              <p className="text-sm text-[#5a3825]"><strong>Storage:</strong> {pickle.storage}</p>

              <div className="pt-2">
                <h3 className="text-sm font-bold text-[#2f1608] mb-2">Crafted With Care</h3>
                <div className="flex flex-wrap gap-2">
                  {pickle.craftedWithCare.map((note) => (
                    <span
                      key={note}
                      className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-[#fde2bb] text-[#6f4730]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#ce7a1b]/20 p-5">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-bold text-[#2f1608]">Image Gallery</h2>
              <Image
                src="https://fssai.gov.in/upload/knowledge_hub/1117705b4339fa3e722FSSAI-logo-min+line.png"
                alt="FSSAI certified"
                width={180}
                height={54}
              />
            </div>
            <p className="text-sm text-[#6f4730] mb-4">
              Add at least 3 product images for this pickle in the future. Placeholder slots are ready below.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {pickle.galleryPlaceholders.map((fileName) => (
                <div
                  key={fileName}
                  className="aspect-[4/3] rounded-xl border-2 border-dashed border-[#ce7a1b]/40 bg-[#fff8ec] flex flex-col items-center justify-center text-center p-3"
                >
                  <span className="text-2xl">🫙</span>
                  <p className="text-xs text-[#6f4730] mt-2">Image slot</p>
                  <p className="text-[11px] text-[#b9412e] font-semibold mt-1">{fileName}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
