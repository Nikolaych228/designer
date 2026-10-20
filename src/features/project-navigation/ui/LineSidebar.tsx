"use client";

import {
  useEffect,
  useState,
} from "react";

import LineSidebar from "@/components/ui/LineSidebar";

interface CaseNavigationItem {
  id: string;
  label: string;
}

interface CaseLineSidebarProps {
  items: CaseNavigationItem[];
}

export function CaseLineSidebar({
  items,
}: CaseLineSidebarProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    const sections = items
      .map((item) =>
        document.getElementById(item.id),
      )
      .filter(
        (
          section,
        ): section is HTMLElement =>
          Boolean(section),
      );

    if (!sections.length) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(
              (entry) =>
                entry.isIntersecting,
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio,
            );

          if (!visible.length) {
            return;
          }

          const currentId =
            visible[0].target.id;

          const index =
            items.findIndex(
              (item) =>
                item.id === currentId,
            );

          if (index !== -1) {
            setActiveIndex(index);
          }
        },
        {
          rootMargin:
            "-30% 0px -55% 0px",
          threshold: [
            0,
            0.1,
            0.25,
            0.5,
          ],
        },
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleItemClick = (
    index: number,
  ) => {
    const item = items[index];

    if (!item) {
      return;
    }

    const section =
      document.getElementById(item.id);

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
      className="
        fixed
        left-0
        top-1/2
        z-50
        -translate-y-1/2
      "
    >
      <LineSidebar
        items={items.map(
          (item) => item.label,
        )}
        defaultActive={activeIndex}
        onItemClick={handleItemClick}
        accentColor="#4E61F6"
        textColor="#8D92A3"
        markerColor="#D9DCE8"
        showIndex
        showMarker
        proximityRadius={110}
        maxShift={24}
        falloff="smooth"
        markerLength={48}
        markerGap={0}
        tickScale={0.55}
        scaleTick
        itemGap={18}
        fontSize={0.875}
        smoothing={120}
      />
    </aside>
  );
}