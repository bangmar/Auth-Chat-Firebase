import React, { useState } from "react";
import { UserAuth } from "../context/Auth";

function MsgForm() {
	const [text, setText] = useState("");

	const { sendMsg, user } = UserAuth();

	const sendHandler = async (e) => {
		e.preventDefault();
		try {
			await sendMsg(text, user.email);
		} catch (err) {
			console.log(err.message);
		}

		setText("");
	};

	return (
		<div className='bg-blue-400 px-10 py-4 fixed bottom-0  w-screen'>
			<form onSubmit={sendHandler} className=' flex gap-5 justify-between'>
				<input
					type='text'
					className='border-none w-screen px-4 rounded-lg ring-2 ring-slate-200'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button className='bg-blue-200 w-fit px-4 py-2 font-bold text-slate-800 rounded-md'>
					✈️
				</button>
			</form>
		</div>
	);
}

export default MsgForm;
