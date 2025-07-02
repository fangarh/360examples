import type { TreeDataProvider, TreeView } from 'albatros';
import { MyTreeItem } from './my_tree_item';

export class MyTreeDataProvider implements TreeDataProvider<MyTreeItem> {
    private readonly treeMap = new Map<string, MyTreeItem[]>();
    private readonly itemMap = new Map<string, MyTreeItem>();

    constructor(json: MyTreeItem[]) {
        this.buildIndex(json);
    }

    private buildIndex(items: MyTreeItem[], parentId: string | null = null): void {
        const key = parentId ?? 'root';
        if (!this.treeMap.has(key)) this.treeMap.set(key, []);
        const siblings = this.treeMap.get(key)!;

        for (const item of items) {
            siblings.push(item);
            this.itemMap.set(item.id, item);
            if (item.children?.length) {
                this.buildIndex(item.children, item.id);
            }
        }
    }

    getChildren(element: TreeItem | undefined, treeview: TreeView<TreeItem>): TreeItem[] {
        const parentId = element?.id ?? 'root';
        const children = this.treeMap.get(parentId) ?? [];
        return children.map(child => this.toTreeItem(child));
    }

    hasChildren(element: TreeItem, treeview: TreeView<TreeItem>): boolean {
        return (this.treeMap.get(element.id)?.length ?? 0) > 0;
    }

    private toTreeItem(data: MyTreeItem): TreeItem {
        return {
            id: data.id,
            label: data.myname
        };
    }
}