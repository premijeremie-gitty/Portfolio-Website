"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

// Two card sizes: portrait and landscape/square
const photos = [
  { src: "/images/image 1.JPG", alt: "Pool at sunset", portrait: true },
  { src: "/images/PHOTO-2026-03-22-21-34-17.jpg", alt: "Couple laughing", portrait: false },
  { src: "/images/IMG_4130.JPG", alt: "Couple selfie by wooden door", portrait: true },
  { src: "/images/IMG_4391.jpg", alt: "Mountain views", portrait: false },
  { src: "/images/IMG_4132.JPG", alt: "Italian street view", portrait: true },
  { src: "/images/PHOTO-2026-03-22-21-32-25.jpg", alt: "Dog sitting", portrait: true, position: "top" },
  { src: "/images/PHOTO-2026-03-22-21-35-53.jpg", alt: "Dining in Italy", portrait: true },
  { src: "/images/IMG_4149.JPG", alt: "Mediterranean villa courtyard", portrait: false },
  { src: "/images/IMG_2304.jpg", alt: "Charcuterie board", portrait: true },
  { src: "/images/PHOTO-2026-03-22-21-46-11.jpg", alt: "Seafood spread", portrait: true },
  { src: "/images/IMG_4467.JPG", alt: "Fun selfie with sunglasses", portrait: true },
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
              className={`relative h-[240px] md:h-[345px] rounded-[24px] md:rounded-[36px] overflow-hidden mr-4 md:mr-9 ${
                photo.portrait
                  ? "flex-[0_0_180px] md:flex-[0_0_259px]"
                  : "flex-[0_0_320px] md:flex-[0_0_460px]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.portrait ? "259px" : "460px"}
                className={`object-cover ${photo.position === "top" ? "object-top" : ""}`}
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
