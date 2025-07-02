import type { ListDataProvider, ListItem } from 'albatros';
import type { MyListItem } from './my_list_item';

export class MyListDataProvider implements ListDataProvider<ListItem> {
    constructor(private readonly items: MyListItem[]) {}

    async getCount(): Promise<number> {
        return this.items.length;
    }

    async getItem(index: number): Promise<ListItem> {
        const item = this.items[index];
        return {
            label: item.name,
            description: item.description,
            contextValue: 'mylistitem'
        };
    }

}