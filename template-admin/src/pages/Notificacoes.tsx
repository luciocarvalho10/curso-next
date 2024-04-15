import Layout from '@/components/template/Layout'
import useAppData from '@/data/hook/useAppData'

export default function Notificacoes() {
    const ctx = useAppData()
	return (
		<Layout
			titulo='Notificações'
			subtitulo='Aqui você irá as suas notificações.'>
			<h3>Conteúdo</h3>
            <button onClick={ctx.alternarTema}>
                Alternar Tema
            </button>
		</Layout>
	)
}
