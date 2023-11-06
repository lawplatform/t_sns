import { useEffect } from 'react'
import './H_ink_splash.css'
import Image from 'next/image'

export default function H_ink_splash() {
	useEffect(() => {
		const maskedImage = document.querySelector(".color-image");
		if (maskedImage) {
			maskedImage.classList.remove("mask-animation");
			setTimeout(() => maskedImage.classList.add("mask-animation"), 100);
		}
	}, [])
	return (
		<div>
			<div className="mask-container">
				<div className="color-image"></div>
				<img src="/effect/object/monitor-color.png" alt="" />
			</div>
		</div>
	)
}
