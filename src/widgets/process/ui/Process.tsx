"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/shared/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROCESS_ITEMS = [
  {
    number: "01",
    title: "Разобраться в задаче",
    description:
      "Собираю вводные, ограничения и недостающие данные. Формулирую, какую проблему нужно решить",
    image: "/images/process/Case1.png",
    side: "left",
  },
  {
    number: "02",
    title: "Достроить логику",
    description:
      "Определяю роли, сущности, сценарии, состояния и зависимости",
    image: "/images/process/Case2.png",
    side: "right",
  },
  {
    number: "03",
    title: "Проверить решение интерфейсом",
    description:
      "Сравниваю варианты на wireframes и прототипах. После этого фиксирую UI",
    image: "/images/process/Case3.png",
    side: "left",
  },
  {
    number: "04",
    title: "Подготовить к разработке",
    description:
      "Собираю компоненты и состояния, описываю поведение и сопровождаю handoff",
    image: "/images/process/Case4.png",
    side: "right",
  },
] as const;

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    const lineProgress = lineProgressRef.current;

    if (!section || !timeline || !lineProgress) {
      return;
    }

    const ctx = gsap.context(() => {
      const rows = Array.from(
        timeline.querySelectorAll<HTMLElement>(
          "[data-process-row]",
        ),
      );

      const cards = Array.from(
        timeline.querySelectorAll<HTMLElement>(
          "[data-process-card]",
        ),
      );

      const markers = Array.from(
        timeline.querySelectorAll<HTMLElement>(
          "[data-process-marker]",
        ),
      );

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      cards.forEach((card) => {
        const side = card.dataset.side;

        gsap.set(card, {
          autoAlpha: 0,
          x: side === "left" ? -110 : 110,
          y: 50,
          scale: 0.96,
        });
      });

      markers.forEach((marker, index) => {
        gsap.set(marker, {
          backgroundColor:
            index === 0 ? "#29267A" : "#D2D3D9",
          color:
            index === 0 ? "#FFFFFF" : "#FFFFFF",
          scale: index === 0 ? 1 : 0.92,
        });
      });

      gsap.set(lineProgress, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      /* =====================================================
         LINE PROGRESS
      ===================================================== */

      gsap.to(lineProgress, {
        scaleY: 1,
        ease: "none",

        scrollTrigger: {
          trigger: timeline,
          start: "top 62%",
          end: "bottom 82%",
          scrub: true,
        },
      });

      /* =====================================================
         CARDS
      ===================================================== */

      cards.forEach((card) => {
        const side = card.dataset.side;

        gsap.to(card, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 68%",
            end: "top 30%",
            scrub: 1,
          },
        });

        /*
         * Очень лёгкое параллакс-движение.
         * Карточка продолжает естественно двигаться
         * вверх вместе со страницей, как в референсе.
         */
        gsap.fromTo(
          card,
          {
            rotationY:
              side === "left" ? -2 : 2,
          },
          {
            rotationY: 0,
            ease: "none",

            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "center center",
              scrub: 1,
            },
          },
        );
      });

      /* =====================================================
         ACTIVE MARKERS
      ===================================================== */

      const activateMarker = (
        activeIndex: number,
      ) => {
        markers.forEach(
          (marker, markerIndex) => {
            const isActive =
              markerIndex === activeIndex;

            gsap.to(marker, {
              backgroundColor: isActive
                ? "#29267A"
                : "#D2D3D9",

              scale: isActive ? 1 : 0.92,

              duration: 0.3,
              ease: "power2.out",
              overwrite: true,
            });
          },
        );
      };

      rows.forEach((row, index) => {
        ScrollTrigger.create({
          trigger: row,

          /*
           * Маркер становится активным,
           * когда его строка проходит
           * центральную область viewport.
           */
          start: "top 45%",
          end: "bottom 55%",

          onEnter: () => {
            activateMarker(index);
          },

          onEnterBack: () => {
            activateMarker(index);
          },
        });
      });
    }, section);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        bg-white
        pb-[120px]
        pt-[100px]
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mx-auto max-w-[720px]">
        <p
          className="
            text-center
            text-[40px]
            font-semibold
            leading-[48px]
            text-[#101426]
          "
        >
          Веду UX/UI от постановки задачи до handoff
        </p>

        <p
          className="
            mt-4
            text-center
            text-[18px]
            leading-[28px]
            text-gray-400
          "
        >
          На коммерческих проектах всегда была единственным дизайнером продукта и отвечала за весь UX/UI-контур
        </p>
      </div>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div
        ref={timelineRef}
        className="
          relative
          mx-auto
          mt-[72px]
          w-[1290px]
        "
      >
        {/* =================================================
            BASE LINE

            4 ряда × 420px.
            Линия начинается в центре первого
            маркера и заканчивается в центре четвёртого.
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[18px]
            z-0
            h-[1760px]
            w-px
            -translate-x-1/2
            bg-[#D8D9DF]
          "
        />

        {/* ACTIVE LINE */}

        <div
          ref={lineProgressRef}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[18px]
            z-[1]
            h-[1670px]
            w-[2px]
            -translate-x-1/2
            bg-[#29267A]
          "
        />

        {/* =================================================
            ITEMS
        ================================================= */}

        {PROCESS_ITEMS.map(
          (
            item,
            index,
          ) => {
            const isLeft =
              item.side === "left";

            return (
              <div
                key={item.number}
                data-process-row
                className="
                  relative
                  z-10
                  grid
                  h-[560px]
                  grid-cols-[544px_202px_544px]
                  items-start
                "
              >
                {/* LEFT COLUMN */}

                <div>
                  {isLeft && (
                    <ProcessCard
                      item={item}
                    />
                  )}
                </div>

                {/* MARKER */}

                <div
                  className="
                    flex
                    justify-center
                    pt-0
                  "
                >
                  <div
                    data-process-marker
                    className="
                      relative
                      z-20
                      flex
                      h-[56px]
                      w-[56px]
                      items-center
                      justify-center
                      rounded-full
                      text-[28px]
                      font-medium
                      leading-none
                      text-white
                    "
                  >
                    {item.number}
                  </div>
                </div>

                {/* RIGHT COLUMN */}

                <div>
                  {!isLeft && (
                    <ProcessCard
                      item={item}
                    />
                  )}
                </div>

                {/* Последняя строка —
                    визуальный конец линии */}

                {index ===
                  PROCESS_ITEMS.length -
                    1 && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-[36px]
                      z-[2]
                      h-[384px]
                      w-[4px]
                      -translate-x-1/2
                      bg-white
                    "
                  />
                )}
              </div>
            );
          },
        )}
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div
        className="
          mt-[22px]
          flex
          justify-center
        "
      >
        <Button target="_blank" href="https://web.telegram.org/k/#@lzuxui" arrow="right">
            Написать в Telegram
        </Button>
      </div>
    </section>
  );
}

/* =========================================================
   CARD
========================================================= */

interface ProcessCardProps {
  item: (typeof PROCESS_ITEMS)[number];
}

function ProcessCard({
  item,
}: ProcessCardProps) {
  return (
    <article
      data-process-card
      data-side={item.side}
      className="
        relative
        h-[504px]
        w-[544px]
        overflow-hidden
        rounded-[24px]
        border
        border-[#EEEFF5]
        bg-white
        p-[24px]
        shadow-[0_8px_30px_rgba(25,24,60,0.035)]
        [transform-style:preserve-3d]
      "
    >
      {/* TEXT */}

      <div className="relative z-10">
        <h3
          className="
            text-[24px]
            font-semibold
            leading-[28px]
            text-[#151827]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3
            max-w-[494px]
            text-[16px]
            leading-[20px]
            text-[#A4A6B2]
          "
        >
          {item.description}
        </p>
      </div>

      {/* ILLUSTRATION */}

      <div
        className="
          absolute
          top-[140px]
          left-[20px]
          right-[20px]
        "
      >
        <Image
          src={item.image}
          alt=""
          width={518}
          height={354}
          unoptimized
          draggable={false}
        />
      </div>
    </article>
  );
}