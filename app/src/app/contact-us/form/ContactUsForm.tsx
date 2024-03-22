'use client';

import React, {
	BaseSyntheticEvent,
	FormEvent,
	useEffect,
	useState
} from 'react';
import styles from './Form.module.scss';
import { motion, useAnimation } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText/AnimatedText';

const baseAnimationForm = {
	initial: {
		opacity: 0,
		y: -20
	},
	animate: {
		opacity: 1,
		y: 0
	}
};

export default function ContactUsForm() {
	const controls = useAnimation();
	let previousImageScr: HTMLImageElement | null = null;
	let previousStyle: HTMLDivElement | null = null;

	useEffect(() => {
		const drawBorder = async () => {
			await controls.start({ pathLength: 1 });
		};

		drawBorder().then(() => {
			controls.start({ opacity: 0 }).then();
		});
	}, [controls]);

	const toggle = (event: BaseSyntheticEvent) => {
		event.preventDefault();
		let imageSrc: HTMLImageElement = event.currentTarget.children[0];
		let pElement: HTMLParagraphElement = event.currentTarget.children[1];
		let divEleemt: HTMLDivElement = event.currentTarget;

		if (previousImageScr) {
			previousImageScr.src = previousImageScr.src.replace('_purple', '');
		}
		console.log(previousStyle);
		console.log(pElement);

		if (previousStyle) {
			previousStyle.style.border = '1px solid black';
			let testeleemt: HTMLParagraphElement = previousStyle
				.children[1] as HTMLParagraphElement;
			testeleemt.style.color = 'black';
		}

		previousImageScr = imageSrc;
		previousStyle = event.currentTarget;

		if (imageSrc.src.indexOf('purple') !== -1) {
			imageSrc.src = imageSrc.src.replace('_purple', '');
		} else {
			imageSrc.src = imageSrc.src.replace('.svg', '_purple.svg');
		}

		divEleemt.style.border = '1px solid #4F0FFF';
		pElement.style.color = '#4F0FFF';
	};

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] =
		useState(false); // Nouvel état
	const [captchaValue, setCaptchaValue] = useState(null);

	const handleCaptchaChange = (value: any) => {
		console.log('Captcha value:', value);
		setCaptchaValue(value);
	};

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: ''
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify(formData)
			});
			if (response.ok) {
				setIsSubmittedSuccessfully(true);
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phoneNumber: '',
					message: ''
				});
				const result = await response.json();
			} else {
				console.error('error', response.statusText);
			}
		} catch (error) {
			console.error('error', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className={styles.container}>
			<div>
				<form onSubmit={handleSubmit}>
					<div className={styles.containerForm}>
						<AnimatedText
							el="p"
							className={styles.contactUs}
							text={['Contact Us']}
						/>
						<motion.p
							{...baseAnimationForm}
							{...baseAnimationForm}
							transition={{ delay: 0.1 }}
						>
							You are a :
						</motion.p>
						<div className={styles.buttons}>
							<motion.button
								{...baseAnimationForm}
								{...baseAnimationForm}
								transition={{ delay: 0.1 }}
								onClick={(event) => toggle(event)}
							>
								<img
									src="/images/contactUs/icon_talent.svg"
									alt=""
								/>
								<p>Talent</p>
							</motion.button>

							<motion.button
								{...baseAnimationForm}
								{...baseAnimationForm}
								transition={{ delay: 0.2 }}
								onClick={(event) => toggle(event)}
							>
								<img
									src="/images/contactUs/icon_hospital.svg"
									alt=""
								/>
								<p>Medical Center</p>
							</motion.button>

							<motion.button
								{...baseAnimationForm}
								{...baseAnimationForm}
								transition={{ delay: 0.3 }}
								onClick={(event) => toggle(event)}
							>
								<img
									src="/images/contactUs/icon_patient.svg"
									alt=""
								/>
								<p>Patient</p>
							</motion.button>

							<motion.button
								{...baseAnimationForm}
								{...baseAnimationForm}
								transition={{ delay: 0.4 }}
								onClick={(event) => toggle(event)}
							>
								<img
									src="/images/contactUs/icon_notebook.svg"
									alt=""
								/>
								<p>Media</p>
							</motion.button>

							<motion.button
								{...baseAnimationForm}
								{...baseAnimationForm}
								transition={{ delay: 0.5 }}
								onClick={(event) => toggle(event)}
							>
								<img
									src="/images/contactUs/icon-more-horizontal.svg"
									alt=""
								/>
								<p>Other</p>
							</motion.button>
						</div>

						<div className={styles.inputs}>
							<motion.input
								type="text"
								name="firstName"
								placeholder="Your First Name"
								value={formData.firstName}
								onChange={handleChange}
								{...baseAnimationForm}
								transition={{ delay: 0.6 }}
								required
							/>
							<motion.input
								type="text"
								name="lastName"
								placeholder="Your Last Name"
								value={formData.lastName}
								onChange={handleChange}
								{...baseAnimationForm}
								transition={{ delay: 0.7 }}
								required
							/>
							<motion.input
								type="email"
								name="email"
								placeholder="Your Email"
								value={formData.email}
								onChange={handleChange}
								{...baseAnimationForm}
								transition={{ delay: 0.8 }}
								required
							/>
							<motion.input
								type="tel"
								name="phoneNumber"
								placeholder="Your Phone Number"
								value={formData.phoneNumber}
								onChange={handleChange}
								{...baseAnimationForm}
								transition={{ delay: 0.9 }}
								required
							/>
						</div>

						<motion.div
							className={styles.messageContainer}
							{...baseAnimationForm}
							transition={{ delay: 1 }}
						>
							<p>Your message</p>
							<textarea
								name="message"
								placeholder="Type here"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
						</motion.div>

						{isSubmittedSuccessfully ? (
							<div className={styles.confirmationMessage}>
								Your message has been successfully sent!
							</div>
						) : (
							<motion.button
								className={styles.submit}
								{...baseAnimationForm}
								transition={{ delay: 1.1 }}
								disabled={isSubmitting}
							>
								<img src="/images/news/arrowRight.svg" alt="" />
								<p>Send your message</p>
							</motion.button>
						)}
					</div>
				</form>
				{/* <ReCAPTCHA
						sitekey="6LfXAZ8pAAAAADgN_EG_08f9KOW4lEN-NQfRlDbs"
						onChange={handleCaptchaChange}
					/> */}
			</div>
			<div className={styles.imageContainer}>
				{/* <svg viewBox="0 0 565 518" className={styles.svgContainer}>
						<motion.path
							d="M0,80 Q0,0 80,0 L485,0 Q565,0 565,80 L565,438 Q565,518 485,518 L80,518 Q0,518 0,438 L0,80"
							initial={{ pathLength: 0, opacity: 1 }}
							animate={controls}
							stroke="black"
							strokeWidth="1"
							fill="transparent"
							transition={{ delay: 1, duration: 1 }}
							style={{
								borderRadius: '70px 0x 70px 0px',
								overflow: 'hidden'
							}}
						/>
					</svg> */}
				<motion.img
					src="/images/analyse/analyse1.png"
					alt=""
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className={styles.image}
				/>
			</div>
		</div>
	);
}
