import MQuestao from '@/model/MQuestao'
import MResposta from '@/model/MResposta'

const questoes: MQuestao[] = [
    new MQuestao( 306, 'Qual cor tem na bandeira do Brasil?', [
        MResposta.errada('Vermelho'),
        MResposta.errada('Lilás'),
        MResposta.errada('Rosa'),
        MResposta.certa('Azul'),
    ]),
    new MQuestao( 202, 'Qual maior estado do Brasil?', [
        MResposta.errada('Pará'),
        MResposta.errada('São Paulo'),
        MResposta.errada('Minas Gerais'),
        MResposta.certa('Amazonas'),
    ]),
]

export default questoes