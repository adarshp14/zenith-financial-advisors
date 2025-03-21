"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

export default function CustomImage(props: ImageProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the image client-side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return <Image {...props} />;
}
