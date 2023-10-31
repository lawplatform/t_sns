import GetDataFromSupabase from "@/src/component/getDataFromSupabase";

export default function Page() {

	return (
		<>
			<p>Dashboard Chat Page</p>
			<GetDataFromSupabase></GetDataFromSupabase>
			<div className="flex flex-row">
				<div className="bg-red-100"> chat body</div>
				<div className="bg-blue-100"> rest schedule</div>
			</div>
		</>)
}
