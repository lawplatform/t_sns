import C_info from "@/src/ui/card/C_info";
import C_Basic from "@/src/ui/card/c_Basic";
import C_Profile from "@/src/ui/card/c_Profile";
import C_profile_h from "@/src/ui/card/c_Profile_h";
import C_calender from "@/src/ui/card/c_calender";
import C_comment from "@/src/ui/card/c_comment";
import C_Flip_3d from "@/src/ui/card/c_flip_3d";
import C_product from "@/src/ui/card/c_product";
import C_product_1 from "@/src/ui/card/c_product_1";
import C_product_2 from "@/src/ui/card/c_product_2";
import C_user from "@/src/ui/card/c_user";

export default function Home() {
	return (

		<div className="w-full">
			<h1>card section collection</h1>
			<div className="mb-2 grid grid-cols-3">
				<C_profile_h />
				<C_info
					title={"abc"}
					number={100}
					des={"des"}
					color={"red"}
					children={undefined}
				/>
				<C_user />
			</div>
			<div className="grid grid-cols-4 gap-4">
				<C_Basic />
				<C_calender />
				<C_Profile />
				<C_Flip_3d></C_Flip_3d>

			</div>
			<div className="flex flex-row">
				<C_product />
				<C_product_1 msg={"temp"} />
				<C_product_2 />
			</div>
			<C_comment />
		</div >
	);
}
