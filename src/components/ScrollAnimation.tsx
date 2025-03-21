"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-in"
  | "slide-in-bottom"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in"
  | "bounce-in";

interface ScrollAnimationProps {
  children: ReactNode;
  animation: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation = ({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is in view
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible
          ? `${animation} opacity-100`
          : "opacity-0"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
