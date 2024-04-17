import AuthInput from '@/components/auth/AuthInput'
import { useState } from 'react'

export default function Autenticacao() {
	const [modo, setModo] = useState<'login' | 'cadastro'>('login')
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')

	function submeter() {
		if (modo === 'login') {
			console.log('Login')
		} else {
			console.log('Cadastrar')
		}
	}

	return (
		<div className={`flex h-screen items-center justify-center`}>
			<div className='hidden md:block md:w-1/2 lg:w-2/3'>
				<img
					src='https://source.unsplash.com/random'
					alt='Imagem da tela de Autenticação'
					className='h-screen w-full object-cover'
				/>
			</div>

			<div className=' m-10 w-1/2 md:w-1/2 lg:w-1/3'>
				<h1 className={`text-3xl font-bold mb-5`}>
					{modo === 'login'
						? 'Entre com a Sua Conta'
						: 'Cadastra-se na Plataforma'}
				</h1>

				<AuthInput
					label='Email'
					tipo='email'
					valor={email}
					valorMudou={setEmail}
					obrigatorio
				/>
				<AuthInput
					label='Senha'
					tipo='password'
					valor={senha}
					valorMudou={setSenha}
					obrigatorio
				/>

				<button
					onClick={submeter}
					className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white px-4 py-2 rounded-lg mt-6
                `}>
					{modo === 'login' ? 'Entrar' : 'Cadastrar'}
				</button>

				<hr className='my-6 border-gray-300 w-full' />

				<button
					onClick={submeter}
					className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white px-4 py-2 rounded-lg
                `}>
					Entrar com o Google
				</button>

				{modo === 'login' ? (
					<p className='mt-8'>
						Não possui uma conta?
						<a
							onClick={() => setModo('cadastro')}
							className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Crie uma Conta Gratuita!</a>
					</p>
				) : (
					<p className='mt-8'>
						Já possui uma Conta?
						<a
							onClick={() => setModo('login')}
							className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Acesse agora!</a>
					</p>
				)}
			</div>
		</div>
	)
}
