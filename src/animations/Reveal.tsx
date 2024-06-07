/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  change?: boolean;
  className?: any;
  delay?: number;
}

const Reveal = ({
  children,
//   width = "fit-content",
//   change,
  className,
  delay,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    }
  }, [isInView, slideControls, mainControls]);

  return (
    <div ref={ref} className={` w-full  h-full  ${className && className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, ease: "easeInOut", delay: delay }}
        className=""
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;