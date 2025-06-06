import performanceImg from "public/performance.jpg";
import Hero from "@/components/hero";

export default function Performance() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="welding"
        title="We serve high performance applications"
      />
    </div>
  );
}
