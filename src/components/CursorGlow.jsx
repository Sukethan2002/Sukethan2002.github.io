
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const media = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)"
    );

    let frame = 0;

    const handlePointerMove = (event) => {
      if (!media.matches) return;

      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        glow.style.setProperty(
          "--mouse-x",
          `${event.clientX}px`
        );

        glow.style.setProperty(
          "--mouse-y",
          `${event.clientY}px`
        );

        glow.style.opacity = "1";
      });
    };

    const handlePointerLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
}
