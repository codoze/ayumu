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
  font-size: @width*0.5
}
</style>

<template>
  <div class="container">
    <div v-for="row in grid" :key="row" class="row">
      <div v-for="col in row" :key="col" class="column">{{col}}</div>
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


