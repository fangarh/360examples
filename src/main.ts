export default {
        ex_text_cmd: async (e: Context) => {
        const cadViewContext = e.cadview;

        if (!cadViewContext) {
            console.error('CadViewContext is not available.');
            return;
        }

        const drawing = cadViewContext!.layer.drawing!.layout.drawing!;
        const editor = drawing.layouts.model!.editor();
        
        const point1 = await cadViewContext.getpoint("Выберите первую точку") as vec3;
        
        //const point2 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;
        await editor.beginEdit();

        const textData: Partial<DwgTextData> = {
                            color: 1, // Цвет в формате CAD
                            position: point1,
                            content:"command test",
                            rotation: 180,
                            oblique: 100,
                            height: 2      
                        };

        await editor.addText(textData)

        await editor.endEdit();
    },
    ex_circle_cmd: async (e: Context) => {
        const cadViewContext = e.cadview;

        if (!cadViewContext) {
            console.error('CadViewContext is not available.');
            return;
        }

        const drawing = cadViewContext!.layer.drawing!.layout.drawing!;
        const editor = drawing.layouts.model!.editor();
        

        const point1 = await cadViewContext.getpoint("Выберите первую точку") as vec3;
        
        //const point2 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;
        await editor.beginEdit();

        const circleData: Partial<DwgCircleData> = {
                            color: 1, // Цвет в формате CAD
                            center: point1,
                            radius:25     
                        };

        await editor.addCircle(circleData)

        await editor.endEdit();
    },    
    ex_line_cmd: async (e: Context) => {
        const cadViewContext = e.cadview;

        if (!cadViewContext) {
            console.error('CadViewContext is not available.');
            return;
        }

        const drawing = cadViewContext!.layer.drawing!.layout.drawing!;
        const editor = drawing.layouts.model!.editor();
        

        const point1 = await cadViewContext.getpoint("Выберите первую точку") as vec3;
        const point2 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;
        await editor.beginEdit();

        const lineData: Partial<DwgLineData> = {
                            color: 1, // Цвет в формате CAD
                            a:  point1, // Начало отрезка
                            b:  point2 // Окончание отрезка               
                        };

        await editor.addLine(lineData)

        await editor.endEdit();
    },
    ex_polyline_cmd: async (e: Context) => {
        const cadViewContext = e.cadview;

        if (!cadViewContext) {
            console.error('CadViewContext is not available.');
            return;
        }

        const point1 = await cadViewContext.getpoint("Выберите первую точку") as vec3;
        const point2 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;
        const point3 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;
        const point4 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;

        const drawing = cadViewContext!.layer.drawing!.layout.drawing!;
        const editor = drawing.layouts.model!.editor();
        
        await editor.beginEdit();

        const lineData: Partial<DwgPolylineData> = {              
                color: 1,             
                vertices:  [point1, point2, point3, point4], // Начало отрезка
                width: 2,
                flags: 0x1       
            };

        await editor.addPolyline(lineData)

        await editor.endEdit();
    },
    ex_solid_cmd: async (e: Context) => {
        const cadViewContext = e.cadview;

        if (!cadViewContext) {
            console.error('CadViewContext is not available.');
            return;
        }

        const point1 = await cadViewContext.getpoint("Выберите первую точку") as vec3;
        const point2 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;
        const point3 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;
        const point4 = await cadViewContext.getpoint("Выберите вторую точку") as vec3;

        const drawing = cadViewContext!.layer.drawing!.layout.drawing!;
        const editor = drawing.layouts.model!.editor();
        
        await editor.beginEdit();

        const lineData: Partial<DwgSolidData> = {
                           
                            a:  point1, // Начало отрезка
                            b:  point2, // Окончание отрезка
                            c: point3,
                            d: point4               
                        };

        await editor.addSolid(lineData)

        await editor.endEdit();
    },
}
