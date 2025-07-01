export class TreeData implements TreeDataProvider<TreeItem>{
    onDidChangeTreeData?: EventHandler<string | void | string[] | null | undefined> | undefined;
    getChildren(element: TreeItem | undefined, treeview: TreeView<TreeItem>): ProviderResult<TreeItem[]> {
        throw new Error("Method not implemented.");
    }
    hasChildren(element: TreeItem, treeview: TreeView<TreeItem>): boolean {
        throw new Error("Method not implemented.");
    }
    resolveTreeItem?(element: TreeItem, treeview: TreeView<TreeItem>): void {
        throw new Error("Method not implemented.");
    }
    resolveParent?(id: string, treeview: TreeView<TreeItem>): ProviderResult<string | undefined> {
        throw new Error("Method not implemented.");
    }

}