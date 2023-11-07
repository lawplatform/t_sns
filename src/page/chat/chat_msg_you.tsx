export default function Chat_msg_you() {
	return (
		<div className="chat-message mb-2">
			<div className="flex items-end">
				<div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
					<div><span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">Can be verified on any platform using docker</span></div>
				</div>
				<img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="order-1 h-6 w-6 rounded-full" />
			</div>
		</div>
	)
}