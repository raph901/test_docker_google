import React from 'react'

import styles from './Proprietary.module.scss'
import Image from 'next/image'

function Proprietary() {
  return (
    <section className={styles.proprietary}>
      <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.pictos_wrapper}>
                <div className={styles.picto_container}>
                    <Image src='/images/proprietary/Picto1.svg' alt='Picto1' width={100} height={100}/>
                </div>
                <div className={styles.picto_container}>
                    <Image src='/images/proprietary/Picto1.svg' alt='Picto1' width={100} height={100}/>
                </div>
                <div className={styles.picto_container}>
                    <Image src='/images/proprietary/Picto1.svg' alt='Picto1' width={100} height={100}/>
                </div>
            </div>
            <h2 className={styles.text}>
                Our proprietary Discovery Platform will be the hub for organizing, analyzing and discovering novel therapeutic targets.​
            </h2>
        </div>
        <div className={styles.right}>
            <div>
                <Image src='/images/proprietary/proprietary_carousel1.svg' alt='Picto1' width={351} height={418}/>
            </div>
            <div>
                <Image src='/images/proprietary/proprietary_carousel2.svg' alt='Picto1' width={351} height={480}/>
            </div>
            <div>
                <Image src='/images/proprietary/proprietary_carousel3.svg' alt='Picto1' width={351} height={418}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Proprietary
