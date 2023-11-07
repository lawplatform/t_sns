import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


export default function Chat_input_text() {

	const formSchema = z.object({
		msg: z.string()
	})
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			msg: "",
		}
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (values.msg) {
			form.reset();
			console.log(values);
			//const {error} = await supabase.from('message').insert({values.msg})
			//if(error){alert(error.mesage)}
		}

	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="flex w-full">
					<FormField
						control={form.control}
						name="msg"
						render={({ field }) => (
							<div className="mr-2 w-full">
								<FormItem>
									<FormControl >
										<Input placeholder="메시지를 입력하시오" {...field} />
									</FormControl>
								</FormItem>
							</div>
						)}
					/>
					<Button type="submit">입력</Button>
				</div>
			</form>
		</Form >
	)
}
