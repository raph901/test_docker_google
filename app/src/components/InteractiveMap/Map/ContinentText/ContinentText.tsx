import React from 'react';
import styles from './Continent.module.scss';
interface ContinentProps {
	continent: {
		name: string;
		countries: string[];
	};
	className: string;
	isHovered?: boolean;
	isHidden?: boolean;
}
function ContinentText({
	continent,
	className,
	isHovered,
	isHidden
}: ContinentProps) {
	return (
		<div
			className={className}
			style={{
				color: isHovered ? '#4F0FFF' : '',
				opacity: isHidden ? 0.3 : 1,
				transition: '0.3s'
			}}
		>
			<h2
				style={{
					color: isHovered ? '#4F0FFF' : '',
					transition: '0.3s'
				}}
			>
				{continent.name}
			</h2>
			<ul>
				{continent.countries.map((country, index) => (
					<li
						style={{
							color: isHovered ? '#4F0FFF' : '',
							transition: '0.3s'
						}}
						key={index}
					>
						{country}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ContinentText;
