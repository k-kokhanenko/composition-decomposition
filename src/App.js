import './App.css';
import './css/bulma.css';

import { NewsList } from './components/NewsList/NewsList';
import { MenuList } from './components/MenuList/MenuList';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { WidgetWork } from './components/Widgets/WidgetWork';
import { Image } from './components/Image';

const news = [
  { id:'0', img: '123', title: 'Путин упростил получение автомобильных номеров', link: 'https://yandex.ru'},
  { id:'1', img: '123', title: 'Путин упростил получение автомобильных номеров', link: 'https://yandex.ru'},
  { id:'2', img: '123', title: 'Путин упростил получение автомобильных номеров', link: 'https://yandex.ru'},
  { id:'3', img: '123', title: 'Путин упростил получение автомобильных номеров', link: 'https://yandex.ru'},
  { id:'4', img: '123', title: 'Путин упростил получение автомобильных номеров', link: 'https://yandex.ru'},
];

const newsMenu = [
  { id: '', title: 'Сейчас в СМИ', link: ''},
  { id: '', title: 'в Германии', link: ''},
  { id: '', title: 'Рекомендуем', link: ''},
]
const searcPanelMenu = [
  { id: '', title: 'Видео', link: ''},
  { id: '', title: 'Картинки', link: ''},
  { id: '', title: 'Новости', link: ''},
]

const banner = { 
  type: 'banner', 
  /*какие-то доп параметры*/
};
const logo = { 
  type: 'logo', 
  /*какие-то доп параметры*/
};
const widgetWorkParams = {
    img: {
      type: 'img',
      /*какие-то доп параметры*/
    },
    link: '', 
    linkTitle: 'Работа над ошибками', 
    title: 'Смотрите на Яндексе и запоминайте'
};


// Можно сделать еще универсальный компонет для вывода списка
// параметры вывод в строку или в столбец
// а далее он выводит элементы меню, новостей и т.д.

function App() {
  return (
    <>
    <div className="container">
      <div className="columns">
        <div className="column is-one-fifth"></div>
        <div className="column">
          <div className="columns is-multiline">          
            <div className="column is-full"><MenuList items={newsMenu}/></div>          
            <div className="column is-full"><NewsList items={news}/></div>          
            <div className="column is-full">Данные фондового рынка (элемент список данных, отображение в строку)</div>                      
          </div>
        </div>
        <div className="column is-one-quarter"><WidgetWork params={widgetWorkParams}/></div>
      </div>  
      <div className="columns">
        <div className="column is-one-fifth"><Image params={logo}/></div>
        <div className="column is-full"><SearchPanel menu={searcPanelMenu}/></div>
      </div>  
      <div className="columns">
        <div className="column is-one-fifth"></div>
        <div className="column is-full">
            <Image params={banner}/>
        </div>
      </div>  

      <div className="columns">
        <div className="column is-one-fifth"></div>
        <div className="column is-full">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <div className="box">Виджет Погода (три колонки: компонент Image, компонент температура, компонент температура два с столбец)</div>
            </div>
            <div className="column is-one-third">
              <div className="box">Виджет Карта</div>
            </div>
            <div className="column is-one-third">
              <div className="box">Виджет Эфир (вывод списка элементов, Image, Название песни, УниверсальнаяСсылка)</div>
              </div>
            <div className="column is-one-third">
              <div className="box">Виджет Посещаемое</div>
              </div>
            <div className="column is-one-third">
              <div className="box">Виджет Телепрограмма ((вывод списка элементов, Время, Название передачи, УниверсальнаяСсылка (название канала))</div>
              </div>
          </div>
        </div>
      </div>  
    </div>      
    </>
  );
}

export default App;
