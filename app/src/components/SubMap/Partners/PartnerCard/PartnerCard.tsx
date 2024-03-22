import React from "react";
import styles from "./PartnerCard.module.scss";
import Image from "next/image";
import Partner from '@/components/Partner/Partner';

type PartnerProps = {
    partner: {
    partnerUrl: string,
        profilUrl: string,
        description: string
    }
}


function PartnerCard({partner}: PartnerProps) {
    return (
        <div className={styles.partnerCard}>
            <div className={styles.logoContainer}>
                <Image
                    className={styles.partnerImage}
                    src={partner.partnerUrl}
                    alt="Logo_Gustave_Roussy"
                    fill
                />
            </div>
            <div className={styles.subLogoContainer}>
                <div className={styles.directorImageContainer}>
                    <Image
                        className={styles.directorImage}
                        src={partner.profilUrl}
                        alt="Logo_Gustave_Roussy"
                        fill
                    />
                </div>

                <p>{partner.description}</p>
            </div>
        </div>
    );
}

export default PartnerCard;
