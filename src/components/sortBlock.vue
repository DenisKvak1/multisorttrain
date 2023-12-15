<template>
  <div class="blockSort">
    <searchInStore  @search="(Value)=>this.$emit('search', Value)"></searchInStore>
    <filterOtDo @ot="(Value)=>this.$emit('ot', Value)" @do="(Value)=>this.$emit('do', Value)" :products="products"></filterOtDo>
    <sortByPriceVue class="mt-2" @switchSort="(Value)=>this.$emit('switchSort', Value)"></sortByPriceVue>
  </div>
  

</template>

<script>
import sortByPriceVue from './sortByPrice.vue'
import searchInStore from './searchInStore.vue'
import filterOtDo from './filterOtDo.vue'
export default {
  components:{
    sortByPriceVue,searchInStore, filterOtDo
  },
  props:{
    products:{
      type: Array,
    }
  },
}
</script>

<style scoped>
.blockSort{
    padding: 10px;
    width: 100%;
    height: 560px;
    background-color: rgba(190, 183, 255, 0.055);
    border-radius: 10px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media (max-width: 1240px){
  .blockSort{
    height: 300px;
  }
}

</style>