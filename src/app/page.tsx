import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Luxury watch and shoes"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="z-10 text-center text-white">
          <h1 className="text-6xl font-light mb-4">CHRONOSTEP</h1>
          <p className="text-xl font-light mb-8">Timeless Elegance for Your Wrist and Feet</p>
          <Link 
            href="/collections"
            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors"
          >
            Explore Collections
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[600px] group cursor-pointer">
            <Image
              src="/watches.jpg"
              alt="Luxury watches"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
              <h2 className="text-4xl text-white font-light">Watches</h2>
            </div>
          </div>
          <div className="relative h-[600px] group cursor-pointer">
            <Image
              src="/shoes.jpg"
              alt="Designer shoes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
              <h2 className="text-4xl text-white font-light">Shoes</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16">Featured Pieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative h-[400px] mb-4">
                  <Image
                    src={`/product-${item}.jpg`}
                    alt="Featured product"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600">$999</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for exclusive offers and new arrivals</p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 bg-transparent border border-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
