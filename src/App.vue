<script setup>
import { reactive, onMounted, computed, ref, watch } from 'vue'

import TitleStore from '@/components/TitleStore.vue'
import goodsComponent from '@/components/goodsComponent.vue'
import sortBlock from './components/sortBlock.vue'

import FetchData from '@/modules/FetchData.js'
import saveToLocalStorage from '@/modules/SaveToLocalStorage.js'

import mySort from '@/modules/DefaultSortPrice.js'
import search from '@/modules/BasicSeachItem.js'
import doFilter from '@/modules/doItemFilter.js'
import otFilter from '@/modules/otItemFilter.js'

let products = ref()
const state = reactive({
  ot: 0,
  do: null,
  sortBy: 'default',
  search: null
})

onMounted(() => {
  if (!products.value && localStorage.getItem('products')) {
    products.value = JSON.parse(localStorage.getItem('products'))
  } else {
    loadData()
  }
})
watch(
  products,
  (newValue) => {
    saveToLocalStorage('products', newValue)
  },
  { deep: true }
)

const loadData = async () => {
  try {
    products.value = await FetchData()
  } catch (error) {
    console.log('Ошибка загрузки данных:', error)
  }
}

function likeItemHandler(data) {
  let index = products.value.findIndex((item) => item.id === data.id)
  products.value[index].likeState = data.like
}

const sortFilterSearch = computed(() => {
  const sortedProducts = mySort(products.value, state.sortBy)
  const searchedProducts = search(sortedProducts, state.search)
  const filteredOtProducts = otFilter(searchedProducts, state.ot)
  return doFilter(filteredOtProducts, state.do)
})
</script>

<template>
  <div class="container">
    <TitleStore class="title"></TitleStore>
    <div class="store">
      <sortBlock
        class="sort"
        v-if="products"
        :products="products"
        @switchSort="(data) => (state.sortBy = data)"
        @search="(data) => (state.search = data)"
        @ot="(data) => (state.ot = data)"
        @do="(data) => (state.do = data)"
      ></sortBlock>
      <goodsComponent class="goods" :dataCard="sortFilterSearch" @likeItem="likeItemHandler"></goodsComponent>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}

.container {
  padding: 0 20px 20px;
  background-color: rgba(194, 194, 194, 0.068);
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  height: 100%;
  border-radius: 60px;
}

.title {
  margin-bottom: 10px;
  text-align: center;
}

.store {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.goods {
  width: 80%;
}

.sort {
  width: 20%;
}

@media (max-width: 1240px) {
  .store {
    flex-direction: column;
  }

  .sort {
    width: 100%;
  }

  .goods {
    width: 100%;
  }
}
</style>
