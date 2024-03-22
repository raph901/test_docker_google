'use client';
import React, { useState } from 'react';
import styles from './Map.module.scss';

import ContinentText from './ContinentText/ContinentText';
import {
	americaContinent,
	europeContinent,
	africaContinent,
	asiaContinent
} from '@/utils/interactiveMap';
import ContinentImageSVG from './ContinentImageSVG/ContinentImageSVG';
import PointsImageSVG from './PointsImageSVG/PointsImageSVG';
function Map() {
	const [isAmericaHover, setIsAmericaHover] = useState(false);
	const [isEuropeHover, setIsEuropeHover] = useState(false);
	const [isAfricaHover, setIsAfricaHover] = useState(false);
	const [isAsiaHover, setIsAsiaHover] = useState(false);
	const [isAmericaContinentHidden, setisAmericaContinentHidden] =
		useState(false);
	const [isEuropeContinentHidden, setisEuropeContinentHidden] =
		useState(false);
	const [isAfricaContinentHidden, setisAfricaContinentHidden] =
		useState(false);
	const [isAsiaContinentHidden, setisAsiaContinentHidden] = useState(false);
	const [isRussiaContinentHidden, setisRussiaContinentHidden] =
		useState(false);

	function toggleIsAmericaHover(bool: boolean) {
		setIsAmericaHover(bool);
		setisEuropeContinentHidden(bool);
		setisAfricaContinentHidden(bool);
		setisAsiaContinentHidden(bool);
		setisRussiaContinentHidden(bool);
		setIsEuropeHover(false);
		setIsAfricaHover(false);
		setIsAsiaHover(false);
	}
	function toggleIsEuropeHover(bool: boolean) {
		setIsEuropeHover(bool);
		setisAmericaContinentHidden(bool);
		setisAfricaContinentHidden(bool);
		setisAsiaContinentHidden(bool);
		setisRussiaContinentHidden(bool);
		setIsAmericaHover(false);
		setIsAfricaHover(false);
		setIsAsiaHover(false);
	}
	function toggleIsAfricaHover(bool: boolean) {
		setIsAfricaHover(bool);
		setisAmericaContinentHidden(bool);
		setisEuropeContinentHidden(bool);
		setisAsiaContinentHidden(bool);
		setisRussiaContinentHidden(bool);
		setIsAmericaHover(false);
		setIsEuropeHover(false);
		setIsAsiaHover(false);
	}
	function toggleIsAsiaHover(bool: boolean) {
		setIsAsiaHover(bool);
		setisAmericaContinentHidden(bool);
		setisEuropeContinentHidden(bool);
		setisAfricaContinentHidden(bool);
		setisRussiaContinentHidden(bool);
		setIsAmericaHover(false);
		setIsEuropeHover(false);
		setIsAfricaHover(false);
	}

	return (
		<div className={styles.interactiveMapContainer}>
			<div className={styles.map}>
				<div className={styles.PointsImageSVGContainer}>
					<PointsImageSVG
						isAmericaHover={isAmericaHover}
						isEuropeHover={isEuropeHover}
						isAfricaHover={isAfricaHover}
						isAsiaHover={isAsiaHover}
						isAmericaContinentHidden={isAmericaContinentHidden}
						isEuropeContinentHidden={isEuropeContinentHidden}
						isAfricaContinentHidden={isAfricaContinentHidden}
						isAsiaContinentHidden={isAsiaContinentHidden}
					/>
				</div>
				{/* <Image src="/images/map" alt=""/> */}
				<ContinentImageSVG
					src="/images/interactiveMap/Afrique.svg"
					alt="Africa_continent"
					isHidden={isAfricaContinentHidden}
				/>
				<ContinentImageSVG
					src="/images/interactiveMap/Amerique.svg"
					alt="America_continent"
					isHidden={isAmericaContinentHidden}
				/>
				<ContinentImageSVG
					src="/images/interactiveMap/Asie.svg"
					alt="Asia_continent"
					isHidden={isAsiaContinentHidden}
				/>
				<ContinentImageSVG
					src="/images/interactiveMap/Europe.svg"
					alt="Europe_continent"
					isHidden={isEuropeContinentHidden}
				/>
				<ContinentImageSVG
					src="/images/interactiveMap/Russie.svg"
					alt="Russia"
					isHidden={isAsiaContinentHidden}
				/>
				<ContinentImageSVG
					src="/images/interactiveMap/Australie.svg"
					alt="Australie"
					isHidden={isRussiaContinentHidden}
				/>
				<div className={styles.hoverContainer}>
					<div
						style={{
							height: '100%',
							width: '35%',
							zIndex: 5,
							position: 'absolute',
							top: '0',
							left: '0'
							// border: "1px solid red",
						}}
						onMouseEnter={() => toggleIsAmericaHover(true)}
						onMouseLeave={() => {
							toggleIsAmericaHover(false);
						}}
					/>
					<div
						style={{
							height: '21%',
							width: '16%',
							zIndex: 5,
							position: 'absolute',
							top: '11%',
							left: '41%'
							// border: "1px solid red",
						}}
						onMouseEnter={() => toggleIsEuropeHover(true)}
						onMouseLeave={() => {
							toggleIsEuropeHover(false);
						}}
					/>
					<div
						style={{
							height: '45%',
							width: '23%',
							zIndex: 5,
							position: 'absolute',
							top: '37%',
							left: '39%'
							// border: "1px solid red",
						}}
						onMouseEnter={() => toggleIsAfricaHover(true)}
						onMouseLeave={() => {
							toggleIsAfricaHover(false);
						}}
					/>
					<div
						style={{
							height: '47%',
							width: '40%',
							zIndex: 5,
							position: 'absolute',
							top: '5%',
							left: '56%'
							// border: "1px solid red",
						}}
						onMouseEnter={() => toggleIsAsiaHover(true)}
						onMouseLeave={() => {
							toggleIsAsiaHover(false);
						}}
					/>
				</div>
			</div>
			<div className={styles.continentContainer}>
				<ContinentText
					continent={americaContinent}
					className={styles.america}
					isHovered={isAmericaHover}
					isHidden={isAmericaContinentHidden}
				/>

				<ContinentText
					continent={europeContinent}
					className={styles.europe}
					isHovered={isEuropeHover}
					isHidden={isEuropeContinentHidden}
				/>
				<ContinentText
					continent={africaContinent}
					className={styles.africa}
					isHovered={isAfricaHover}
					isHidden={isAfricaContinentHidden}
				/>
				<ContinentText
					continent={asiaContinent}
					className={styles.asia}
					isHovered={isAsiaHover}
					isHidden={isAsiaContinentHidden}
				/>
			</div>
		</div>
	);
}

export default Map;
