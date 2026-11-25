
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const reducedMotion = useReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX: reducedMotion
          ? scrollYProgress
          : scaleX,
      }}
      aria-hidden="true"
    />
  );
}
