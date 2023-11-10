import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {

	return (
		<div>
			<div>
				<div className="h-52">
				</div>
				<Input type="text" />
				<Button onClick={add} > click</Button>
			</div >
		</div>
	)
}
