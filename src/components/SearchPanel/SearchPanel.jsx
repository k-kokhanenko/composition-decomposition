import { MenuList } from '../MenuList/MenuList';
import { PopularRequest } from './PopularRequest';
import { SearchForm } from './SearchForm';

// Компонент занимается выводом панели поиска
// Использует компонент MenuList, 
export const SearchPanel = (props) => {
    const {menu} = props;
    const title = "Популярная поисковая фраза";
    return (
        <>
            <div><MenuList items={menu}/></div>
            <div><SearchForm/></div>
            <div><PopularRequest title={title}/></div>
        </>
    )
}
