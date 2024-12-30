"use client";

import Snowfall from "react-snowfall";
import snow1 from "@/public/images/global/leaves/1s.png";
import { useEffect, useState } from "react";

function AnimatedSection() {
  const [image, setImage] = useState<HTMLImageElement>();

  useEffect(() => {
    const img = new Image();
    img.src = snow1.src; // Use the `src` property of the `StaticImageData` to set the source URL
    img.onload = () => setImage(img); // Set the image once it's loaded
  }, []);

  return (
    <div className="relative">
      {image && (
        <Snowfall
          // Applied to the canvas element
          style={{ background: "var(--main-light)" }}
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={8}
          speed={[0.01, 0.1]}
          images={[image]}
          rotationSpeed={[0, 0]}
          wind={[0, 0.5]}
          radius={[10, 30]}
        />
      )}
      <section className="py-12 sm:py-16 overflow-hidden relative">
        <div className="container">
          <h1 className="font-semibold text-2xl xl:text-4xl text-center">
            Витамины и Минералы из Америки и Турции
          </h1>
        </div>
      </section>
    </div>
  );
}

export default AnimatedSection;
