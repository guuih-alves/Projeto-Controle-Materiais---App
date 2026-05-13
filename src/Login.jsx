import React, { useState } from 'react'
import { auth } from './config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './index.css'
import { useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
 

    const handleSubmit = async (e) => {
    
        e.preventDefault()
        try{
             await signInWithEmailAndPassword (auth ,email, password)
             alert('Login bem sucedido')
            navigate("/Menu");

        } catch(error){
            console.log(error)
            alert('Erro de dados')
        }
    }
    return (  
        <div className="flex justify-center items-center h-screen bg-[#0c404d]">
                <form className="bg-[#347e8b] bg-opacity-80 p-5 rounded-lg shadow-md text-center" onSubmit={handleSubmit}>
                    <Navbar />
                    <h2 className='text-gray-80 font-medium'>Dados de usuário: </h2>
                    <label className='block my-[10px]' htmlFor="email">
                        Email:
                        <input className='w-full p-2 mt-1 mb-2 border border-gray-300 rounded box-border' type="text" onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label className='block my-[10px]' htmlFor="password">
                        Senha:
                        <input className='w-full p-2 mt-1 mb-2 border border-gray-300 rounded box-border' type="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button className='bg-[#2ecc71] text-white border-none px-5 py-2 rounded-md cursor-pointer text-base hover:bg-[#27ae60]' type='submit'> Entrar</button> <br />
                    <p className='text-right'>v 2.0</p>


                </form>

          
            </div>

    )
}

export default Login;