import { RefreshCcw, Flame } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Slider } from "../ui/ComparisonSlider";

export default function SensorsHUDElement() {
  var output_images = [
    { id: "1", path: "/img/outputs/1.png" },
    { id: "2", path: "/img/outputs/2.png" },
    { id: "3", path: "/img/outputs/3.png" },
    { id: "4", path: "/img/outputs/4.png" },
  ];
  const img_dims = "50";

  return (
    <>
      <div className="grid grid-rows-2 items-center">
        <div className="grid grid-rows-2 border border-black m-1 rounded-sm p-1">
          <div className="grid grid-cols-1 grid-rows-1 text-xs">
            <strong className="text-center">Sensors</strong>
          </div>
          <div className="grid grid-cols-2 text-xs text-center">
            <div className="text-xs">
              <Badge>
                <RefreshCcw /> 150RPM
              </Badge>
            </div>
            <div className="text-xs">
              <Badge>
                <Flame /> 200 C
              </Badge>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-1">
          {output_images.map((o_img) => (
            <Dialog key={o_img.id}>
              <DialogTrigger asChild>
                <Image
                  className="mx-1 animate-pulse"
                  src={o_img.path}
                  width={img_dims}
                  height={img_dims}
                  alt={""}
                />
              </DialogTrigger>
              <DialogContent className="max-w-[250px]">
                <Slider before="/img/profile_pic.jpg" after={o_img.path} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </>
  );
}
