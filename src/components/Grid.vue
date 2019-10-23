<style scoped lang="stylus">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
}

.column {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: blue;
  width: 100px;
  height: @width;
  color: white;
  font-size: @width * 0.5;
}
</style>

<template>
  <div class="container">
    <div v-for="(row,rowIndex) in grid" :key="rowIndex" class="row">
      <button
        @click="$emit('click',rowIndex, colIndex)"
        v-for="(col, colIndex) in row"
        :key="colIndex"
        class="column"
      >{{col}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Grid",
  props: {
    grid: Array
  }
});
</script>


