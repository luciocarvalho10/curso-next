import logo from '../../../public/logo.png'

export default function Logo() {
	return (
		<img
			src={logo.src}
			alt='Na Finha Fáquina Funciona'
			className={`flex w-14 h-14 `}
		/>
	)
}
