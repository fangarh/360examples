import { MyListDataProvider } from "./list_data_provider";
import { MyListItem } from "./my_list_item";


const data: MyListItem[] = [
    { id: '1', name: 'Элемент 1', description: 'Описание 1' },
    { id: '2', name: 'Элемент 2', description: 'Описание 2' }
];

export default {
    build_list: (e: Context): ListViewOptions<ListItem> =>{
        const provider = new MyListDataProvider(data);

        return {
            listDataProvider: provider
        };
    }
}
