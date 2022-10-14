import React, { useEffect } from "react";
import { UserAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import MsgForm from "./MsgForm";

function Home() {
	const { user, logout, msg } = UserAuth();
	const navigate = useNavigate();

	const logoutHandler = async () => {
		try {
			await logout();
			console.log("Logging out");
			navigate("/");
		} catch (e) {
			console.log(e.message);
		}
	};

	useEffect(() => {
		window.scrollTo({
			top: 1000000000000000000000,
			behavior: "smooth",
		});
	});

	return (
		<div>
			<div className='container m-auto py-24 flex flex-col gap-1'>
				{msg.map((msg) => {
					return (
						<div
							className={`${
								user.email === msg.data.userEmail
									? "bg-slate-800 rounded-l-xl rounded-br-xl self-end text-slate-100	"
									: "{ bg-blue-200 rounded-r-xl}"
							} px-10 py-2 mb-5 w-1/2 overflow-scroll shadow-md mx-2`}
							key={msg.id}>
							<p className='font-semibold'>from {msg.data.userEmail}</p>
							<p className='mb-2'>{msg.data.text}</p>
						</div>
					);
				})}
			</div>

			<div className=' w-screen mx-2 rounded-lg shadow-sm fixed top-0 right-0 bg-slate-100 px-10 py-3 flex justify-between items-center'>
				<div className='font-bold'>
					WELCOME TO THE CHAT !
					<p className='font-light mb-1'> you logged in as {user.email}</p>
				</div>
				<div>
					<button
						onClick={logoutHandler}
						type='submit'
						className='text-slate-200 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-slate-100 bg-blue-500'>
						Log Out
					</button>
				</div>
			</div>

			<MsgForm />
		</div>
	);
}

export default Home;
