import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import useAuth from '@/data/hook/UseAuth'
import router from 'next/router'

export default function Autenticador(props: any) {
	const { usuario, carregando } = useAuth()

	function renderizarConteudo() {
		return <>{props.children}</>
	}

	function renderizarCarregando() {
		return (
			<div
				className={`
                flex justify-center items-center
            `}>
				<Image
					src={loading}
					alt='Carregando'
				/>
			</div>
		)
	}

	if (!carregando && usuario?.email) {
		return renderizarConteudo()
	} else if (carregando) {
		renderizarCarregando()
	} else {
		router.push('/autenticacao')
		return null
	}
}
