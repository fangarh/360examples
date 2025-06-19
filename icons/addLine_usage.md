# Использование метода `addLine` класса `Drawing`

Метод `addLine` используется для добавления линии в чертёж. Он определён в классе `Drawing`.

## Сигнатура метода

```ts
addLine(data: Partial<DwgLineData>): Promise<DwgLine>;
```

### Параметры

- **data** – объект типа `DwgLineData`, описывающий параметры линии.

---

# Описание интерфейса `DwgLineData`

Интерфейс `DwgLineData` описывает параметры линии, включая координаты и стилизацию.

```ts

```

---

# Пример использования

```ts
const drawing = new Drawing();

const lineData: DwgLineData = {
  startX: 0,
  startY: 0,
  endX: 100,
  endY: 100,
  color: "#FF0000",
  layer: "Layer1",
  lineType: "Continuous",
  lineWeight: 0.5
};

drawing.addLine(lineData);
```
