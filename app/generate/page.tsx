import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import SensorsHUD from "@/components/ui_sections/SensorsHUD";
import { Instagram, Wand2 } from "lucide-react";
import Image from "next/image";

async function getStuff() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function GeneratePage() {
  const recipes = await getStuff();

  return (
    <Container>
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-1 text-center mx-auto m-0">
          <a href="/">
            <Image
              className="rounded-xl"
              src="/img/profile_pic.jpg"
              width="180"
              height="180"
              alt="1"
            />
          </a>
          <p>Click to re-take the photo</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 text-start">
          <SensorsHUD></SensorsHUD>
          <Button size="lg">
            <Wand2 /> Generate
          </Button>
        </div>
      </div>
    </Container>
  );
}
