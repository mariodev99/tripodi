import CarouselImages from "@/components/carousel";
import Numbers from "@/components/numbers";
import Products from "@/components/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <div className="text-center px-5 pt-12">
        <h1 className="text-4xl font-semibold">
          El mundo del steelframe en Tandil
        </h1>
        <p className="mt-1 text-lg text-gray-900">
          Chapas, perfiles, aislantes y todo lo que necesitas para construir{" "}
        </p>
      </div>
      <CarouselImages></CarouselImages>
      <Numbers />

      <Products />
    </div>
  );
}
