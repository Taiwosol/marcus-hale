import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Works() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero text section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-normal mb-8">— Works</h2>
        <p className="text-2xl md:text-3xl font-normal mb-12 max-w-2xl">
          Actions That Resonate Far Beyond Words and Speak Volumes.
        </p>
        <p className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl">
          We are an innovative agency focused on strategic planning and
          execution, making sure every choice aligns with our clients' long-term
          goals.
        </p>
      </section>

      {/* Works grid section */}
      <section className="bg-white py-12 px-6 md:px-12">
        {/* Works grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Califfi Wonderful Relax */}
          <Link href="/works/califfopage" className="group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
              <Image
                src="/califfo-relax.jpg"
                alt="Califfi Wonderful Relax"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">CALIFFO WONDERFUL RELAX</p>
              <p className="text-lg font-medium">/2024</p>
            </div>
          </Link>

          {/* The Aura Vase */}
          <Link href="/works/forma-decor" className="group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
              <Image
                src="/forma-decor.png"
                alt="The Aura Vase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">THE AURA VASE</p>
              <p className="text-lg font-medium">/2025</p>
            </div>
          </Link>

          {/* The Voyager Tote */}
          <Link href="/works/effortless-goods" className="group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
              <Image
                src="/effortless-goods.png"
                alt="The Voyager Tote"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">THE VOYAGER TOTE</p>
              <p className="text-lg font-medium">/2024</p>
            </div>
          </Link>

          {/* The Solace Chair */}
          <Link href="/works/stillness-furnishings" className="group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
              <Image
                src="/stillness-furnishings.png"
                alt="The Solace Chair"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">THE SOLACE CHAIR</p>
              <p className="text-lg font-medium">/2025</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
