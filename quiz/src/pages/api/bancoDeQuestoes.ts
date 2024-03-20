import MQuestao from '@/model/MQuestao'
import MResposta from '@/model/MResposta'

const questoes: MQuestao[] = [
    new MQuestao(306, 'Qual bicho transmite a Doença de Chagas?', [
        MResposta.errada('Abelha'),
        MResposta.errada('Barata'),
        MResposta.errada('Pulga'),
        MResposta.certa('Barbeiro'),
    ]),
    new MQuestao(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        MResposta.errada('Caju'),
        MResposta.errada('Côco'),
        MResposta.errada('Chuchu'),
        MResposta.certa('Abóbora'),
    ]),
    new MQuestao(203, 'Qual é o coletivo de cães?', [
        MResposta.errada('Manada'),
        MResposta.errada('Alcateia'),
        MResposta.errada('Rebanho'),
        MResposta.certa('Matilha'),
    ]),
    new MQuestao(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        MResposta.errada('Equilátero'),
        MResposta.errada('Isóceles'),
        MResposta.errada('Trapézio'),
        MResposta.certa('Escaleno'),
    ]),
    new MQuestao(205, 'Quem compôs o Hino da Independência?', [
        MResposta.errada('Castro Alves'),
        MResposta.errada('Manuel Bandeira'),
        MResposta.errada('Carlos Gomes'),
        MResposta.certa('Dom Pedro I'),
    ]),
    new MQuestao(206, 'Qual é o antônimo de "malograr"?', [
        MResposta.errada('Perder'),
        MResposta.errada('Fracassar'),
        MResposta.errada('Desprezar'),
        MResposta.certa('Conseguir'),
    ]),
    new MQuestao(207, 'Em que país nasceu Carmen Miranda?', [
        MResposta.errada('Argentina'),
        MResposta.errada('Espanha'),
        MResposta.errada('Brasil'),
        MResposta.certa('Portugal'),
    ]),
    new MQuestao(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        MResposta.errada('Costa e Silva'),
        MResposta.errada('Emílio Médici'),
        MResposta.errada('Ernesto Geisel'),
        MResposta.certa('João Figueiredo'),
    ]),
    new MQuestao(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        MResposta.errada('Ás'),
        MResposta.errada('Nove'),
        MResposta.errada('Rei'),
        MResposta.certa('Valete'),
    ]),
    new MQuestao(210, 'O adjetivo "venoso" está relacionado a:', [
        MResposta.errada('Vela'),
        MResposta.errada('Vento'),
        MResposta.errada('Vênia'),
        MResposta.certa('Veia'),
    ]),
    new MQuestao(211, 'Que nome se dá à purificação por meio da água?', [
        MResposta.errada('Abrupção'),
        MResposta.errada('Abolição'),
        MResposta.errada('Abnegação'),
        MResposta.certa('Ablução'),
    ]),
    new MQuestao(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        MResposta.errada('Monte Branco'),
        MResposta.errada('Monte Fuji'),
        MResposta.errada('Monte Carlo'),
        MResposta.certa('Monte Everest'),
    ]),
    new MQuestao(213, 'Em que parte do corpo se encontra a epiglote?', [
        MResposta.errada('Estômago'),
        MResposta.errada('Pâncreas'),
        MResposta.errada('Rim'),
        MResposta.certa('Pescoço'),
    ]),
    new MQuestao(214, 'A compensação por perda é chamada de...', [
        MResposta.errada('Déficit'),
        MResposta.errada('Indexação'),
        MResposta.errada('Indébito'),
        MResposta.certa('Indenização'),
    ]),
    new MQuestao(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        MResposta.errada('Cuca'),
        MResposta.errada('Curupira'),
        MResposta.errada('Boitatá'),
        MResposta.certa('Saci-pererê'),
    ]),
    new MQuestao(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        MResposta.errada('Marechal Deodoro'),
        MResposta.errada('Barão de Mauá'),
        MResposta.errada('Marquês de Pombal'),
        MResposta.certa('Duque de Caxias'),
    ]),
]

export default questoes