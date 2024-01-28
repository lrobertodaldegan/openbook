import ToTopButton from "../ToTopButton/ToTopButton";
import Footer from "../Footer/Footer";
import MainMenu from "../MainMenu/MainMenu";
import { useEffect } from "react";

const Page = (props) => {
    useEffect(() => {
        let newTitle = 'Ação do Espírito';

        if(props.title)
            newTitle = `${props.title} | ${newTitle}`;

        document.title = newTitle;
      });

    const getContent = () => {
        let content = [];

        if(props.hideMainMenu !== true)
            content.push(<MainMenu key='mainmenu'/>);
        
        let wrap = <div className="content" key='content'></div>;

        if(props.content)
            wrap = <div className="content" key='content'>{props.content}</div>;
        
        content.push(wrap);

        if(props.hideMainFooter !== true)
            content.push(<Footer key='footer'/>);

        content.push(<ToTopButton key='toTopBtn'/>);

        return content;
    }

    return (
        <>
            {getContent().map(e => e)}
        </>
    );
}

export default Page;