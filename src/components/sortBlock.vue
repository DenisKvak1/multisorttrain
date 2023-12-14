<template>
  <div class="test">
    <form class="d-flex search mt-2">
        <input class="form-control me-2" placeholder="Search" id="SearchInput" v-model="input">
        <button class="btn btn-outline-success" type="button" id="btnSearch">Поиск</button>
    </form>
    <div class="otDoPrice">
        <div class="d-flex mt-2">
            <h4>От</h4>
            <input type="number" class="form-control" v-model="ot">
        </div>
        <div class="d-flex mt-2">
            <h4>До</h4>
            <input type="number" class="form-control" v-model="doT">
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
    data() {
    return {
      selectedSortOption: 'default',
      input: '',
      ot: '',
      doT: ''
    };
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
    }
}
}
</script>

<style scoped>
.test{
    padding: 10px;
    width: 100%;
    height: 800px;
    background-color: rgba(91, 190, 236, 0.253);
    border-radius: 10px;
}
.otDoPrice h4{
    width: 40px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>