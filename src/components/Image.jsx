
// Компонент занимается выводом баннера
export const Image = (props) => {
    const {params} = props;

    if (params.type === 'banner') {
        return (
            <div className="box has-background-info">БАННЕР</div>
        )    
    } else 
    if (params.type === 'logo') {
        return (
            <div className="box has-background-success">ЛОГОТИП</div>
        )    
    } else 
    if (params.type === 'img') {
        return (
            <div className="box has-background-light">ИЗОББРАЖЕНИЕ</div>
        )    
    } else 
    {
        return (
            <div className="box"></div>
        )
    }
}
