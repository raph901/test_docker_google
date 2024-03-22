"use client";

import { animate, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export function Counter({ from = 0, to = 0, duration = 1, delay = 0, prefix = "" }) {
    const nodeRef = useRef<HTMLParagraphElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration,
            delay: delay * 0.5,
            onUpdate(value) {
                node.textContent = Math.round(value).toString();
            },
            onComplete() {
                node.textContent = `${prefix ?? ""} ${node.textContent}`;
            }
        });

        return () => controls.stop();
    }, [from, to, isInView]);

    return (
        <motion.p
            ref={nodeRef}
            // initial={{ opacity: 0, scale: 0.1 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
        />
    );
}
