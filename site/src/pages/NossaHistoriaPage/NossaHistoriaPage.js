
import TimeLine from '../../components/TimeLine/TimeLine';
import './NossaHistoriaPage.css'

const NossaHistoriaPage = () => {
    const timeMarks = [
        {
            id:0,
            title:'Primeira Palavra Profética',
            desc:'Thiago Simeão, nosso pastor e fundador, recebe a primeira palavra profética sobre a Ação do Espírito em uma conferência com Gregorio Macnutt.',
            date: '2003'
        },
        {
            id:1,
            title:'Reafirmação da promessa',
            desc:'Deus relembra o futuro pastor sobre a promessa feita e no mesmo ano é dado início ao Blog Ação do Espírito com o objetivo de abençoar uma geração com os seus textos.',
            date: '2012'
        },
        {
            id:2,
            title:'Ministério Ação do Espírito',
            desc:'Nasce o Ministério Ação do Espírito como uma vertente itinerante, ministrando em igrejas com adoração e palavra.',
            date: '2013'
        },
        {
            id:3,
            title:'Livros',
            desc:'É desperto no coração dos futuros pastores, Thiago e Giu, o desejo de aberçoar as igrejas compondo literatuas. Nasce, então, o primeiro livro entitulado "Ouvir e Obedecer". Nos 4 anos seguintes foram escritos mais 4 livros com autoria dos pastores.',
            date: '2014'
        },
        {
            id:4,
            title:'C.A.S.A',
            desc:'Nasce no coração dos futuros pastores um profundo desejo de fazer algo além da adoração. Nasce uma semente chamada C.A.S.A: Centro de Alinhamento Social e Avivamento',
            date: '2015'
        },
        {
            id:5,
            title:'Conferência Ação do Espírito',
            desc:'É realizada a primeira conferência Ação do Espírito, como mais uma vertente do ministério.',
            date: '2016'
        },
        {
            id:6,
            title:'Evangelismos',
            desc:'Forma iniciadas várias iniciativas de evangelismo: em ruas, praças, escolas e através da Conferências Pocket.',
            date: '2017 - 2018'
        },
        {
            id:7,
            title:'Nasce a Casa Ação',
            desc:'A semente de 5 anos atrás florece. É dado início ao projeto social "Casa Ação" com o objetivo de acolher jovens que atingem a maior-idade, sendo duporte para toda a Curitiba e Região metropolitana.',
            date: '2020 - Hoje'
        },
        {
            id:8,
            title:'Igreja Ação do Espírito',
            desc:'Em meio aos atendimentos com os jovens do projeto social, é criada a primeira célula Ação do Espírito que, alguns meses depois, viria a formar a Igreja Ação do Espírito.',
            date: '2021 - Hoje'
        }
    ];

    return (
        <div className='section nh-content'>
            <h3>NOSSA HISTÓRIA</h3>
            <TimeLine events={timeMarks} hideIcon={true} hideLegend={true}/>
            <legend>❤️‍🔥<br/>Você está aqui!</legend>
        </div>
    );
}

export default NossaHistoriaPage;