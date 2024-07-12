import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HomeDivProps {
  styling: string;
  children: ReactNode;
}

export default function HomeDiv({ styling, children }: HomeDivProps) {
  return (
    <motion.div
      className={styling}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
