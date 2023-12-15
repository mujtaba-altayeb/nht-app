"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", dragThreshold: 2 },
    [Autoplay()]
  );

  const img_w = "180";
  const img_h = "150";

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            className="m-auto items-center"
            src="/img/CaptureHints/Intructs/Slide1.PNG"
            width={img_w}
            height={img_h}
            alt="1"
          />
        </div>
        <div className="embla__slide">
          <Image
            className="m-auto items-center"
            src="/img/CaptureHints/Intructs/Slide2.PNG"
            width={img_w}
            height={img_h}
            alt="2"
          />
        </div>
        <div className="embla__slide">
          <Image
            className="m-auto items-center"
            src="/img/CaptureHints/Intructs/Slide3.PNG"
            width={img_w}
            height={img_h}
            alt="3"
          />
        </div>
        <div className="embla__slide">
          <Image
            className="m-auto items-center"
            src="/img/CaptureHints/Intructs/Slide4.PNG"
            width={img_w}
            height={img_h}
            alt="4"
          />
        </div>
        <div className="embla__slide">
          <Image
            className="m-auto items-center"
            src="/img/CaptureHints/Intructs/Slide5.PNG"
            width={img_w}
            height={img_h}
            alt="5"
          />
        </div>
      </div>
    </div>
  );
};
