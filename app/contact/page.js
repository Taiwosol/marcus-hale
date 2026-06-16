import Nav from "@/components/Nav";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Nav variant="dark" />

      {/* Hero section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="text-2xl md:text-3xl font-normal">— Contact</div>
          <div className="flex-1 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-normal leading-tight">
              Connect with Us for an Unforgettable Experience!
            </h1>
          </div>
        </div>
      </section>

      {/* Contact info and form section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg">
                123 Innovation Way, Suite 456, Tech City, CA 90210
              </p>
              <p className="text-lg">
                789 Creative Lane, Apt 101, Future Town, CA 90211
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg">(+234) 814-9048-803</p>
              <p className="text-lg">(+234) 816-0948-029</p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-5 bg-gray-100 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-base mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-5 bg-gray-100 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base mb-2">Business Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-5 bg-gray-100 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="example@company.com"
                  />
                </div>
                <div>
                  <label className="block text-base mb-2">Business Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-5 bg-gray-100 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Marcus Hale"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base mb-2">
                    Business Website
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-5 bg-gray-100 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Marcus Hale Ltd"
                  />
                </div>
                <div>
                  <label className="block text-base mb-2">Choose service</label>
                  <div className="relative">
                    <select className="w-full px-4 py-5 bg-gray-100 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer pr-12">
                      <option value="">Select...</option>
                      <option value="branding">Branding</option>
                      <option value="development">Development</option>
                      <option value="product-design">Product Design</option>
                      <option value="framer">Framer</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 border-2 border-gray-300 px-12 py-6 text-lg text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all flex items-center gap-3 justify-center"
              >
                SUBMIT
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Dublin image section */}
      <section className="bg-white px-6 md:px-12 py-12">
        <h2 className="text-3xl md:text-4xl font-normal mb-6">
          Headquarters in Dublin
        </h2>
        <div className="w-full h-[70vh] md:h-[85vh] relative">
          <Image
            src="/dublin-img.png"
            alt="Dublin"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
