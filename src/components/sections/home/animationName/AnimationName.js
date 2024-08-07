import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AnimationName() {
  const text = "MOHAMMAD HAYAT";

  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 2980); // Step 1: Characters appear

    const timer2 = setTimeout(() => {
      setStep(2);
    }, 3548); // Step 2: Characters disappear and rotate

    const timer3 = setTimeout(() => {
      setStep(3);
    }, 4900); // Step 3: Characters reappear and remain still

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div>
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="600" height="80">
        {text.split("").map((char, index) => (
          <motion.text
            key={index}
            x={index * 24}
            y="85"
            fontSize="40"
            fontFamily="Lucida Console"
            fill="transparent"
            stroke="#2F4F4F"
            strokeWidth="3"
            initial={{ opacity: 0, y: -1500, rotate: 720 }}
            animate={
              step === 1
                ? { opacity: 1, y: 150, rotate: 180 }
                : step === 2
                ? { opacity: 0, y: 900, rotate: 180 }
                : { opacity: 1, y: -10, rotate: 360 }
            }
            transition={{ delay: index * 0.2 }}
          >
            {char}
          </motion.text>
        ))}
      </motion.svg>
    </div>
  );
}

export default AnimationName;
