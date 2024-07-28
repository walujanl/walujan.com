import { motion } from "framer-motion";

export const FadeTransition = ({ children }: { children: React.ReactNode }) => {
  const enter = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  const exit = {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0.001, y: 30 }}
      animate={enter}
      exit={exit}
    >
      {children}
    </motion.main>
  );
};
