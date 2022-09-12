<template lang="">
   <div class="container-auth">
        <div class="img-partial">
            <img src="@/assets/img/mukellef_dark_logo.jpg" alt="">
        </div>
        <div class="content-partial">
            <div class="sign-head-partial">

                <h1>Sign In</h1>
                <span>Adopt a cat now</span>
            </div>
            <div class="sign-body-partial">
                <input type="text" v-model="userData.mail"  placeholder="Email">
                <input type="password" v-model="userData.password" placeholder="Password">
            </div>
            <button class="signin-btn" @click="onSubmit">Sign In</button>
            <span>Not a Member yet? <router-link :to="{name : 'Register'}" class="lnk">Sign up</router-link></span>
        </div>
    </div>
</template>
<script>

import CryptoJs from "crypto-js"

export default {
   data(){
    return{
       userData: {
        mail: null,
        password: null
       }
    }
   },
   methods:{
      onSubmit(){
        const password = CryptoJs.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
        this.$appAxios.get('/user?mail='+this.userData.mail +'&password='+password).then(login_reponse => {
            console.log(login_reponse);
            if(login_reponse?.data?.length > 0)
            {
                this.$store.commit("setUser", login_reponse?.data[0]);
                this.$router.push({ name : "Panel"});
            }
            else{
                alert("Kullanıcı Bulunamadı");
            }
        }).catch(e => console.log(e));
        // .finally(() => this.loader = false)
      }
   }
}
</script>
<style>
        @import '@/assets/auth.scss';

     
</style>