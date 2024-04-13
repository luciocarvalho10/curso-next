import MenuLateral from '@/components/template/MenuLateral'
import Cabecalho from '@/components/template/Cabecalho'
import Conteudo from '@/components/template/Conteudo'

interface ILayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: ILayoutProps) {
    return (
        <div>
            <MenuLateral />
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
            <Conteudo>{props.children}</Conteudo>
        </div>
    )
}