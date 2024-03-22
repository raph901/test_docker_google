"use client";

import React, { useRef } from "react";

import styles from "./Partner.module.scss";
import PartnerCard from "./PartnerCard/PartnerCard";

import { motion, useScroll, useTransform } from "framer-motion";

function Partner() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 0.5], ["-300%", "0%"]);

    const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

    const y = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);
    const reversey = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
    const firstColpartners = [
        {
            url: "/images/partner/partner-Gustave-Roussy.svg",
            title: "logo-Gustave-Roussy.png",
        },
        {
            url: "/images/partner/partner-Sheba.svg",
            title: "logo-Sheba.png",
        },
        {
            url: "/images/partner/partner-IEO.svg",
            title: "IEO.png",
        },
    ];
    const secondColpartners = [
        {
            url: "/images/partner/partner-Leon-Berard.svg",
            title: "logo-Leon-Berard.png",
        },
        {
            url: "/images/partner/partner-Charite.svg",
            title: "logo_Charite.png",
        },
        {
            url: "/images/partner/partner-VHIO.svg",
            title: "logo-VHIO.png",
        },
    ];
    return (
        <section ref={targetRef} className={styles.partner}>
            <div className={styles.container}>
                <motion.div style={{ x }} className={styles.textContainer}>
                    <h2 className={styles.text}>
                        We are a TechBio company co-founded with leading international oncology centers and researchers from over 35 countries.
                    </h2>
                </motion.div>
                <div className={styles.partnerContainer}>
                    <div className={styles.container}>
                        <motion.div
                            style={{ y, opacity }}
                            className={styles.firstWrapper}
                        >
                            {firstColpartners.map((partner, index) => {
                                return (
                                    <PartnerCard
                                        key={index}
                                        partner={partner}
                                    />
                                );
                            })}
                        </motion.div>
                        <motion.div
                            style={{ y: reversey, opacity }}
                            className={styles.secondWrapper}
                        >
                            {secondColpartners.map((partner, index) => {
                                return (
                                    <PartnerCard
                                        key={index}
                                        partner={partner}
                                    />
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;
