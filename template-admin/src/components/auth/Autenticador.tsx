import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import useAuth from '@/data/hook/UseAuth'
import router from 'next/router'
import Head from 'next/head'

export default function Autenticador(props: any) {
	const { usuario, carregando } = useAuth()

	function renderizarConteudo() {
		return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-auth")) {
                                    window.location.href = "/autenticacao"
                                }
                            `,
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
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
