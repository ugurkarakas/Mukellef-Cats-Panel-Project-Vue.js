<template lang="">
    <appHeader />
    <div class="container">
        <div class="content-header">
           <div>
            <h1>Election Simulation</h1>
            <span>choose the cutest cat</span>
           </div>
           <button class="change-btn" @click="changeCat" id="fadeCat">Change</button>
        </div>
        <div class="content-body">
            <img class="product-img" v-bind:src="this.catUrl" alt="" id="catImg">
        </div>
    </div>
    
</template>
<script>
import { mapGetters } from 'vuex';
// import { catModel } from '@/model/catModel';


export default {
  data(){
    return{
        catUrl: ""
    }
  },
  mounted(){
     this.changeCat();
       let catImg = document.getElementById('catImg');
    document.getElementById('fadeCat').onclick = function(){
        catImg.classList.toggle('fade');
        setTimeout(() => {
            catImg.classList.toggle('fade');
        }, 1000);
    }
  },
  computed :{
    ...mapGetters(['_isAuthenticated'])
  },
  methods:{
    changeCat(){
        this.$catAxios.get().then(response => {
            this.catUrl = response.data[0].url
        }).catch(e => console.log(e));
    }
}
}
</script>
<style>
 @import '@/assets/main.scss';             
</style>
