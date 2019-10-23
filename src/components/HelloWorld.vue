<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Grid :grid="currentGrid"  @click="onClick"/>

    <button @click="simpleGrid">new grid</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import Grid from "./Grid.vue";



export default Vue.extend({
  name: "HelloWorld",
  components: { Grid },
  props: {
    msg: String
  },
  computed: mapGetters("gridModule", ["currentGrid"]),
  methods: {
    ...mapActions("gridModule", ["simpleGrid"]),
    onClick(rowIndex: number, colIndex: number) {
      console.log("pos: ", rowIndex, colIndex);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
