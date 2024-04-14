import Link from 'next/link'

interface IMenuItemProps {
	className?: string
	icone: any
	onClick?: (event: any) => void
	texto: string
	url?: string
}

export default function MenuItem(props: IMenuItemProps) {
	return (
		<li
			onClick={props.onClick}
			className={`
            hover:bg-gray-300
            dark:hover:bg-gray-800
            cursor-pointer
        `}>
			<Link
				href={props.url ? props.url : '#'}
				className={`
                    flex flex-col justify-center items-center
                    h-20 w-20 dark:text-gray-200
                    ${props.className}
            `}>
				{props.icone}
				<span className={`text-xs font-light`}>{props.texto}</span>
			</Link>
		</li>
	)
}
