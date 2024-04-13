import MenuItem from '@/components/template/MenuItem'
import { IconeAjuste, IconeCasa, IconeSino } from '@/components/icons'
import Logo from '@/components/template/Logo'

export default function MenuLateral() {
    return (
		<aside>
			<Logo />
			<ul>
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
		</aside>
	)
}