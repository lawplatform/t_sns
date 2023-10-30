import { Skeleton } from "@/components/ui/skeleton"
import C_calender from "@/src/ui/card/c_calender"
export default function Page() {
	return (
		<div >
			<h1 className="text-3xl leading-tight">정보</h1>
			<h1 className="text-3xl leading-tight">일정</h1>
			<div className="flex flex-col gap-5 md:flex-row">
				<C_calender></C_calender>
				<div className="w-[500px] rounded-md border p-3">
					<h4 className="text-xl font-bold text-black dark:text-white">참여자</h4>
					<ul>
						<li className="border-b px-4 py-2">ar</li>
						<li className="border-b px-4 py-2">ar</li>
						<li className="border-b px-4 py-2">ar</li>
					</ul>
				</div>
			</div >
		</div>
	)
}
