<template>
  <div class="sorted">
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
</template>

<script>
export default {
  data(){
    return{
        selectedSortOption: 'default',
    }
  },
  watch:{
    selectedSortOption(newValue) {
      this.$emit('switchSort', newValue)
    },
  }
}

</script>

<style>

</style>