import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { BooksMock } from '../../mocks/BooksMock';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import pixQrCode from '../../assets/img/qrcode_pix_casaacao.png';
import './LivrosPage.css';

const LivrosPage = () => {
    const [books, setBooks] = useState([]);
    const [showOfferModal, setShowOfferModal] = useState(false);

    useEffect(() => {
        setBooks(BooksMock);
    }, []);

    const openDownloadTab = (file) => {
        window.open(file, '_blank').focus();
    }

    const getContent = () => {
        let content = [];

        let itensByRow = 3;
        let start = 0;
        let repeats = Math.floor(books.length / itensByRow) + 1;
    
        let b = books.slice(start, itensByRow);
    
        for(let c=0; c < repeats; c++){
            let divs = b.map(book => {
                return (
                    <div key={book.id} className='col livros-download'>
                        <img alt={book.name} 
                            src={book.img}
                            title={book.name} 
                            onClick={() => setShowOfferModal(true)}/>
                        <br/>
                        <legend>{book.name}</legend>
                        <SecondaryButton label='Download'
                                            style={{margin:10}} 
                                            action={() => openDownloadTab(book.content)}/>
                        <br/>
                        <SecondaryButton label='Ofertar' 
                                            action={() => setShowOfferModal(true)}/>
                    </div>
                );
            });
    
            content.push(divs);
            
            b = books.slice(start + itensByRow, itensByRow + itensByRow);
        }

        return content;
    }

    return (
        <div className='livros-content'>
            <div className='section'>
                <div className='row livros-premsg'>
                    <div className='col'>
                        <p>Baixe gratuitamente um de nossos e-books ou nos oferte um valor.<br/><br/>Ofertando via PIX você abençoa o nosso ministério e faz com que essa mensagem chegue mais longe.</p>
                    </div>
                </div>

                {getContent().map((bookWrap, index) => {
                    return ( 
                        <div key={index} className='row livros-download-wrap'>
                            {bookWrap}
                        </div>
                    );
                })}
            </div>

            <Modal key='offerModal' 
                    show={showOfferModal}
                    closeAction={() => setShowOfferModal(!showOfferModal)}
                    content={(
                        <div className='row offer-modal-wrap'>
                            <div className='col offer-modal-desc'>
                                <p><b>Obrigado!</b><br/> Ofertando via PIX você abençoa o nosso ministério e faz com que essa mensagem chegue mais longe!</p>
                                <img alt='PIX' src={pixQrCode}/>
                                <legend>❤️‍🔥<br/>Deus te abençoe e que você seja cheio do Espírito Santo!<br/>Chave PIX: CNPJ: 46153944000108</legend>
                            </div>
                        </div>
                    )}
            />
        </div>
    );
}

export default LivrosPage;