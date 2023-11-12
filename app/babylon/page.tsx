"use client"
import SceneContainer from "@/src/babylon/SceneContainer";
import Im_scene from "@/src/babylon/imperative/im_scene";
import Logo from "@/src/babylon/object/Logo";
import SC_isometric from "@/src/babylon/scene/SC_isometric";
import { Color3, Vector3 } from "@babylonjs/core";
import React from "react";

const ThemeContext = React.createContext({
	color: Color3.Red(),
	position: Vector3.Zero(),
	name: 'default context',

})


const ThemedBox = () => {
	const ctx = React.useContext(ThemeContext)
	return (
		<box name={ctx.name} position={ctx.position}>
			<standardMaterial
				name="mat"
				diffuseColor={ctx.color}
				specularColor={Color3.Black()}
			/>

		</box>

	)

}



export default function Home() {
	return (
		<div className="mt-5">
			<SC_isometric >
				<ThemedBox />
			</SC_isometric>

		</div>
	)
}
