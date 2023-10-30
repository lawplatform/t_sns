import N_side from "@/src/ui/navigation/n_side";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex w-full flex-row">
			<N_side></N_side>
			<div className="mx-auto mt-3">{children}</div>
		</div>

	);

}
