import Image from "next/image";
import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ArrowPosition = "left" | "right" | "both";

// Общие пропсы для обоих вариантов
type BaseProps = {
  children: ReactNode;
  arrowPrime?: ArrowPosition | false;
  arrowBlack?: ArrowPosition | false;
  className?: string;
  disabled?: boolean;
};

// Тип, когда это кнопка
type ButtonWhiteAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

// Тип, когда это ссылка
type ButtonWhiteAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

// Объединенный тип
type ButtonProps = ButtonWhiteAsButton | ButtonWhiteAsLink;

export function ButtonWhite({
  children,
  arrowPrime = false,
  arrowBlack = false,
  className,
  disabled,
  type = "button",
  href,
  ...props
}: ButtonProps) {
  
  // ВАШИ ОРИГИНАЛЬНЫЕ СТИЛИ (остались без изменений)
  const styles = cn(
    `
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-full
      bg-[#fff]
      px-8
      py-4
      text-[18px]
      border-[1.5px]
      border-[#4E61F6]
      leading-[24px]
      text-[#4E61F6]
      transition-[background-color,box-shadow,transform]
      duration-200
      ease-out

      hover:bg-[#EDEFFE]

      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-[#AEB6FB]
      focus-visible:ring-offset-2

      active:scale-[0.98]
      active:bg-[#C8CEFC]

      disabled:pointer-events-none
      disabled:bg-[#fff]
      disabled:text-[#A8ABB3]
      disabled:shadow-none
    `,
    className,
  );

  // Контент (иконки и текст) вынесен отдельно, чтобы не дублировать код
  const content = (
    <>
      {(arrowPrime === "left" || arrowPrime === "both") && (
        <Image
          src="/icons/arrowPrime.svg" 
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
        />
      )}
      
      {(arrowBlack === "left" || arrowBlack === "both") && (
        <Image
          src="/icons/arrowBlack.svg" 
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
        />
      )}

      <span>{children}</span>

      {(arrowPrime === "right" || arrowPrime === "both") && (
        <Image
          src="/icons/arrowPrime.svg" 
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
        />
      )}
      {(arrowBlack === "right" || arrowBlack === "both") && (
        <Image
          src="/icons/arrowBlack.svg"
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
        />
      )}
    </>
  );

  // Если передан href, рендерим ссылку
  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  // Иначе рендерим обычную кнопку
  return (
    <button
      type={type as "button" | "submit" | "reset"}
      disabled={disabled}
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}