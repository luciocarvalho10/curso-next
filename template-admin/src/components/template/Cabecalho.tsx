import Titulo from "@/components/template/Titulo"

interface ICabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: ICabecalhoProps) {
    return (
        <div>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}