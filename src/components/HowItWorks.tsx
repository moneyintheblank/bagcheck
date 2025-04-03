
export default function HowItWorks() {
  return (
    <section id="how" className="bg-gray-50 py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">1️⃣ Paste a link</h3>
          <p className="text-gray-600">That Amazon cart? Yeah, let’s check that.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">2️⃣ See the receipts</h3>
          <p className="text-gray-600">Who owns it, where the money flows, and why it matters.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">3️⃣ Get better options</h3>
          <p className="text-gray-600">Because your bag should match your values—not fund your enemies.</p>
        </div>
      </div>
    </section>
  );
}
