// components/PageWrapper.tsx
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const variants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
};

type PageWrapperProps = {
    children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
