import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReusableAnimationProps } from "./Animation";


const RevealMap: React.FC<ReusableAnimationProps> = ({
  children,
  i,
  className,
}) => {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });
  const reveal = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (inView) {
      reveal.start("visible");
      slideControls.start("visible");
    }
  }, [inView, slideControls, reveal]);

  return (
    <div
      ref={ref}
      className={`w-full h-full overflow-hidden ${className && className} `}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.7,
            y: 75,
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={reveal}
        transition={{
          duration: 2.5,
          delay: i ? i : 0,
          ease: "linear",
        }}
        className=""
      >
        {children}
      </motion.div>
      {/* <motion.div
        className={`absolute top-4 bottom-4 left-0 right-0  z-40 h-full bg-blue10`}
        variants={{
          hidden: { top: 0 },
          visible: { top: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeIn" }}
      ></motion.div> */}
    </div>
  );
};

export default RevealMap;