<template>
    <div class="otDoPrice d-flex flex-column" >
        <div>
          <span>Минимальная цена: <span v-if="!ot">0</span><span v-if="ot">{{ot}}</span></span>
          <div class="d-flex mt-2 ">
            <p>От</p>
            <input type="range" class="form-range" min="0" :max="max" step="1" @input="otHandler"  v-model="ot" >
          </div>
        </div>
        <div>
          <span>Максимальная цена: <span v-if="!doT">0</span><span v-if="doT">{{doT}}</span></span>
          <div class="d-flex mt-2 ">
            <p>От</p>
            <input type="range" class="form-range" min="0" :max="max+1" step="1" @input="doHandler"  v-model="doT">
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
    data(){
      return{
        ot: '0',
        max: this.products.reduce((max, product) => (product.price > max ? product.price : max), 0),
        doT: `${this.products.reduce((max, product) => (product.price > max ? product.price : max), 0)}`,
      }
    },
    methods:{
      doHandler(event){
        this.$emit('do', event.target.value)
      },
      otHandler(event){
        this.$emit('ot', event.target.value)
      }
    },
  }
</script>
<style>
  
.otDoPrice p{
    width: 30px;
}
.otDoPrice input{
    height: 30px;
}
</style>