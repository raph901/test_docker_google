"use client";
import React, { useEffect, useRef } from "react";

import { motion, useAnimation, useInView, Variant } from "framer-motion";

import styles from "./AnimatedText.module.scss";

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    animation?: {
        hidden: Variant;
        visible: Variant;
    };
    repeatDelay?: number;
    delayChildren?: number;
};

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
};

function AnimatedText({
    text,
    el: Wrapper = "p",
    className,
    once = true,
    animation = defaultAnimations,
    repeatDelay,
    delayChildren = 0,
}: AnimatedTextProps) {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
            controls.start("visible");
        };
        if (isInView) {
            show();
        } else {
            controls.start("hidden");
        }
        return () => clearTimeout(timeout);
    }, [isInView, controls, repeatDelay]);

    return (
        <Wrapper className={className}>
            <span className={styles.firstSpan}>{text}</span>
            <motion.span
                ref={ref}
                aria-hidden
                initial="hidden"
                animate={controls}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.055,
                            delayChildren,
                        },
                    },
                    hidden: {},
                }}
                // transition={{ staggerChildren: 0.05 }}
            >
                {textArray.map((line, index) => (
                    <span key={index} style={{ display: "block" }}>
                        {line.split(" ").map((word, index) => (
                            <span
                                key={index}
                                style={{ display: "inline-block" }}
                            >
                                {word.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        style={{ display: "inline-block" }}
                                        variants={animation}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span style={{ display: "inline-block" }}>
                                    &nbsp;
                                </span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
}

export default AnimatedText;
