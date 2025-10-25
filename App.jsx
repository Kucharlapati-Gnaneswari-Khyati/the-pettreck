import { motion } from "framer-motion";

export default function ThePetTreck() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-100 text-gray-800">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-orange-600">The Pet Treck</h1>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Your one-stop solution for stress-free, pet-inclusive travel.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-700 transition">
            Plan Your Trip
          </button>
          <button className="border border-orange-600 text-orange-600 px-5 py-2 rounded-full hover:bg-orange-50 transition">
            Join Our Waitlist
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Why Leave Your Best Friend Behind?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Difficulty finding pet-friendly accommodations.</li>
            <li>Managing separate bookings for travel, stays, and activities.</li>
            <li>Emotional stress of leaving your furry friend behind.</li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Meet The Pet Treck 🐶</h2>
          <p className="mb-4">
            We make travel easy for pet lovers! With The Pet Treck, you can:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Book verified pet-friendly hotels and stays.</li>
            <li>Discover pet-approved restaurants and activities.</li>
            <li>Manage all bookings in one place — no more endless searching.</li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Why Pet Parents Love The Pet Treck ❤️</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Save Time</h3>
              <p>No more hours spent on unreliable websites — everything you need, in one click.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Stay Stress-Free</h3>
              <p>Travel confidently with verified pet policies and transparent listings.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Explore Together</h3>
              <p>Make every journey unforgettable — for both you and your pet.</p>
            </div>
          </div>
        </section>

        <section className="text-center my-16">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Ready to Travel Together?</h2>
          <p className="mb-6">Join hundreds of pet lovers exploring the world with The Pet Treck.</p>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-700 transition">
            Book Your First Trip
          </button>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-200">
        <p>📍 Made with ❤️ for Pet Lovers Everywhere</p>
        <p>📧 hello@pettreck.com | 🌐 www.pettreck.com</p>
      </footer>
    </div>
  );
}
