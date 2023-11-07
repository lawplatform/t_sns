import N_next_prev from "@/src/ui/navigation/n_next_prev";
const SECTION_DATA = [
	{ label: 1, href: "/temp", isFirst: true, isLast: false },
	{ label: 2, href: "/temp/page-2", isFirst: true, isLast: false },
	{ label: 3, href: "/temp/page-3", isFirst: false, isLast: false },
	{ label: 3, href: "/temp/page-4", isFirst: false, isLast: true },
];
export default function Home() {
	return (
		<div>
			<N_next_prev section_data={SECTION_DATA} >
				<div> this is temp etemp temp </div>
			</N_next_prev>
		</div>
	)
}
