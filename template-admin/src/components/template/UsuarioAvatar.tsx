import useAuth from '@/data/hook/UseAuth'
import Link from 'next/link'
import logo from '../../../public/logo.png'

interface IAvatarUsuarioProps {
	className?: string
}

export default function UsuarioAvatar(props: IAvatarUsuarioProps) {
	const { usuario } = useAuth()

	return (
		<Link href={'/perfil'}>
			<img
				src={usuario?.imagemUrl ?? logo.src}
				alt='Avatar do usuario'
				className={`
                    w-10 h-10 rounded-full
                    cursor-pointer
                    ${props.className}
                `}
			/>
		</Link>
	)
}
