"use client"
import SceneContainer from "../SceneContainer";
import Logo from "../object/Logo";
import "./SC_Main.css"
export default function SC_Main() {
	return (
		<div>main scene
			<SceneContainer>
				<Logo />
			</SceneContainer>
		</div>
	)
}
