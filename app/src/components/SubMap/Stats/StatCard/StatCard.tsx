"use client";
import React, { useRef, useEffect } from "react";
import styles from "./StatCard.module.scss";
import { Counter } from "../Counter/Counter";

interface StatCardProps {
    stats: {
        title: string;
        value: number;
        unit: string;
        prefix: string;
    };
    delay: number;
}

function StatCard({ stats, delay }: StatCardProps) {
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (counterRef.current) {
            // Écoutez l'événement de fin d'animation du composant Counter
            counterRef.current.addEventListener("animationend", handleAnimationEnd);
        }

        return () => {
            if (counterRef.current) {
                counterRef.current.removeEventListener("animationend", handleAnimationEnd);
            }
        };
    }, []);

    const handleAnimationEnd = () => {
        // Cette fonction sera appelée lorsque l'animation du Counter sera terminée
        // Vous pouvez exécuter ici votre action avant de rendre stats.number
        <p>+ {stats.value}</p>
        console.log("L'animation du compteur est terminée. Vous pouvez exécuter du code supplémentaire ici.");
    };

    return (
        <div className={styles.statContainer}>
            <h3 className={styles.statTitle}>{stats.title}</h3>
            <div className={styles.subTitleContainer}>
                {/* Utilisez la référence pour accéder au composant Counter */}
                <Counter from={0} to={stats.value} delay={delay} prefix={stats.prefix} />
                &#160;
                <p className={styles.subTitle}>{stats.unit}</p>
            </div>
        </div>
    );
}

export default StatCard;
