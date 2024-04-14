import MenuItem from '@/components/template/MenuItem'
import { IconeAjuste, IconeCasa, IconeSair, IconeSino } from '@/components/icons'
import Logo from '@/components/template/Logo'

export default function MenuLateral() {
    return (
		<aside className='flex flex-col'>
			<div
				className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                w-20 h-20
            `}>
				<Logo />
			</div>
			<ul className="flex-grow">
				<MenuItem
					url='/'
					texto='Início'
					icone={IconeCasa}
				/>
				<MenuItem
					url='/Ajustes'
					texto='Ajustes'
					icone={IconeAjuste}
				/>
				<MenuItem
					url='/Notificacoes'
					texto='Notificações'
					icone={IconeSino}
				/>
			</ul>
            <ul>
				<MenuItem
					onClick={() => console.log('Sair')}
					texto='Sair'
					icone={IconeSair}
                    className={`
                        text-red-600
                        hover:bg-red-400 hover:text-white
                    `}
				/>
            </ul>
		</aside>
	)
}