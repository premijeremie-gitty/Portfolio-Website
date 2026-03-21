"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const testimonials = [
  {
    name: "Haiyun Wang",
    title: "Senior Product Manager - BuildOps",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin massa tortor consequat non nulla posuere morbi ante. Turpis feugiat vivamus dui elementum augue mauris. Dictum phasellus urna ipsum arcu vitae vulputate nisi turpis a. Est eu tristique eu arcu. Pretium arcu eros laoreet quis venenatis suspendisse ipsum. Quis ipsum pellentesque facilisis ut vitae. Euismod lacus velit nunc odio velit.",
  },
  {
    name: "Michael Chou",
    title: "Chief Product Officer - BuildOps",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin massa tortor consequat non nulla posuere morbi ante. Turpis feugiat vivamus dui elementum augue mauris. Dictum phasellus urna ipsum arcu vitae vulputate nisi turpis a. Est eu tristique eu arcu. Pretium arcu eros laoreet quis venenatis suspendisse ipsum. Quis ipsum pellentesque facilisis ut vitae. Euismod lacus velit nunc odio velit.",
  },
  {
    name: "Dan Guerra",
    title: "Design Manager - BuildOps",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin massa tortor consequat non nulla posuere morbi ante. Turpis feugiat vivamus dui elementum augue mauris. Dictum phasellus urna ipsum arcu vitae vulputate nisi turpis a. Est eu tristique eu arcu. Pretium arcu eros laoreet quis venenatis suspendisse ipsum. Quis ipsum pellentesque facilisis ut vitae. Euismod lacus velit nunc odio velit.",
  },
  {
    name: "Sarah Chen",
    title: "VP of Product - BuildOps",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin massa tortor consequat non nulla posuere morbi ante. Turpis feugiat vivamus dui elementum augue mauris. Dictum phasellus urna ipsum arcu vitae vulputate nisi turpis a. Est eu tristique eu arcu. Pretium arcu eros laoreet quis venenatis suspendisse ipsum. Quis ipsum pellentesque facilisis ut vitae. Euismod lacus velit nunc odio velit.",
  },
];

export default function FeedbackCarousel() {
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
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-[0_0_85vw] md:flex-[0_0_544px] flex flex-col justify-center gap-2 pt-7 px-5 md:px-7 pb-9 bg-card-bg rounded-2xl min-h-[300px] md:min-h-[355px] mr-4 md:mr-9 border-t border-gray-200"
            >
              <span className="text-[4.5rem] font-serif leading-none text-[#ee5a32]">&ldquo;</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium leading-[1.37] text-dark">
                  {t.name}
                </h3>
                <p className="text-base font-medium leading-[1.37] text-muted">
                  {t.title}
                </p>
              </div>
              <p className="text-base leading-[1.75] text-muted">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <div className="flex gap-3">
        <button
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-dark cursor-pointer transition-colors duration-200 hover:bg-light-bg"
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
          aria-label="Next testimonial"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-dark cursor-pointer transition-colors duration-200 hover:bg-light-bg"
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
