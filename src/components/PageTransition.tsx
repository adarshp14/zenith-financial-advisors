"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentChild, setCurrentChild] = useState(children);

  useEffect(() => {
    // If the pathname changes, animate out
    setIsAnimating(true);

    // After the animation finishes, update the content
    const timer = setTimeout(() => {
      setCurrentChild(children);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
    >
      {currentChild}
    </div>
  );
};

export default PageTransition;
