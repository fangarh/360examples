import { MyTreeItem } from "./my_tree_item";
import { MyTreeDataProvider } from "./tree_data_provider";

const json: MyTreeItem[] =[
  {
    "id": "1",
    "myname": "Root",
    "children": [
      {
        "id": "1.1",
        "myname": "Child"
      },
      {
        "id": "1.2",
        "myname": "Child 2"
      },
    ]
  },
  {
    "id": "2",
    "myname": "Root v2",
    "children": [
      {
        "id": "2.1",
        "myname": "Child v2"
      },
      {
        "id": "2.2",
        "myname": "Child v2 2"
      },
    ]
  }
]

export default {
    example_cmd: async (e: Context) => {
        console.log("!!")
    },
    build_tree: (e: Context): TreeViewOptions<TreeItem> =>{
        return {
            treeDataProvider: new MyTreeDataProvider(json)
        };
    },
}
