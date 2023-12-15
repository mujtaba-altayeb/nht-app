"use client";

import React, { useRef } from "react";
import Webcam from "react-webcam";
import { EmblaCarousel } from "@/components/ui/HintsCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Instagram } from "lucide-react";
import { useRouter } from "next/navigation"; // Change this line

export default function Home() {
  const webcamRef = useRef<Webcam>(null);

  const router = useRouter();

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot({
        width: 1240,
        height: 960,
      });
      router.push("/generate");

      // fetch("http://localhost:8080/save_image", {
      //  method: "POST",
      //  body: JSON.stringify({ data: imageSrc }),
      //  headers: { "Content-Type": "application/json" },
      //}).then(() => {
      //  router.push("/generate");
      // });
    }
  }, [webcamRef, router]);

  return (
    <Container>
      <div className="grid grid-cols-2 justify-center items-center p-2">
        <div className="grid grid-cols-1 grid-rows-1 text-center mx-auto m-0">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-xl"
            width="1280"
            height="720"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 items-center">
          <EmblaCarousel />
          <Button size="lg" onClick={capture}>
            <Instagram /> Capture
          </Button>
        </div>
      </div>
    </Container>
  );
}
