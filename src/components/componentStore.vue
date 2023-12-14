<template>
    <div class="card">
        <img :src="dataCard.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ dataCard.title }}</h5>
            <p class="card-text">{{dataCard.description}}</p>
            <p class="card-text">{{dataCard.price}}</p>
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
        }
    }
}
</script>

<style>

</style>