import { MyPropertyItem } from "./my_prop_item";
import { MyPropertyProvider } from "./prop_data_provider";


const json: MyPropertyItem[] = [
    {
        id: 'name',
        label: 'Название',
        value: 'Объект A',
        editable: true
    },
    {
        id: 'type',
        label: 'Тип объекта',
        value: 'Тип 2',
        options: ['Тип 1', 'Тип 2', 'Тип 3', 'Тип 4']
    }
];

export default {
    build_prop: (e: Context): PropertyOptions =>{
        return {
            propertyProvider: new MyPropertyProvider(json),
            showDescriptions: true
        };
    }
}
