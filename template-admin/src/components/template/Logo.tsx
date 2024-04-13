import logo from '../../../public/logo.png'

export default function Logo() {
	return (
		<div
			className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                w-20 h-20
            `}>
			<img
				src={logo.src}
				alt='logo'
				className={`flex w-14 h-14 `}
			/>
		</div>
	)
}
