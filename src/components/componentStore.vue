<script src="../modules/SaveToLocalStorage.js"></script>
<template>
  <div class="card">
    <div class="card-img-top">
      <img :src="dataCard.image" class="card-img" alt="..." />
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title" :class="{ 'full-title': showFullTitle }" @click="toggleTitle">{{ dataCard.title }}</h5>
      <p class="card-text flex-grow-1" :class="{ 'full-text': showFullText }" @click="toggleText">
        {{ dataCard.description }}
      </p>
      <p class="card-text">${{ dataCard.price }}</p>
      <div class="d-flex justify-content-between">
        <a href="#" class="btn btn-primary">Детальнее</a>
        <button class="heartBtn" @click="likeItem"><i class="fa-regular fa-heart" :class="{ 'fa-solid': dataCard.likeState }"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataCard: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showFullText: true,
      showFullTitle: true,
      like: false
    }
  },
  methods: {
    toggleText() {
      this.showFullText = !this.showFullText
    },
    toggleTitle() {
      this.showFullTitle = !this.showFullTitle
    },
    likeItem() {
      if (this.like) {
        this.like = false
      } else {
        this.like = true
      }
      this.$emit('likeItem', { like: this.like, id: this.dataCard.id })
    }
  }
}
</script>

<style>
.full-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
}

.full-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
}

.card-img-top {
  height: 300px;
}

.card-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.heartBtn {
  background: none;
  border: none;
}
</style>
