<template>
    <div style="font-family:Glyphicons Halflings">aaaa</div>
</template>

<script>
import * as axios from "axios";
import _ from "lodash";
import {cube} from "../../util/math";
export default {
  async created(){
    console.log("axios",axios);
    console.log("_",_.join);
    /* let { data } = await axios.get("menu");
    console.log(data); */
    console.log(cube);
    let {data} = await this.abc();
    console.log(data);
  },
  methods:{
    async abc(){
      return "10";
    }
  }
}
</script>

<style>

</style>
