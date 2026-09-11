import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps extends HTMLMotionProps<'div'> {
  glow?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BentoCard = ({ className, glow = true, children, ...props }: BentoCardProps) => (
  <motion.div
    variants={itemVariants}
    className={cn('bento-card', glow && 'bento-card-glow', className)}
    {...props}
  >
    {children}
  </motion.div>
);

export default BentoCard;
