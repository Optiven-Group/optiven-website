import { motion, AnimationProps, Variants } from "framer-motion";

import { opacity, expand, OpacityVariants, ExpandVariants } from "./animation";

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Layout({ children, backgroundColor }: LayoutProps) {
  const animate = (
    variants: OpacityVariants | ExpandVariants,
    custom: any | null = null
  ): AnimationProps & { custom?: any } => {
    const animationVariants: Variants = variants as unknown as Variants;

    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants: animationVariants,
    };
  };

  const nbOfColumns: number = 5;

  return (
    <div className="page stairs" style={{ backgroundColor }}>
      <motion.div {...animate(opacity)} className="transition-background" />
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div key={i} {...animate(expand, nbOfColumns - i)} />
        ))}
      </div>
      {children}
    </div>
  );
}
