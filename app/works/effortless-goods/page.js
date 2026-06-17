import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function EffortlessGoods() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero section - Main image with title */}
      <section className="bg-white py-6 px-6 md:px-12">
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-4xl md:text-7xl font-black uppercase">
            The Voyager Tote
          </h1>
          <span className="text-xl md:text-3xl font-black">/2024</span>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src="/effortless-goods.png"
            alt="The Voyager Tote"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Text section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <p className="text-xl md:text-3xl lg:text-4xl font-normal mb-12 max-w-3xl">
          The Voyager Tote from Effortless Goods is designed for the modern
          explorer who values both utility and understated elegance. Crafted
          from durable, premium canvas and accented with rich, vegetable-tanned
          leather straps.
        </p>
        <div className="flex flex-col gap-4 text-xl md:text-2xl font-medium">
          <p>The Voyager Tote</p>
          <p>2024</p>
          <p>Branding</p>
          <p>Lead Designer</p>
        </div>
      </section>

      {/* Gallery section - images 01-04 */}
      <section className="bg-white py-6 px-6 md:px-12">
        <div className="aspect-[16/9] relative overflow-hidden mb-6">
          <Image
            src="/effortless-goods-01.jpg"
            alt="Effortless Goods 01"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src="/effortless-goods-02.jpg"
              alt="Effortless Goods 02"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src="/effortless-goods-3.jpg"
              alt="Effortless Goods 03"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden mt-6">
          <Image
            src="/effortless-goods-04.jpg"
            alt="Effortless Goods 04"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Next Project section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Next Project</h2>
        <Link href="/works/stillness-furnishings" className="group">
          <div className="aspect-[16/9] relative overflow-hidden mb-4">
            <Image
              src="/stillness-furnishings.png"
              alt="The Solace Chair"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">THE SOLACE CHAIR</p>
            <p className="text-xl font-medium">/2025</p>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
