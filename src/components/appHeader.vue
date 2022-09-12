<template>
  <div class="header">
        <img src="@/assets/img/mukellef_dark_logo.jpg" alt="">
        <div>
            <a class="signout-btn" @click="onLogout">Sign Out</a>
        </div>
    </div>
</template>

<script>
export default {
 methods:{
    onLogout(){
        this.$store.commit("logoutUser");
        this.$router.push({name :  "Login"});
    }
 }
}
</script>
<style>
             @import '@/assets/main.scss';

</style>