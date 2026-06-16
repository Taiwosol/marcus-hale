import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import NumberCounter from "@/components/NumberCounter";

export default function About() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full">
          <div className="text-2xl md:text-3xl font-normal">— About</div>
          <div className="flex-1 max-w-4xl">
            <p className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight">
              A forward-thinking agency that places a strong emphasis on
              strategic planning and execution, ensuring that every decision is
              aligned with our clients' long-term goals and objectives
              perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* About image section */}
      <section className="bg-white px-6 md:px-12">
        <div className="w-full h-[70vh] md:h-[85vh] relative">
          <Image
            src="/about-img.jpg"
            alt="About Us"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* What we do section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h3 className="text-2xl md:text-3xl font-normal mb-8">
          We Go Beyond Vanity Metrics
        </h3>
        <p className="text-3xl md:text-5xl lg:text-6xl font-normal mb-12 leading-tight">
          Established in 2013, our agency has dedicated over a decade to
          delivering exceptional services. We are proud of our unwavering
          commitment to quality and our ability to swiftly adapt to the
          ever-evolving changes within our industry standard.
        </p>
        <Link
          href="/contact"
          className="inline-block border-2 border-black px-10 py-5 text-xl hover:bg-black hover:text-white transition-all"
        >
          Contact Us
        </Link>
      </section>

      {/* Numbers section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-normal mb-12">
          It's not about the numbers, but they do tell a story.
        </h2>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 py-8 border-t border-gray-200 items-center">
            <div className="text-xl md:text-2xl font-normal">
              12+ Years of Experience
            </div>
            <div className="text-xl md:text-2xl font-normal">
              With over a decade of experience, our agency has been dedicated to
              delivering exceptional services since 2013.
            </div>
            <div className="aspect-[3/4] relative">
              <Image
                src="/experience-img.png"
                alt="Experience"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 py-8 border-t border-gray-200 items-center">
            <div className="text-xl md:text-2xl font-normal">
              101 Projects Launched
            </div>
            <div className="text-xl md:text-2xl font-normal">
              Since our founding in 2013, we have successfully launched many
              projects, showcasing our dedication to excellence.
            </div>
            <div className="aspect-[3/4] relative">
              <Image
                src="/launched-img.png"
                alt="Projects Launched"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 py-8 border-t border-gray-200 items-center">
            <div className="text-xl md:text-2xl font-normal">
              36 Nationalities
            </div>
            <div className="text-xl md:text-2xl font-normal">
              Since 2013, our agency has proudly served clients from 36 diverse
              nationalities.
            </div>
            <div className="aspect-[3/4] relative">
              <Image
                src="/nationalities-img.png"
                alt="Nationalities"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 py-8 border-t border-b border-gray-200 items-center">
            <div className="text-xl md:text-2xl font-normal">55 Clients</div>
            <div className="text-xl md:text-2xl font-normal">
              Our agency has proudly served a diverse range of clients over the
              years.
            </div>
            <div className="aspect-[3/4] relative">
              <Image
                src="/clients-img.png"
                alt="Clients"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact section (Stats grid) */}
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

      {/* Team section */}
      <section className="bg-white">
        <div className="py-12 px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-normal">Meet Our Team</h2>
        </div>
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
