
import { Image } from '../Image';

export const WidgetWork = (props) => {
    const {params} = props;
    // !!! Для вывода изображения можно использовать компонент Image с каким-то доп типом и параметрами
//<div>{params.img}</div>          
    return (
        <>
            <div className="box">                      
                <div><Image params={params.img}/></div> 
                <div>
                    <a href={params.link}>{params.linkTitle}</a>
                </div>
                <div>{params.title}</div>
            </div>
        </>
    )
}
