import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import NumberCounter from "@/components/NumberCounter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/marcus-hale-hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex flex-col">
          <Nav variant="light" />
          <div className="flex-1 flex flex-col justify-between px-6 pb-4 md:pb-12">
            <div className="pt-8 md:pt-0">
              <h1 className="text-[10vw] md:text-[10rem] font-black text-white leading-none tracking-tighter">
                MARCUS HALE
              </h1>
              <div className="flex flex-wrap gap-3 mt-1 text-white text-xs md:text-base tracking-wide">
                <span>#BRANDING</span>
                <span>#PRODUCT DESIGN</span>
                <span>#PRODUCT DEVELOPMENT</span>
                <span>#FRAMER</span>
                <span>#WEBFLOW</span>
              </div>
            </div>
            <div className="text-white text-xl md:text-3xl max-w-lg mb-24 md:mb-0">
              Designing inviting, functional, and stylish interiors for your
              home.
            </div>
          </div>
        </div>
      </div>

      {/* More about us section */}
      <section className="bg-white py-12 px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-normal">— About us</h2>
        </div>

        {/* Main text */}
        <div className="mb-12">
          <p className="text-2xl md:text-4xl lg:text-5xl font-normal">
            At our company, we take pride in our expertise in crafting immersive
            experiences that not only beautifully blend the rich tapestry of
            diverse cultures but also incorporate the latest advancements in
            technology. This unique fusion allows us to create interactions that
            resonate deeply with users, leaving a lasting impression and
            fostering a genuine connection.
          </p>
        </div>

        {/* Bottom section: justify between */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="text-lg md:text-xl font-medium">
            <p>Founded in Los Angeles.</p>
            <p>Operating globally.</p>
          </div>
          <Link
            href="/about"
            className="inline-block border-2 border-black px-10 py-5 text-xl hover:bg-black hover:text-white transition-all"
          >
            More About Us
          </Link>
        </div>
      </section>

      {/* Works section */}
      <section className="bg-white py-12 px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-normal">— Works</h2>
        </div>

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

      {/* Services section */}
      <section className="bg-white py-12 px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-normal">— Services</h2>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-4">
          {/* Branding */}
          <Link
            href="/branding"
            className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-20 h-16 bg-gray-100 overflow-hidden relative">
              <Image
                src="/branding-img.jpg"
                alt="Branding"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl md:text-7xl lg:text-8xl font-black uppercase">
              Branding
            </h3>
          </Link>

          {/* Development */}
          <Link
            href="/development"
            className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-20 h-16 bg-gray-100 overflow-hidden relative">
              <Image
                src="/development-img.jpg"
                alt="Development"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl md:text-7xl lg:text-8xl font-black uppercase">
              Development
            </h3>
          </Link>

          {/* Product Design */}
          <Link
            href="/product-design"
            className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-20 h-16 bg-gray-100 overflow-hidden relative">
              <Image
                src="/product-design-img.jpg"
                alt="Product Design"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl md:text-7xl lg:text-8xl font-black uppercase">
              Product Design
            </h3>
          </Link>

          {/* Framer */}
          <Link
            href="/framer"
            className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-20 h-16 bg-gray-100 overflow-hidden relative">
              <Image
                src="/framer-img.png"
                alt="Framer"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl md:text-7xl lg:text-8xl font-black uppercase">
              Framer
            </h3>
          </Link>
        </div>
      </section>

      {/* Impact section */}
      <section className="bg-white py-12 px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-normal">
            Our Impact
            <br />
            by the Numbers
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Customer Satisfaction */}
          <div className="bg-gray-50 p-8 flex flex-col justify-between min-h-[300px]">
            <div className="text-7xl md:text-9xl font-black">
              <NumberCounter target={100} suffix="%" />
            </div>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm font-medium">Customer Satisfaction</p>
            </div>
          </div>

          {/* Innovation & Valuable insights */}
          <div className="bg-gray-50 p-8 flex flex-col justify-between min-h-[300px]">
            <div className="text-7xl md:text-9xl font-black">
              <NumberCounter target={20} suffix="+" />
            </div>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm font-medium">
                Innovation & Valuable insights
              </p>
            </div>
          </div>

          {/* Revenue Generated */}
          <div className="bg-gray-50 p-8 flex flex-col justify-between min-h-[300px]">
            <div className="text-7xl md:text-9xl font-black">
              <NumberCounter target={25} prefix="$" suffix="M" />
            </div>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm font-medium">Revenue Generated</p>
            </div>
          </div>

          {/* Users Worldwide */}
          <div className="bg-gray-50 p-8 flex flex-col justify-between min-h-[300px]">
            <div className="text-7xl md:text-9xl font-black">
              <NumberCounter target={50} suffix="M" />
            </div>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm font-medium">Users Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos section */}
      <section className="bg-white py-12 px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-normal">
            Reliable design collaborator
            <br />
            for top-tier brands
          </h2>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-gray-200">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <div
              key={num}
              className="border border-gray-200 p-8 flex items-center justify-center"
            >
              <Image
                src={`/logo-ipsum-${num.toString().padStart(2, "0")}.png`}
                alt={`Client logo ${num}`}
                width={160}
                height={80}
                className="object-contain opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials section */}
      <section className="bg-white py-12 px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-normal">
            What Top Client
            <br />
            Say About Us
          </h2>
        </div>

        {/* Testimonials list */}
        <div className="flex flex-col gap-16">
          {/* Matthew Baker */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-6xl md:text-8xl font-black mb-4">100%</div>
              <div className="text-sm font-medium border-t border-gray-200 pt-4 mb-8">
                Trust Rate
              </div>
              <p className="text-lg mb-6">
                "MarcusHale transformed my living space into a sanctuary of calm
                and elegance. Their latest collection beautifully captures
                minimalist design while prioritizing sustainability. I love how
                each piece reflects their commitment to thoughtful
                craftsmanship!"
              </p>
              <div>
                <p className="font-medium">Matthew Baker</p>
                <p className="text-sm opacity-70">
                  CEO & Co-Founder Rossiakton
                </p>
              </div>
            </div>
            <div className="w-full aspect-[16/9] relative">
              <Image
                src="/matthew-baker-img.png"
                alt="Matthew Baker"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Racheal Green */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-6xl md:text-8xl font-black mb-4">80%</div>
              <div className="text-sm font-medium border-t border-gray-200 pt-4 mb-8">
                Trust Rate
              </div>
              <p className="text-lg mb-6">
                "The brand has turned my space into a chill sanctuary full of
                style and charm. Their latest collection nails a modern vibe
                while keeping sustainability in mind. I really dig how each
                piece shows off their dedication to great craftsmanship!"
              </p>
              <div>
                <p className="font-medium">Racheal Green</p>
                <p className="text-sm opacity-70">CEO Hubbo</p>
              </div>
            </div>
            <div className="w-full aspect-[16/9] relative">
              <Image
                src="/rachealn-green.png"
                alt="Racheal Green"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="bg-white">
        {/* Heading */}
        <div className="py-12 px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-normal">Meet Our Team</h2>
        </div>
        {/* Alicia Jimenez */}
        <div className="px-6 md:px-12">
          <div className="aspect-[4/3] relative">
            <Image
              src="/alicia-jimenez-img.jpg"
              alt="Alicia Jimenez"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-12 bg-white">
            <p className="text-2xl md:text-3xl font-normal">Alicia Jimenez</p>
            <p className="text-sm opacity-70">CEO & Co-Founder</p>
          </div>
        </div>

        {/* Enzo Fernandez */}
        <div className="px-6 md:px-12">
          <div className="aspect-[4/3] relative">
            <Image
              src="/enzo-fernandez-img.jpg"
              alt="Enzo Fernandez"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-12 bg-white">
            <p className="text-2xl md:text-3xl font-normal">Enzo Fernandez</p>
            <p className="text-sm opacity-70">Developer</p>
          </div>
        </div>

        {/* Joey Geller */}
        <div className="px-6 md:px-12">
          <div className="aspect-[4/3] relative">
            <Image
              src="/joey-geller-img.jpg"
              alt="Joey Geller"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-12 bg-white">
            <p className="text-2xl md:text-3xl font-normal">Joey Geller</p>
            <p className="text-sm opacity-70">CTO</p>
          </div>
        </div>

        {/* Levi Colwill */}
        <div className="px-6 md:px-12">
          <div className="aspect-[4/3] relative">
            <Image
              src="/levi-colwill-img.png"
              alt="Levi Colwill"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-12 bg-white">
            <p className="text-2xl md:text-3xl font-normal">Levi Colwill</p>
            <p className="text-sm opacity-70">Designer</p>
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="relative min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/together-img.png"
            alt="Together"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-screen flex flex-col items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-8 text-center md:text-left">
            <div className="text-white">
              <p className="text-3xl md:text-5xl font-normal">
                Together, let's embark on
                <br />
                a journey to create
                <br />
                something that stands
                <br />
                the test of time.
              </p>
            </div>
            <Link
              href="/contact"
              className="border-2 border-white px-8 py-4 text-white hover:bg-white hover:text-black transition-all"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
