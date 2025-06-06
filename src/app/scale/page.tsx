import scaleImg from "public/scale.jpg";
import Hero from "@/components/hero";

export default function Scale() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt="steel factory"
        title="Scale your app to infinity"
      />
    </div>
  );
}
