<template>
  <div class="blockSort">
    <form class="d-flex search mt-2">
        <input class="form-control me-2" id="SearchInput" v-model="input">
        <button class="btn btn-outline-secondary" type="button" id="btnSearch">Поиск</button>
    </form>
    <div class="otDoPrice d-flex flex-column" >
      
        <div>
          <span>Минимальная цена: <span v-if="!ot">0</span><span v-if="ot">{{ot}}</span></span>
          <div class="d-flex mt-2 ">
            <p>От</p>
            <input type="range" class="form-range" min="0" :max="max" step="1"  v-model="ot" >
          </div>
        </div>
        <div>
          <span>Максимальная цена: <span v-if="!doT">0</span><span v-if="doT">{{doT}}</span></span>
          <div class="d-flex mt-2 ">
            <p>От</p>
            <input type="range" class="form-range" min="0" :max="max" step="1"  v-model="doT">
          </div>
        </div>
    </div>
    <div class="mt-2">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="defalutSort"
        value="default"
        v-model="selectedSortOption"
      >
      <label class="form-check-label" for="defalutSort">
        По умолчанию
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="byMaxSort"
        value="ascending"
        v-model="selectedSortOption"
      >
      <label class="form-check-label" for="byMaxSort">
        По возрастанию
      </label>
    </div>
    <div class="form-check">
    <input class="form-check-input" 
        type="radio" 
        name="flexRadioDefault" 
        id="byMinSort" 
        value="descending" 
        v-model="selectedSortOption">
    <label class="form-check-label" for="byMinSort">
        По убыванию
    </label>
</div>
  </div>
  
  </div>
</template>

<script>
export default {
  props:{
    products:{
      type: Array,
    }
  },
    data() {
    return {
      selectedSortOption: 'default',
      input: '',
      ot: '0',
      max: this.products.reduce((max, product) => (product.price > max ? product.price : max), 0),
      doT: `${this.products.reduce((max, product) => (product.price > max ? product.price : max), 0)}`,
    }
  },
  watch: {
    selectedSortOption(newValue) {
      this.$emit('switchSort', newValue)
    },
    input(newValue) {
      this.$emit('search', newValue)
    }
    ,
    ot(newValue) {
      this.$emit('ot', newValue)
    },
    doT(newValue) {
      this.$emit('do', newValue)
    },
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

.otDoPrice p{
    width: 30px;
}
.otDoPrice input{
    height: 30px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media (max-width: 1240px){
  .test{
    height: 300px;
  }
}

</style>