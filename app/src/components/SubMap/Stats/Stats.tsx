'use client';

import React from "react";
import styles from "./Stats.module.scss";
import StatCard from "./StatCard/StatCard";
import GetStatistics from '@/services/statistics/GetStatistics';

function Stats() {
    const statistics = GetStatistics();

    return (
        <div className={styles.stats}>
            <div className={styles.container}>
                {statistics.map((stats, index) => {
                    return <StatCard key={index} stats={stats} delay={index} />;
                })}
            </div>
        </div>
    );
}

export default Stats;
