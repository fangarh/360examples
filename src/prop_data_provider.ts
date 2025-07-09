import type {
    PropertyProvider,
    PropertyItem,
    PropertyEditorEditbox,
    PropertyEditorDropdown,
    TreeItem,
    TreeView
} from 'albatros';

import type { MyPropertyItem } from './my_prop_item';


export class MyPropertyProvider implements PropertyProvider {
private currentValues = new Map<string, string>();

    constructor(private readonly items: MyPropertyItem[]) {
        for (const item of items) {
            this.currentValues.set(item.id, item.value);
        }
    }

    getProperties(): PropertyItem[] {
        const currentValues = this.currentValues;

        return this.items.map(item => {
            const property: PropertyItem = {
                id: item.id,
                label: item.label,
                description: item.description,
                value: () => ({
                    label: currentValues.get(item.id) ?? ''
                })
            };         
            
            if (item.editable) {
                property.editor = (): PropertyEditorEditbox => ({
                    type: 'editbox',
                    value: currentValues.get(item.id) ?? '',
                    placeholder: 'Введите значение',
                    commit(value?: string) {
                        currentValues.set(item.id, value ?? '');
                    }
                });
            }

            if (item.options?.length) {
                property.editor = (): PropertyEditorDropdown<TreeItem> => ({
                    type: 'dropdown',
                    provider: (treeview: TreeView, commit: any) => {
                        treeview.onDidChangeActive ((event:any)=> {
                            const selected = event.element?.id;
                            if (selected) {
                                currentValues.set(item.id, selected);  // обновим значение

                                commit(); // обновим UI
                            }
                        })
                        return {
                            treeDataProvider: {
                                getChildren: () => {
                                    return item.options!.map(opt => ({
                                        id: opt,
                                        label: opt,                                        
                                    }));
                                },
                                hasChildren: () => false
                            }
                        };
                    }
                });
            }

            return property;
        });
    }

        keys(): undefined {
        return undefined;
    }
}