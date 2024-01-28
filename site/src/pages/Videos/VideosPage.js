import './VideosPage.css'

const VideosPage = () => {
    return (
        <div className='videos-content'>
            <div className='section row'>
                <div className='col playlist'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL1mvKPFt_iEHPzYEpOZdi7JOjNR-1Ljem" title="YT Músicas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className='section row'>
                <div className='col playlist'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL1mvKPFt_iEG-jSmdcDDi6BTyggulKlU4" title="YT Mensagens" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>    

            <div className='section row'>
                <div className='col playlist'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL1mvKPFt_iEGh5Pc8XZDbjOeVDIXuDdhW" title="YT Mensagens Curtas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>        
        </div>
    );
}

export default VideosPage;