import F_contact from "@/src/ui/form/F_Contact";
import Text_info_1 from "@/src/ui/text/text_info_1";

export default function Sec_contact() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="mx-auto max-w-2xl text-center">
					<Text_info_1 tag={"연락"} msg={"문의하기"} />
					<div>
						<F_contact />
					</div>
				</div>
			</div>
		</section>


	)
}
