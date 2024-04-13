import Link from 'next/link'

interface IMenuItemProps {
	icone: any
	texto: string
	url: string
}

export default function MenuItem(props: IMenuItemProps) {
	return (
		<li className={`hover:bg-gray-200`}>
			<Link
				href={props.url}
				className={`
                flex flex-col justify-center items-center
                h-20 w-20
            `}>
				{props.icone}
				<span className={`
                    text-xs font-light text-gray-600
                `}>
                    {props.texto}
                </span>
			</Link>
			{/* precisa por o legacyBehavior senão dará erro */}
			{/*
                <Link
				href={props.url}
				legacyBehavior>
				<a
					className={`flex flex-col justify-center items-center h-20 w-full`}>
					{props.icone}
					<span>{props.texto}</span>
				</a>
                </Link>
             */}
		</li>
	)
}
