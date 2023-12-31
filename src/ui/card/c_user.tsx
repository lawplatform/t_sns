export default function C_user(second) {
	return (
		<div className="flex w-full items-center rounded-xl border  p-2 shadow">
			<div className="flex items-center space-x-4">
				<img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" className="h-16 w-16 rounded-full" />
			</div>
			<div className="flex-grow p-3">
				<div className="font-semibold text-gray-700">
					Antério Vieira da Silva Lima
				</div>
				<div className="text-sm text-gray-500">
					You: Thanks, sounds good! . 8hr
				</div>
			</div>
			<div className="p-2">
				<img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="order-1 h-4 w-4 rounded-full" />
			</div>
		</div>

	)
}
