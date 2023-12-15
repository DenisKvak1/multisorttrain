<template>
  <div class="sorted">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="defalutSort"
        value="default"
        @input="switchHander"
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
        @input="switchHander"
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
        @input="switchHander">
    <label class="form-check-label" for="byMinSort">
        По убыванию
    </label>
  </div>
  </div>
</template>

<script>
export default {
  methods:{
    switchHander(event){
      this.$emit('switchSort', event.target.value)
    }
  },
}

</script>

<style>

</style>