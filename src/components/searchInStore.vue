<template>
  <form class="d-flex search mt-2">
        <input class="form-control me-2" v-model="input">
        <button class="btn btn-outline-secondary" type="button" id="btnSearch">Поиск</button>
   </form>
</template>

<script>
export default {
  data(){
    return{
        input: '',
    }
  },
  watch:{
    input(newValue) {
      this.$emit('search', newValue)
    },
  }
}
</script>

<style>

</style>