<template>
  <form class="d-flex search mt-2">
        <input class="form-control me-2" @input="inputHandler">
        <button class="btn btn-outline-secondary" type="button">Поиск</button>
   </form>
</template>

<script>
export default {
  methods:{
    inputHandler(event){
      this.$emit('search', event.target.value)
    }
  },
}
</script>

<style>

</style>