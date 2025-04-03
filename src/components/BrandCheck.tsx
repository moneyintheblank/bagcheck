
import { useEffect, useState } from "react";
import data from "../data/brandData.json";

export default function BrandCheck() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any | null>(null);

  useEffect(() => {
    const storedSearch = localStorage.getItem("bagcheckSearch") || "";
    setSearch(storedSearch);
    if (storedSearch) handleSearch(storedSearch);
  }, []);

  const handleSearch = (term: string) => {
    const match = data.find((b) => b.name.toLowerCase() === term.toLowerCase());
    setResults(match || null);
  };

  return (
    <section id="check" className="py-16 px-6 max-w-2xl mx-auto space-y-8">
      {results ? (
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="text-2xl font-bold">{results.name}</h3>
          <p className="text-lg font-semibold text-red-600">Ethical Score: {results.ethicalScore}</p>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Receipts:</h4>
            <ul className="list-disc pl-6 text-sm text-red-500">
              {results.issues.map((issue: string, idx: number) => <li key={idx}>{issue}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Better buys:</h4>
            <ul className="list-disc pl-6 text-sm text-green-600">
              {results.alternatives.map((alt: any, idx: number) => (
                <li key={idx}><strong>{alt.name}</strong>: {alt.reason}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No results yet. Try a known brand like Amazon, Target, or Walmart.</p>
      )}
    </section>
  );
}
