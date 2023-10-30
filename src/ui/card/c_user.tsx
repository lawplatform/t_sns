export default function C_user(second) {
	return (
		<div class="container mx-auto flex h-screen max-w-sm flex-col items-center justify-center space-y-4">
			<div class="flex w-full items-center rounded-xl border bg-white p-2 shadow">
				<div class="flex items-center space-x-4">
					<img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="h-16 w-16 rounded-full">
				</div>
				<div class="flex-grow p-3">
					<div class="font-semibold text-gray-700">
						Antério Vieira da Silva Lima
					</div>
					<div class="text-sm text-gray-500">
						You: Thanks, sounds good! . 8hr
					</div>
				</div>
				<div class="p-2">
					<img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="order-1 h-4 w-4 rounded-full">
				</div>
			</div>

			<div class="flex w-full items-center rounded-xl border bg-white p-2 shadow">
				<div class="relative flex items-center space-x-4">
					<img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="h-16 w-16 rounded-full">
						<span class="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-400"></span>
				</div>
				<div class="flex-grow p-3">
					<div class="font-semibold text-gray-700">
						Antério Vieira da Silva Lima
					</div>
					<div class="text-sm text-gray-500">
						@ktquez sent a image . 2hr
					</div>
				</div>
				<div class="p-2">
					<span class="bottom-0 right-0 block h-4 w-4 rounded-full bg-blue-400"></span>
				</div>
			</div>
		</div>
	)
}
