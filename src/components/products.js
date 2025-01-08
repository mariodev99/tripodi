import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      title: "Chapas",
      href: "/chapas",
      background: "bg-green-400",
    },
    {
      title: "Perfiles",
      href: "/perfiles",
      background: "bg-blue-400",
    },
    {
      title: "Policarbonatos",
      href: "/policarbonatos",
      background: "bg-yellow-400",
    },
    {
      title: "Aislantes",
      href: "/aislantes",
      background: "bg-blue-400",
    },
  ];

  return (
    <div className="px-7 mt-8">
      <h2 className="text-4xl font-bold">Productos</h2>
      <div className="mt-4 flex flex-col gap-1">
        {products.map((product) => (
          <Link key={product.title} href={product.href}>
            <div
              className={`rounded-3xl text-white p-6 flex justify-between items-center ${product.background}`}
            >
              <div className="text-3xl font-medium">{product.title}</div>
              <div className="bg-black text-white rounded-xl p-2">
                <ArrowRight></ArrowRight>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
