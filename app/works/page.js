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
          <Link href="/califfo-wonderful-relax" className="group">
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
              <p className="text-lg font-medium">/2026</p>
            </div>
          </Link>

          {/* Forma Decor */}
          <Link href="/forma-decor" className="group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
              <Image
                src="/forma-decor.png"
                alt="Forma Decor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">FORMA DECOR</p>
              <p className="text-lg font-medium">/2025</p>
            </div>
          </Link>

          {/* Effortless Goods */}
          <Link href="/effortless-goods" className="group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
              <Image
                src="/effortless-goods.png"
                alt="Effortless Goods"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">EFFORTLESS GOODS</p>
              <p className="text-lg font-medium">/2026</p>
            </div>
          </Link>

          {/* Stillness Furnishings */}
          <Link href="/stillness-furnishings" className="group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
              <Image
                src="/stillness-furnishings.png"
                alt="Stillness Furnishings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">STILLNESS FURNISHINGS</p>
              <p className="text-lg font-medium">/2025</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
