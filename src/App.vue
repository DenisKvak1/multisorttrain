<template>
  <div class="container">
    <TitleStore class="title"></TitleStore>
    <div class="store">
      <sortBlock class="sort" @switchSort="switchSortHandler" @search="searchHandler" @ot="otHandler" @do="doHandler"></sortBlock>
      <goodsComponent class="goods" :dataCard="sortFilterSearch"></goodsComponent>
    </div>
  </div>
</template>

<script>
import TitleStore from '@/components/TitleStore.vue';
import goodsComponent from '@/components/goodsComponent.vue';
import sortBlock from './components/sortBlock.vue';
export default {
  components:{
    TitleStore, goodsComponent,sortBlock
  },
  data(){
    return{
      products: null,
      state:{
        ot:0,
        do: null,
        sortBy: "default",
        search: null
      }
    }
  },
  mounted(){
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        this.products = await response.json();
      } catch (error) {
        this.error = `Fetch error: ${error.message}`;
        console.error('Fetch error:', error);
      }
    },
    searchHandler(data) {
      this.state.search = data;
    },
    switchSortHandler(data) {
      this.state.sortBy = data;
    },
    otHandler(data) {
      this.state.ot = data;
    },
    doHandler(data) {
      this.state.do = data;
    },
    mySort(data, sortBy){
      switch(sortBy){
        case 'ascending': 
          return [...data].sort((a, b) => a.price - b.price)
        case 'descending': 
          return [...data].sort((a, b) => b.price - a.price)
        case 'default': 
          return data
      }
    },
    search(data, prefix){
      if(!prefix){
        return data
      }
      return data ? data.filter(product => product.title.toLowerCase().startsWith(prefix.toLowerCase())) : null
    },
    otFilter(data, ot){
      if(!ot){
        return data
      }
      return data.filter(item=>item.price>ot)
    },
    doFilter(data, doT){
      if(!doT){
        return data
      }
      return data.filter(item=>item.price<doT)
    }
  },
  computed: {
    sortFilterSearch() {
    const sortedProducts = this.mySort(this.products, this.state.sortBy);
    const searchedProducts = this.search(sortedProducts, this.state.search);
    const filteredOtProducts = this.otFilter(searchedProducts, this.state.ot);
    const filteredDoProducts = this.doFilter(filteredOtProducts, this.state.do);

    return filteredDoProducts;
}
}

}

</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
}
.container{
  padding: 0 50px;
  padding-bottom: 20px;
  background-color: rgba(194, 194, 194, 0.068);
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 80%;
  height: 100%;
  border-radius: 60px;
}
.title{
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.store{
  display: flex;
  gap: 20px;
  justify-content: center;
}
.goods{
  width: 80%;
}
.sort{
  width: 20%;
}
</style>