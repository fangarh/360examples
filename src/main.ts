export default {
    example_select_point: async (e: Context) => {
        // Получение CadView контекста из контекста
        const cadViewContext = e.cadview;

        if (!cadViewContext) {
            console.error('CadViewContext is not available.');
            return;
        }

        // Запрашиваем ввод точки на экране
        var point = await cadViewContext.getpoint("Выберите точку на модели");

        // Выводим координаты точки в консоль
        console.log(point)
    },

    example_select_element: async (e: Context) => {
        // Получение CadView контекста из контекста
        const cadViewContext = e.cadview;

        if (!cadViewContext) {
            console.error('CadViewContext is not available.');
            return [];
        }

        // Запрос выбора геометрического объекта на модели
        var obj = await cadViewContext.getobject("Выберите объект")

        // Создаем панель пользовательского вывода 
        var chanel = e.createOutputChannel("Выделение")
        
        // Выводим выбранный id выбранного объекта в панель пользовательского вывода
        chanel.appendLine(obj.value.$id)

        // Выводим координаты точки клика при выборе объекта в панель пользовательского вывода
        chanel.appendLine(obj.position)
    },
    example_multiselect_element: async (e: Context) => {
        // Получение CadView контекста из контекста
        const cadViewContext = e.cadview;

        if (!cadViewContext) {
            console.error('CadViewContext is not available.');
            return [];
        }
                  
        // Получаем основной слой
        const layer = cadViewContext.layer;
    
        if (!layer) {
            console.error('Layer is not available.');
            return;
        }

        // Создаем панель пользовательского вывода 
        var chanel = e.createOutputChannel("Выделение")

        // Переменная для записи выбора
        var obj : any;
        
        // Создаем диалоговое окно для управления выбором
        const subMenuu:AlternativeCommands = {
            "end":"Завершить выбор", 
            "all":"Выбрать все"
        };
        
        while(true){
            // Запрашиваем выбор у пользователя
            obj = await cadViewContext.getobject("Выберите объект", subMenuu, (obj) => isDwgEntity(obj));
                
            chanel.appendLine("Выбрано: " + obj)
            
            // Выбран пункт меню "Выбрать все"
            if(obj == "all"){
                // Выделяем все элементы модели удавлетвряющие проверкам функции isDwgEntity (данный параметр не обязательный)
                await layer.selectObjects(obj => isDwgEntity(obj), true);

                // Получаем список всех выделенных объектов модели, записываем их в коллекцию 
                var selectedObjects = Array.from(layer.selectedObjects()).map(obj => obj as DwgModel3d);
                    
                chanel.appendLine("Выбраны все объекты, всего: " + selectedObjects.length) 
            }
            
            // Выбран пункт меню "Завершить выбор"
            if(obj == "end"){
                    return;
            }                

            // Выбран объект модели, получаем этот объект
            var model = obj.value as DwgModel3d;
            chanel.appendLine("Выбран объект: " + model.$id)           
        }
    }
}

// Вспомогательная функция для фильтра выбора объектов
function isDwgEntity (entity:DwgEntity):boolean{
    return 'meshes' in entity && entity.meshes !== undefined;
}
