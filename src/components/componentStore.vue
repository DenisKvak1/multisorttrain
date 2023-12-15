<template>
    <div class="card">
        <div class="card-img-top">
            <img :src="dataCard.image" class="card-img" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title" :class="{'full-title': showFullTitle }" @click="toggleTitle" >{{ dataCard.title }}</h5>
            <p class="card-text" :class="{'full-text': showFullText }" @click="toggleText">{{dataCard.description}}</p>
            <p class="card-text">${{dataCard.price}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        dataCard:{
            type: Object,
            required:true
        },
    },
    data(){
        return{
            showFullText: true,
            showFullTitle: true
        }
    },
    methods: {
        toggleText() {
            this.showFullText = !this.showFullText;
        },
        toggleTitle() {
            this.showFullTitle = !this.showFullTitle;
        },
  },
}
</script>

<style>
    .full-text{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 3; 
    }
    .full-title{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2; 
    }
    .card-img-top{
        height: 300px; 
    }
    .card-img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>