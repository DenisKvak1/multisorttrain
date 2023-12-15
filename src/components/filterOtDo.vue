<template>
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
    watch:{
        ot(newValue) {
            this.$emit('ot', newValue)
        },
        doT(newValue) {
            this.$emit('do', newValue)
        },
    }
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