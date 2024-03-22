import React from "react";

import styles from "./PartnerCard.module.scss";
import Image from "next/image";

type PartnerProps = {
    partner: {
        url: string;
        title: string;
    };
};

function PartnerCard({ partner }: PartnerProps) {
    return (
        <div className={styles.partnerCard}>
            <Image
                className={styles.partnerImage}
                src={partner.url}
                alt={partner.title}
                fill
            />
        </div>
    );
}

export default PartnerCard;
