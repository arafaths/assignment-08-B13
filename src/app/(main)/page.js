import Hero from "@/components/home/hero";
import PopularProducts from "@/components/home/popularproducts";
import Image from "next/image";

export const metadata = {
  title: 'SunCart | Home',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularProducts/>
    </div>
  );
}
