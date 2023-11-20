"use clent";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import supabase from "@/src/provider/supabase";
import B_upload_file from "@/src/ui/button/b_upload_file";
import C_info_circleIcon from "@/src/ui/card/c_info_circleIcon";
import { format } from "date-fns";
import { MessageSquare, Plus, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import { Suspense, } from "react";

async function deleteItem(id: string) {
	await supabase
		.from('cities')
		.delete()
		.match({ 'id': id });
}

export default async function Dash_chatbot() {
	let { data: files, error } = await supabase
		.from("file")
		.select("*")
		.eq("user", "0457b3a1-c724-47e1-9781-4835260b89a3");


	if (error) {
		throw error;
	}

	return (
		<main className="mx-auto max-w-6xl md:p-10">
			<div className="mt-8 flex flex-col items-start justify-between gap-4 border-b  border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
				<h1 className="mb-3 text-5xl font-bold text-gray-900">My</h1>
				<B_upload_file />
			</div>
			{files?.length}
			<C_info_circleIcon />
			<div className="mt-8 flex flex-col items-start justify-between gap-4 border-b  border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0" />
			<Suspense fallback={<Skeleton className="my-2 h-[100px] rounded-sm" />}>
				{files && files.length > 0 ? (
					<ul className="gird-cols-1 mt-8 grid gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
						{files.map((file) => (
							<li key={file.id} className="col-span01 hover:shasow-lg divide-y divide-gray-200 rounded-lg bg-white shadow transition ">
								<Link href={`/dashboard/${file.id}`} className="flex flex-col gap-2">
									<div className="flex w-full items-center justify-between space-x-6 px-6 pt-6">
										<div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
										<div className="flex-1 truncate">
											<div className="flex items-center space-x-3">
												<h3 className="truncate text-lg font-medium text-zinc-300">
													{file.name}
												</h3>
											</div>
										</div>
									</div>
								</Link>
								<div className="mt-4 grid grid-cols-3 place-items-center gap-6 px-3 py-2 text-xs sm:px-10">
									<div className="flex items-center gap-2">
										<Plus className="h-4 w-4" />
										{file.created_at && format(new Date(file.created_at), "MM월 yyy")}
									</div>

									<div className="flex items-center gap-2">
										<MessageSquare className="h-4 w-4" />
									</div>
									<Button variant="destructive">
										<Trash2 className="h-4 w-4" />
									</Button>
								</div>
							</li>
						))}
					</ul>
				) : (
					<div className="mt-16 flex flex-col items-center gap-2">
						<Trash className="h-8 w-8 text-zinc-500" />
						<h3 className="font-semiblod text-xl">empty space</h3>
						<p>upload your files please</p>
					</div>
				)}
			</Suspense>
		</main>
	);
}
