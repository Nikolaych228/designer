"use client";

import {
  useEffect,
  useState,
} from "react";

import LineSidebar from "@/components/ui/LineSidebar";

export interface CaseNavigationItem {
  id: string;
  label: string;
}

interface CaseLineSidebarProps {
  items: CaseNavigationItem[];
  startId: string;
}

export function CaseLineSidebar({
  items,
  startId,
}: CaseLineSidebarProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    if (!items.length) {
      return;
    }

    const handleScroll = () => {
      /* ================================================
         SIDEBAR APPEAR / DISAPPEAR
      ================================================ */

      const startElement =
        document.getElementById(startId);

      if (startElement) {
        const startRect =
          startElement.getBoundingClientRect();

        const showPoint =
          window.innerHeight * 0.2;

        const shouldBeVisible =
          startRect.top <= showPoint;

        setIsVisible((current) =>
          current === shouldBeVisible
            ? current
            : shouldBeVisible,
        );
      }

      /* ================================================
         ACTIVE SECTION
      ================================================ */

      const triggerPoint =
        window.innerHeight * 0.35;

      let currentIndex = 0;

      for (
        let index = 0;
        index < items.length;
        index++
      ) {
        const item = items[index];

        const section =
          document.getElementById(
            item.id,
          );

        if (!section) {
          continue;
        }

        const rect =
          section.getBoundingClientRect();

        if (rect.top <= triggerPoint) {
          currentIndex = index;
        } else {
          break;
        }
      }

      /* LAST SECTION */

      const pageBottom =
        window.scrollY +
        window.innerHeight;

      const documentHeight =
        document.documentElement
          .scrollHeight;

      if (
        pageBottom >=
        documentHeight - 4
      ) {
        currentIndex =
          items.length - 1;
      }

      setActiveIndex((current) =>
        current === currentIndex
          ? current
          : currentIndex,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );
    };
  }, [items, startId]);

  /* ================================================
     CLICK NAVIGATION
  ================================================ */

  const handleItemClick = (
    index: number,
  ) => {
    const item = items[index];

    if (!item) {
      return;
    }

    const section =
      document.getElementById(
        item.id,
      );

    if (!section) {
      return;
    }

    setActiveIndex(index);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `#${item.id}`,
    );
  };

  return (
    <aside
        aria-hidden={!isVisible}
        className={`
            fixed
            [@media(min-height:850px)]:lg:left-[160px]
            left-[80px]
            top-1/2
            z-50

            -translate-y-1/2
            origin-left

            transition-[opacity,transform,filter]
            

            ${
            isVisible
                ? `
                    pointer-events-auto
                    duration-400
                    blur-0
                    opacity-100

                    ease-[cubic-bezier(0.22,1,0.36,1)]
                `
                : `
                    pointer-events-none
                    duration-200
                    blur-[4px]
                    opacity-0

                    ease-[cubic-bezier(0.64,0,0.78,0)]
                `
            }
        `}
    >
      <LineSidebar
        items={items.map(
          (item) => item.label,
        )}
        activeIndex={activeIndex}
        onItemClick={handleItemClick}
        accentColor="#4E61F6"
        textColor="#00000041"
        markerColor="#00000041"
        showIndex={false}
        showMarker
        proximityRadius={40}
        maxShift={16}
        falloff="sharp"
        markerLength={20}
        markerGap={0}
        tickScale={0.5}
        scaleTick
        itemGap={16}
        fontSize={1}
        smoothing={100}
        defaultActive={0}
      />
    </aside>
  );
}