import escudoFe from '../assets/img/livros/escudo-fe_edited.jpg'
import livroThiago from '../assets/img/livros/LIVRO_thiago.jpg'
import namesa from '../assets/img/livros/namesa.jpg'
import start from '../assets/img/livros/start.jpg'
import vivAlgoMaior from '../assets/img/livros/VivendoPorAlgoMaiorCapa.jpg'
import pdfEscudoFe from '../assets/livros/escudoFe.pdf'
import pdfNaMesa from '../assets/livros/naMesa.pdf'
import pdfOuvirObedecer from '../assets/livros/ouvirObedecer.pdf'
import pdfStart from '../assets/livros/start.pdf'
import pdfVivendoAlgoMaior from '../assets/livros/vivendoAlgoMaior.pdf'

export const BooksMock = [
    {
        id:0,
        img: escudoFe,
        name: 'Escudo da Fé',
        content:pdfEscudoFe
    },
    {
        id:1,
        img: livroThiago,
        name: 'Ouvir e Obedecer',
        content: pdfOuvirObedecer
    },
    {
        id:2,
        img: namesa,
        name: 'Na Mesa com o Senhor',
        content:pdfNaMesa
    },
    {
        id:3,
        img: start,
        name: 'Start',
        content:pdfStart
    },
    {
        id:4,
        img: vivAlgoMaior,
        name: 'Vivendo por algo Maior',
        content:pdfVivendoAlgoMaior
    },
];