import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Auth";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { login, googleSignIn } = UserAuth();

	const loginHandler = async (e) => {
		e.preventDefault();
		try {
			await login(email, password);
			navigate("/home");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className='container m-auto my-10 mx-10'>
			<div className='mb-5'>
				<h1 className='text-4xl font-bold mb-2 '>LogIn</h1>
				<p className='text-sm'>
					atau Sign Up{" "}
					<span className='underline font-semibold text-blue-400'>
						<Link to='/signup'>disini</Link>
					</span>{" "}
					untuk buat akun
				</p>
			</div>
			<form action=''>
				<div className='mb-2'>
					<label htmlFor='email' className='block mb-2 font-semibold'>
						email
					</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='text'
						className='ring-1 ring-blue-200 px-2 py-1 rounded-md shadow-sm'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='password' className='block mb-2 font-semibold'>
						password
					</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type='text'
						className='ring-1 ring-blue-200 px-2 py-1 rounded-md shadow-sm'
					/>
				</div>
				<div className='bg-blue-500 w-fit px-6 py-2 rounded-lg shadow-sm'>
					<button
						type='submit'
						className='text-slate-200'
						onClick={loginHandler}>
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
