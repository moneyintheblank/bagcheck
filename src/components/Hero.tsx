
import { useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    const el = document.getElementById("check");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("bagcheckSearch", search);
  };

  return (
    <section className="bg-red-50 py-20 px-6 text-center space-y-6">
      <img src="/bagcheck-logo.png" alt="BagCheck logo" className="mx-auto w-24 h-24 mb-2" />
      <h1 className="text-4xl font-extrabold text-gray-900 max-w-3xl mx-auto">
        Nice pick. Too bad it funds <span className="underline decoration-wavy decoration-red-400">some billionaire’s yacht</span>.
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        💰 BagCheck helps you see where your money’s really going—so you can shop your values.
      </p>
      <div className="flex max-w-xl mx-auto space-x-2">
        <input
          className="border p-2 flex-1 rounded-md"
          placeholder="e.g. Target, Amazon, Best Buy..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Check
        </button>
      </div>
    </section>
  );
}
