import Image from "next/image";
import { Card } from "@/components/card";
import pattern from "../../(homepage)/images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg";

const name = "card/glass";

const components = ["card/glass"];

const Component = () => {
  return (
    <div className="relative overflow-clip rounded-xl p-12">
      <Image
        alt=""
        className="absolute inset-0 object-cover contrast-200"
        src={pattern}
      />
      <Card className="block aspect-square p-24" variant="glass"></Card>
    </div>
  );
};

export const CardGlassDemo = {
  Component,
  components,
  name,
};
