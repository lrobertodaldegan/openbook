import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faInstagram
} from '@fortawesome/free-brands-svg-icons'
import thiago from '../../assets/img/banda/thiago_ae.jpg'
import giu from '../../assets/img/banda/giu_acao_edited.jpg'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
import './DesejoFazerPartePage.css'

const DesejoFazerPartePage = () => {
    return (
        <div className='section qfp-content'>
            <div className='row'>
                <div className='col'>
                    <h3>BEM-VINDO!</h3>
                    <p>Se você está aqui saiba que estamos felizes em compartilhar um pouco sobre quem somos e no que acreditamos. Antes de tomar essa decisão acreditamos ser importante conhecer mais alguns detalhes sobre nossa família e igreja.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <h3>NOSSOS PASTORES</h3>

                    <div className="row qfp-pastores">
                        <div className="col">
                            <img src={thiago} alt="Thiago Simeão"/>
                            <p>Thiago Simeão</p>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/thiago_simeao_ae/">
                                <FontAwesomeIcon icon={faInstagram} size='lg'/>
                            </a>
                        </div>
                        <div className="col">
                            <img src={giu} alt="Giu Simeão"/>
                            <p>Giulianna Simeão</p>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/giukurzlop/">
                                <FontAwesomeIcon icon={faInstagram} size='lg'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col qfp-desc'>
                    <p>Nesse documento queremos deixar clara nossa crença como igreja, nosso propósito e os princípios bíblicos que regem o nosso ideal como corpo de Cristo.</p>
                    <p className='qfp-citacao'>
                        "Não se embriaguem com vinho, pois ele os levará ao descontrole. Em vez disso, sejam cheios do Espírito, cantando salmos, hinos e cânticos espirituais entre si e louvando o Senhor de coração com música."<br/>Efésios 5:18-19
                    </p>
                    <p>
                        Esse texto norteia nossa chamada, ser cheio do Espírito Santo é o que define uma igreja que busca a presença de Deus, e a maneira como faremos isso é cantando salmos, cânticos espirituais entre o corpo de Cristo. Além da adoração cremos do poder transformador da palavra, tratando ela como o pão necessário para nosso alimento espiritual, sem ela, não há cânticos espirituais, decidimos como igreja ser uma igreja bíblica.
                    </p>
                    <p>
                        A igreja para nós tem algumas funções: viver em unidade como corpo, adorar ao Senhor, e pregar o evangelho. Nosso outro princípio esta relacionado a exatamente isso, o que você fará a partir do momento que é cheio do Espírito Santo? Você foi salvo e agora?
                    </p>
                    <p className='qfp-citacao'>
                        "Não podemos deixar de falar do que vimos e ouvimos!"<br/>Atos 4:20
                    </p>
                    <p>
                        Cremos que como igreja veremos milagres, sinais, avivamento, transformação social e com isso não podemos deixar de falar das coisas que temos visto, somos uma igreja que evangeliza, que deseja encontrar o perdido, pregando a tempo e a fora de tempo. Nossa igreja compreende que o chamado do Senhor esta descrito em Lucas 4:18, Tiago 1:27 e tendo isso como primícia iniciamos nossos cultos e célula juntamente com nosso projeto social (Casa Ação).
                    </p>
                    <h3>FUNDAMENTOS DA IGREJA</h3>
                    <p>
                        <b>Missão</b>: Ser uma igreja fortalecida pelo Espírito Santo, através da adoração, ensinamento das escrituras, oração e dons. Amar o próximo e cumprir o ide.
                        <br/><br/>
                        <b>Visão</b>: Efésios 5:18 nos diz para sermos cheios do Espírito Santo.
                        <br/><br/>
                        <b>Valores</b>: Crer nos princípios da escritura como única e verdadeira.
                    </p>
                    <h3>NOSSA ESTRUTURA</h3>
                    <p>
                        Para que nossa missão, visão e valores fluam de forma simples e eficaz na pregação do evangelho, acreditamos nos seguinte pilares:
                        <br/><br/>
                        1- Células (Ação House): Crescimento através do relacionamento;
                        <br/><br/>
                        2- Cultos Semanais de Domingo (Adoração, Palavra e Ofertas);
                        <br/><br/>
                        3- Sala de Oração (Adoração e Oração);
                        <br/><br/>
                        4- Evangelismo (Atos 4:20, Invasão);
                        <br/><br/>
                        5- Projeto Social (Casa Ação - republica para jovens que saem das casas lares);
                        <br/><br/>
                        6- Escola OpenBook (Escola bíblica e desenvolvimento simples a respeito da palavra);
                    </p>
                    <h3>IGREJA AÇÃO DO ESPÍRITO</h3>
                    <p>
                        A igreja é uma porta aberta para aqueles que desejam conhecer e serem transformados por Deus, um Deus de perto e não um Deus de longe, mas um Pai para todo aquele que precisa.
                        O processo da igreja consiste em: aceitar, batizar, discipular, ensinar e enviar.
                        <br/><br/>
                        Usamos o livro START - O Início da Mudança (Thiago e Giu Simeão) como forma de iniciar o discipulado.
                        <br/><br/>
                        <b>Comunhão</b>: Uma igreja família, uma igreja que busca os laços de comunhão e que em tudo vive em unidade para o crescimento e bom desenvolvimento do corpo.
                        <br/><br/>
                        <b>Sacramentos (Ceia, Batismo)</b>: Cremos no que o nosso Senhor Jesus nos deixou, a ceia do Senhor como lembrança do seu sacrifício. Cear com Ele para em comunhão estarmos ligados como igreja a esse corpo, onde Jesus é o cabeça.
                    </p>
                    <p className='qfp-citacao'>
                        "Porque cada vez que vocês comem desse pão e bebem desse cálice, anunciam a morte do Senhor até que ele venha."<br/>1 Coríntios 11:26
                    </p>
                    <p>
                        Batismo, conforme a bíblia nos ensina, aquele que crer e for batizado será salvo, assim como Jesus foi batizado por João Batista, cremos no evangelho que salva e batiza para modificação diante dos homens como confissão pública de escolha feita por Jesus.
                    </p>
                    <p className='qfp-citacao'>
                        "Quem crer e for batizado será salvo, mas quem se recusar a crer será condenado."<br/>Marcos 16:16
                    </p>
                    <p>
                        Para nós o batismo nas águas indica o arrependimento dos pecados, o velho homem é deixado para trás e uma nova vida se inicia a partir desse momento. Mesmo sem pecado, Jesus foi imerso nas águas para nos ensinar o princípio:
                    </p>
                    <p className='qfp-citacao'>
                        "Jesus foi da Galileia ao rio Jordão para que João o batizasse. João, porém, tentou impedi-lo. 'Eu é que preciso ser batizado pelo senhor'", disse ele. 'Então por que vem a mim?' Jesus respondeu: 'É necessário que seja assim, pois devemos fazer tudo que Deus requer.' E João concordou em batizá-lo. Depois do batismo, enquanto Jesus saía da água, o céu se abriu, e ele viu o Espírito de Deus descer como uma pomba e pousar sobre ele. E uma voz do céu disse: 'Este é meu filho amado, que me dá grande alegria'.<br/>Mateus 3:13-17
                    </p>
                    <h3>CRESCIMENTO</h3>
                    <p>
                        O homem pode trabalhar, mas quem dá o crescimento é o Senhor. Não queremos usar fermento do mundo para fazer crescer, entendemos que no descanso o Senhor trabalha para os seus. Isso não está anulando nenhuma fato de se eximir do trabalho. Sabemos que a seara é grande e é necessário que o Senhor levante os trabalhadores. Estamos dispostos e atentos para ouvir como faremos o crescimento do evangelho florescer. Cremos que quem está ligado na videira verdadeira dá bons frutos que provem da própria videira (Jesus).
                    </p>
                    <h3>EVANGELISMO</h3>
                    <p>
                        Jesus nos deixa um mandamento em Marcos: "Ide e pregai o evangelho a toda criatura" (Marcos 16:15), não foi opcional e muito menos seletivo a quem deveria fazer isso. Então, cremos que todo aquele que toma uma decisão de viver com Cristo está automaticamente "separado" para pregar o evangelho. A maneira como podemos fazer isso são diversas e não limitamos como o Senhor deseja fazer isso através da igreja, com estratégias e criatividade.
                    </p>
                    <h3>PALAVRA</h3>
                    <p>
                        Cremos na palavra como palavra de Deus por completo, absoluta e imutável (Tiago 1:17). Seus fundamentos são nossa base. O verbo que se fez carne era Jesus (João 1), e ele ainda continua sendo a palavra. Entendemos que a palavra é uma das maneiras que o Senhor fala com a sua igreja. Expressamos e dedicamos um tempo para a proclamação e exposição da palavra em nosso momento de cultuar. Acreditamos na palavra profética, na pregação e revelação através do Espírito Santo. Toda a escritura foi nos deixada para nosso conhecimento (2 Timóteo 3:16). Em Apocalipse 22 diz que essas palavras são fiéis e verdadeiras.
                    </p>
                    <h3>PROFECIA</h3>
                    <p>
                        Profetizar vem da palavra pregar, expor a palavra do próprio Deus. Acreditamos na palavra profética que deve ser julgada a partir da palavra de Deus. Aceitamos a palavra profética como verdadeira quando ela está pautada na palavra (bíblia).
                        <br/>
                        A profecia, no antigo testamento, estava ligada a aquilo que haveria de acontecer, por que o Espírito Santo não estava como consolador dentro do homem, então se levantava o profeta para profetizar o que havia de acontecer nos próximos dias. Já, no novo testamento, a palavra profética serve para confirmação daquilo que o Senhor está ministrando com cada um.
                    </p>
                    <h3>ENSINO</h3>
                    <p>
                        Em Oséias a palavra nos adverte a respeito da falta de conhecimento das escrituras. Em provérbios, nos ensina a buscarmos conhecimento, e não conhecimento humano, mas o que a bíblia tem para nos ensinar. Por isso cremos plenamente que uma igreja forte e estabelecida deve tratar o ensino da bíblia como algo primordial para a expansão do evangelho. Nessa linha de pensamento, vamos estabelecer escola que será como fonte de crescimento para o desenvolver bíblico de todos que ensinaram aprender mais a respeito das escrituras.
                    </p>
                    <h3>ADORAÇÃO / ORAÇÃO E INTERCESSÃO / JEJUM</h3>
                    <p>
                        Cremos que essas 3 áreas devem andar juntas no processo da igreja:<br/><br/>
                        <b>Adoração</b>: Fomos criados para conhecer o nosso criador. e, ao adorarmos, nos tornamos semelhantes a Ele. Cremos que a adoração nos leva a um nível mais alto quando se trata do relacionamento com o Senhor e cremos na transformação a partir dela. Os vinte e quatro anciões se prostram diante do Senhor e lançam as suas coroas em rendição total (Apocalipse 4:10). A adoração e devoção deve ser extrema a ponto de nos rendermos totalmente. Só assim seremos expostos diante do nosso Rei (Jesus). Adoramos de forma extravagante e devota por aquilo que Ele é, e louvamos a Ele pelo que têm feito.<br/><br/>
                        <b>Oração</b>: Está juntamente ligado nesse processo. Cremos no poder da oração, do jejum e da intercessão. A oração é intercessão como arma de guerra que o Senhor nos habilitou e nos ensinou em Mateus 6 para desfrutarmos do relacionamento com o Senhor em tudo que for feito.<br/><br/>
                        <b>Jejum</b>: Cremos no jejum, não como forma de barganharmos algo com Deus, mas cremos no jejum como maneira de matarmos a nossa carne e deixar que o espírito nos fortifique. Amamos ao Senhor e por isso jejuamos, por que queremos estar com o noivo.
                    </p>
                    <p className='qfp-citacao'>
                        "Jesus disse: (...) Por que haveria de jejuar se eles estão com o noivo? (...)"<br/>Mateus 9:15
                    </p>
                    <p>
                        Então jejuamos por que queremos estar com Ele. Temos saudade.<br/><br/>
                        <b>Adoração, oração, intercessão e jejum fazem parte da prática da igreja.</b>
                    </p>
                    <h3>DONS</h3>
                    <p>
                        Paulo nos ensina: "busque os melhores dons" (1 Coríntios 12:31). Cremos em todos os dons espirituais:<br/><br/>
                        - Revelação;<br/>
                        - Conhecimento;<br/>
                        - Discernimento de Espíritos;<br/>
                        - Fé;<br/>
                        - Milagres;<br/>
                        - Curas;<br/>
                        - Profecia;<br/>
                        - Variedade de línguas;<br/>
                        - Interpretação;<br/><br/>
                        Sem os dons a igreja não funciona. Uma igreja não funciona com o conhecimento do homem. Ela funciona por que o Espírito Santo nos deu as armas corretas para usar diante de toda a situação. Conforme a igreja é fortalecida, ela vai operando nos dons do espírito.
                    </p>
                    <p className='qfp-citacao'>
                        "A igreja deve ser um lugar onde todos possam ter a oportunidade de manifestar os seus dons."<br/>Livro Cartas a Igreja (Francis Chan)
                    </p>
                    <h3>BATISMO NO ESPÍRITO SANTO</h3>
                    <p> 
                        Não entendemos o batismo no Espírito Santo no simples fato de se manifestar com dons, mas pelo fato de primeiramente sermos batizados nas águas e o processo de morada do Espírito Santo nos selando o coração.
                    </p>
                    <p className='qfp-citacao'>
                        "Então aspergirei sobre vocês água pura, e ficarão limpos. Eu os purificarei de sua impureza e sua adoração a ídolos. Eu lhe darei um novo coração e colocarei em vocês um novo espírito. Removerei seu coração de pedra e lhes darei coração de carne. Porei dentro de vocês meu Espírito, para que sigam meus decretos e tenham o cuidado de obedecer a meus estatutos."<br/>Ezequiel 36:25-27
                    </p>
                    <p>
                        O processo começa nas águas, mas, diferente do antigo testamento, agora ele também colocará um coração novo , e além do coração novo Ele colocará o espírito em nós. Por isso cremos que algo que começa do lado de fora (o batismo nas águas), passa, então, a gerar uma vida no espírito, um batismo de fogo.
                    </p>
                    <p>
                        Em Atos 2 temos a primeira manifestação do batismo com fogo: Os discípulos, reunidos em oração, receberam o Espírito Santo e puderam então o manifestar falando em línguas. Ainda cremos que o mesmo espírito que estava em Jesus operando, continua a operar no meio da igreja.
                    </p>
                    <h3>DÍZIMOS E OFERTAS</h3>
                    <p>
                        Este tema é visto como um assunto delicado dentro da igreja. As vezes para os de dentro e muitas vezes pelos de fora. Assim como cremos nas escrituras como um todo, também cremos naquilo que ela fala a respeito dos dízimos e ofertas. Este não é apenas um andamento para o antigo testamento como muitos dizem, mas também é estabelecido no novo. Este assunto, para nós, não está ligado apenas no que diz respeito ao âmbito material, mas faz parte da nossa adoração ao Senhor. As primeiras ofertas descritas na bíblia são de Caim e Abel, e de um o Senhor se agradou e do outro não. Não estava ligado à quantidade, mas a disposição do coração de cada um em adoração.<br/><br/>
                        Cremos no dízimo como a décima parte de tudo aquilo que recebemos do Senhor, não pagamos o dízimo como uma dívida, mas entregamos ao Senhor aquilo que lhe pertence por direito. Com essa atitude estamos dizendo que não só os 10% queremos que o Senhor governe, mas tudo que eu tenho é teu.<br/><br/>
                        <b>O que é a oferta?</b><br/><br/>
                        É a nossa expressão de gratidão ao Senhor. Todos os cultos no antigo testamento eram regados de ofertas, ninguém se achegava diante da presença de Deus sem a sua oferta, entendendo esse princípio, agimos de forma que essa é a parte do nosso culto ao Senhor, dízimos e ofertas, não apenas no valor monetário, mas expressão de gratidão.
                    </p>
                    <h3>SOCIAL</h3>
                    <p>
                        Uma igreja viva é uma igreja que se movimenta. No livro de Tiago lemos a respeito das obras mortas, mas ele diz que o verdadeiro evangelho é cuidar dos órfãos e viúvas. Entendendo esse princípio, cremos em uma igreja ativa que além de pregar e adorar, também se levanta para a justiça social, não a nossa justiça, mas a justiça de Deus. Então, temos o projeto social <a target="_blank" rel="noreferrer" href="/casa-acao">CASA (Centro de Alinhamento Social e Avivamento)</a> que trabalha com jovens que são órfãos, trabalhando com eles a fé, trabalho e estudo.
                    </p>
                </div>
                <div className='row'>
                    <div className='col qfp-btn'>
                        <SecondaryButton label='❤️‍🔥 Quero fazer parte!' 
                                style={{height:'50px'}}
                                action={() => window.open('https://api.whatsapp.com/send/?phone=5541996051873&text=Quero%20fazer%20parte%20da%20igreja!', '_blank').focus()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesejoFazerPartePage;