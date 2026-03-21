"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const photos = [
  { src: "/images/about-photo-1.png", alt: "Personal photo" },
  { src: "/images/about-photo-2.png", alt: "Personal photo" },
  { src: "/images/about-photo-3.png", alt: "Personal photo" },
  { src: "/images/about-photo-4.png", alt: "Personal photo" },
];

export default function PhotoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      duration: 20,
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="flex-[0_0_85vw] md:flex-[0_0_544px] relative h-[240px] md:h-[345px] rounded-[24px] md:rounded-[36px] overflow-hidden mr-4 md:mr-9"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="544px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <div className="flex gap-3">
        <button
          onClick={scrollPrev}
          aria-label="Previous photo"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-dark cursor-pointer transition-colors duration-200 hover:bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next photo"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-dark cursor-pointer transition-colors duration-200 hover:bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
