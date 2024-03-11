import { useState } from 'react'
import Presente from '@/components/Presente'
import Porta from '@/components/Porta'
// import PortaModel from '@/model/PortaModel'

import { criarPortas, atualizarPortas } from '@/functions/portas'

export default function Home() {
    const [portas, setPortas] = useState(criarPortas(3, 1))

    function renderizarPortas() {
        return portas.map(porta => (
            <Porta
                key={porta.numero}
                porta={porta}
                mudanca={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
            />
        ))
    }

    return (
        <div style={{display: 'flex'}}>
            {renderizarPortas()}
        </div>
    );
}