<template>
  <div class="point-display">
    <h2>Координаты точки</h2>
    <div class="coordinates">
      <p>X: {{ x }}</p>
      <p>Y: {{ y }}</p>
      <p>Z: {{ z }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PointDisplay',
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    z: {
      type: Number,
      required: true
    }
  }
});
</script>

<style scoped>
.point-display {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}
.coordinates {
  margin-top: 20px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
}
</style>
