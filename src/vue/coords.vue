<template>
  <div class="point-display">
    <h2>Координаты выбранной точки</h2>
    <div class="coordinates">
      <p>
        X: {{ format(point[0]) }},
        Y: {{ format(point[1]) }},
        Z: {{ format(point[2]) }}
      </p>
    </div>
    <button @click="selectPoint">Выбрать точку</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

type vec3 = [number, number, number];
type Context = {
  cadview?: {
    getpoint: (prompt: string) => Promise<vec3>
  }
};

export default defineComponent({
  name: 'PointDisplay',
  props: {
    context: {
      type: Object as () => Context,
      required: true
    }
  },
  setup(props) {
    const point = ref<vec3>([0, 0, 0]);

    const selectPoint = async () => {
      const cadViewContext = props.context.cadview;
      if (!cadViewContext) {
        console.error("CadViewContext is not available.");
        return;
      }

      try {
        const selected = await cadViewContext.getpoint("Выберите точку на модели");
        point.value = selected;
      } catch (err) {
        console.error("Ошибка при выборе точки:", err);
      }
    };

    const format = (value: number): string => {
      return value.toFixed(2);
    };

    return {
      point,
      selectPoint,
      format
    };
  }
});
</script>

<style scoped>
.point-display {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2%;
  font-family: Arial, sans-serif;
  overflow: auto;
}

.coordinates {
  width: 100%;
  max-width: 400px;
  margin-top: 1rem;
  font-weight: 300;
  font-style: italic;
  color: white;
  background-color: black;
  padding: 1rem;
  border-radius: 6px;
  box-sizing: border-box;
  text-align: center;
  border: 4px solid #333;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
