import { useEffect, useState } from "react";
import { trpc } from "@/app/_trpc/client"
import './gallery_anime.css'
export default function Gallery_anime() {
	const getImages = trpc.getImages.useQuery();
	useEffect(() => {
		const track = document.getElementById("image-track");
		if (track != null) {
			const handleOnDown = (e: MouseEvent) => track.dataset.mouseDownAt = e.clientX.toString();

			const handleOnUp = (e: MouseEvent) => {
				track.dataset.mouseDownAt = "0";
				track.dataset.prevPercentage = track.dataset.percentage;
			}

			const handleOnMove = (e: MouseEvent) => {
				if (track.dataset.mouseDownAt === "0") return;

				const mouseDelta = parseFloat(track.dataset.mouseDownAt!) - e.clientX;
				const maxDelta = window.innerWidth;

				const percentage = (mouseDelta / maxDelta) * -100,
					nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage!) + percentage,
					nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

				track.dataset.percentage = nextPercentage.toString();

				track.animate({
					transform: `translate(${nextPercentage}%, -50%)`
				}, { duration: 1200, fill: "forwards" });
				const imageElements = Array.from(track.getElementsByClassName("image"));
				for (const image of imageElements) {
					image.animate({
						objectPosition: `${50 + nextPercentage}% center`
					}, { duration: 200, fill: "forwards" });
				}
			}


			/* -- Had to add extra lines for touch events -- */
			window.onmousedown = e => handleOnDown(e);
			//@ts-ignore
			window.ontouchstart = e => handleOnDown(e.touches[0]);
			window.onmouseup = e => handleOnUp(e);
			//@ts-ignore
			window.ontouchend = e => handleOnUp(e.touches[0]);
			window.onmousemove = e => handleOnMove(e);

			//@ts-ignore
			window.ontouchmove = e => handleOnMove(e.touches[0]);
		}
	}
		, [])
	return (
		< div className="" > this is interactive gallery
			<div id="image-track" className="" data-prev-percentage="0" data-mouse-down-at="0">
				{getImages.data && JSON.parse(getImages.data).map((imageName: any, index: any) => (
					<img key={index} src={"gallery/" + imageName} alt={`Image ${index}`} />
				))}
			</div>
		</ div >
	)
}
