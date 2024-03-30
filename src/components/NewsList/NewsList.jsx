export const NewsList = (props) => {
    const { items } = props;

    const news = items.map(function(item) {
        return <div key={item.id}><img className="mr-2" src={item.img}/><a href={item.link}>{item.title}</a></div>
     });

    // Здесь можно сделать компонент Новость, т.е. NewsList выводит список элементов News

    return (
        <>{news}</>
    )
}
