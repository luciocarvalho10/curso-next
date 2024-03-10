import { useState } from 'react'
import Presente from '@/components/Presente'
import Porta from '@/components/Porta'
import PortaModel from '@/model/PortaModel'

export default function Home() {
    const [p1, setP1] = useState(new PortaModel(1))
    const p2 = new PortaModel(2)

    return (
        <div style={{display: 'flex'}}>
            <Porta porta={p1}/>
            <Porta porta={p2}/>
        </div>
    );
}
