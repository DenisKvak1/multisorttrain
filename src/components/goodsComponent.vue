<template>
    <div class="goods">
        <componentStore :dataCard="card" v-for="card in dataCard" :key="card.id"></componentStore>
    </div>
</template>

<script>
import componentStore from './componentStore.vue';
export default {
    components:{
        componentStore 
    },
    props:{
        dataCard:{
            type: Array,
            required:true
        }
    }
}
</script>

<style>
.goods{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 15px;
}
@media (max-width: 768px){
  .goods{
    grid-template-columns: repeat(2,1fr);
  }
}
@media (max-width: 540px){
  .goods{
    grid-template-columns: repeat(1,1fr);
  }
}
</style>