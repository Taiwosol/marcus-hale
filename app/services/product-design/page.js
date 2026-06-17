import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function ProductDesign() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero text section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <h1 className="text-4xl md:text-7xl font-black uppercase mb-6">
          Product Design
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl font-normal max-w-3xl">
          Introducing Marcus Hale—a groundbreaking product design service that
          reimagines your product's identity.
        </p>
      </section>

      {/* Gallery section - images 01-07 */}
      <section className="bg-white px-6 md:px-12">
        {/* Image 01 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/product-design-01.png"
            alt="Product Design 01"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 02 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/product-design-02.png"
            alt="Product Design 02"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 03 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/product-design-03.png"
            alt="Product Design 03"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 04 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/product-design-04.png"
            alt="Product Design 04"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 05 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/product-design-05.png"
            alt="Product Design 05"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Image 06 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/product-design-06.png"
            alt="Product Design 06"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Text before 7th image - right-aligned, bolder, smaller */}
        <section className="bg-white py-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium max-w-4xl ml-auto">
            Meet MarcusHale — a revolutionary service that transforms your
            product's identity. Our creative approach and skilled team craft
            distinctive design strategies tailored to connect with your
            audience. Whether you're debuting a new product or refining an
            existing one, we personalize our offerings to boost your product's
            attractiveness and functionality.
          </p>
        </section>
        {/* Image 07 */}
        <div className="w-full h-screen relative overflow-hidden mb-6 md:mb-8">
          <Image
            src="/product-design-07.png"
            alt="Product Design 07"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Next Services section - text bold, image full 75% width */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
          <h2 className="text-2xl md:text-3xl font-bold">Next Services</h2>
          <div className="w-full">
            <Link href="/services/framer" className="group">
              <div className="w-full h-[70vh] relative overflow-hidden">
                <Image
                  src="/framer-07.png"
                  alt="Framer"
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
