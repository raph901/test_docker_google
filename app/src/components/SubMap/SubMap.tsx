import React from "react";
import Partners from "./Partners/Partners";
import styles from "./SubMap.module.scss";
import Stats from "./Stats/Stats";
function SubMap() {
    return (
        <div className={styles.subMap}>
            <div className={styles.subMapContainer}>
                <Partners />
                <Stats />
            </div>
        </div>
    );
}

export default SubMap;
