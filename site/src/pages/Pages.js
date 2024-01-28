import Page from "../components/Page/Page";
import AcaoEmAcaoPage from "./AcaoEmAcao/AcaoEmAcaoPage";
import CasaAcaoPage from "./CasaAcao/CasaAcaoPage";
import Conferencias from "./Conferencias/Conferencias";
import EquipePage from "./Equipe/EquipePage";
import EvangelismosPage from "./Evangelismos/EvangelismosPage";
import HomePage from "./Home/HomePage";
import LivrosPage from "./Livros/LivrosPage";
import VideosPage from "./Videos/VideosPage";
import NotFoundPage from './NotFund/NotFoundPage'
import Inscrevase from "./Inscrevase/InscrevasePage";
import NossaHistoriaPage from "./NossaHistoriaPage/NossaHistoriaPage";
import DesejoFazerPartePage from "./DesejoFazerParte/DesejoFazerPartePage";
import JesusTeAma from "./JesusTeAma/JesusTeAma";

export const Pages = [
    {
        id: 0,
        path: '/',
        menuName: 'Home',
        component: <Page title='Home' content={<HomePage />}/>
    },
    {
        id: 1,
        path: '/casa-acao',
        menuName: 'Casa Ação',
        component: <Page title='Casa Ação' content={<CasaAcaoPage />} hideMainFooter={true}/>
    },
    {
        id: 2,
        path: '/conferencias',
        menuName: 'Conferências',
        component: <Page title='Conferências' content={<Conferencias />}/>
    },
    {
        id: 3,
        path: '/acao-em-acao',
        menuName: 'AÇÃO EM AÇÃO',
        component: <Page title='Ação em Ação' content={<AcaoEmAcaoPage />} />
    },
    {
        id: 4,
        path: '/evangelismos',
        component: <Page title='Evangelismos' content={<EvangelismosPage />} />
    },
    {
        id: 5,
        path: '/videos',
        menuName: 'Vídeos',
        component: <Page title='Vídeos' content={<VideosPage />} />
    },
    {
        id: 6,
        path: '/livros',
        menuName: 'Livros',
        component: <Page title='Livros' content={<LivrosPage />} />
    },
    {
        id: 7,
        path: '/inscreva-se',
        menuName: 'Inscreva-se',
        component: <Page title='Inscreva-se' content={<Inscrevase />} />
    },
    {
        id: 8,
        path: '/nossa-historia',
        menuName: 'Nossa História',
        component: <Page title='Nossa História' content={<NossaHistoriaPage />} />
    },
    {
        id: 9,
        path: '/quero-fazer-parte',
        menuName: 'Quero Fazer Parte',
        component: <Page title='Quero Fazer Parte' content={<DesejoFazerPartePage />} />
    },
    {
        id: 10,
        path: '/equipe',
        menuName: 'Equipe',
        hideOnMenu: true,
        component: <Page title='Equipe' hideMainFooter={true} content={<EquipePage />}/>
    },
    {
        id: 11,
        path: '/blank',
        menuName: '?',
        hideOnMenu: false,
        component: <Page title='?' content={<JesusTeAma />}/>
    },
    {
        id:50,
        path: '*',
        menuName: 'not-found',
        component: <Page title='Ops! Não tem nada aqui ainda...'
                        content={<NotFoundPage />}/>
    }
];