import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Califfopage() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero section - Main image with title */}
      <section className="bg-white py-6 px-6 md:px-12">
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-4xl md:text-7xl font-black uppercase">
            Califfi Wonderful Relax
          </h1>
          <span className="text-xl md:text-3xl font-black">/2024</span>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src="/califfo-relax.jpg"
            alt="Califfi Wonderful Relax"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Text section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <p className="text-xl md:text-3xl lg:text-4xl font-normal mb-12 max-w-3xl">
          At Califf, we believe in creating extraordinary experiences that
          inspire relaxation and rejuvenation. Our latest project showcases a
          unique approach to wellness, blending innovative design with serene
          environments.
        </p>
        <div className="flex flex-col gap-4 text-xl md:text-2xl font-medium">
          <p>Roman Veyra</p>
          <p>2024</p>
          <p>Product Design</p>
          <p>Director</p>
        </div>
      </section>

      {/* Gallery section - images 01-04 */}
      <section className="bg-white py-6 px-6 md:px-12">
        <div className="aspect-[16/9] relative overflow-hidden mb-6">
          <Image
            src="/califfo-relax-01.jpg"
            alt="Califfi Relax 01"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src="/califfo-relax-02.jpg"
              alt="Califfi Relax 02"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src="/califfo-relax-03.jpg"
              alt="Califfi Relax 03"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="aspect-[16/9] relative overflow-hidden mt-6">
          <Image
            src="/califfo-relax-04.jpg"
            alt="Califfi Relax 04"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Next Project section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Next Project</h2>
        <Link href="/works/forma-decor" className="group">
          <div className="aspect-[16/9] relative overflow-hidden mb-4">
            <Image
              src="/forma-decor.png"
              alt="The Aura Vase"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">THE AURA VASE</p>
            <p className="text-xl font-medium">/2025</p>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
