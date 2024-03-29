"use client";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }} />
  );
}