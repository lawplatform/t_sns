"use client"
import Sec_description from "@/src/section/Sec_description";
import Bar_progress from "@/src/ui/bar/bar_progress";
import W_Scroll_Horizontal from "@/src/ui/wrapper/W_Scroll_Horizontal.tsx";
import anime from "animejs";
import { useEffect } from "react";

export default function Horizontal_Scroll_Page() {
	return (

		<div>
			<Info_404 />
			<W_Scroll_Horizontal>
				<div>het ... ? </div>
				<div>arst</div>
				<Sec_description />
				<div>arst</div>
			</W_Scroll_Horizontal>
		</div>
	)
}
