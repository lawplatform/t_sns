"use client";
import B_google from "@/src/ui/button/b_google";
import { F_signin } from "@/src/ui/form/F_signin";
import F_signup from "@/src/ui/form/F_singup";
import { serverActionTemp } from "./action";
import F_signup_pur from "@/src/ui/form/F_singup_pur";
import Bg_transparent from "@/src/ui/background/bg_transparent";

export default function Home() {
	return (
		<>
			<Bg_transparent />
			<B_google onClickHandler={() => console.log("hellow")} />
			<div className="mt-3 flex flex-col ">
				<F_signin />
				<div className="m-3 mx-auto w-full border-b-2  border-dotted  border-black "></div>
				<F_signup_pur />
			</div>
		</>
	);
}
