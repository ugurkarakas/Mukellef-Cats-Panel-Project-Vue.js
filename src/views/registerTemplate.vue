<template lang="">
    <div class="container-auth">
         <div class="img-partial">
             <img src="@/assets/img/mukellef_dark_logo.jpg" alt="">
         </div>
         <div class="content-partial register">
             <div class="sign-head-partial">
                 <h1>Sign Up</h1>
                 <span>Adopt a cat now</span>
             </div>
             <div class="sign-body-partial">
                <input type="text" v-model="userData.username" placeholder="User Name">
                 <input type="text" v-model="userData.mail" placeholder="Email">
                 <input type="password" v-model="userData.password" placeholder="Password">
             </div>
             <button class="signin-btn" @click="onSave">Sign Up</button>
             <span>Are you a member ? <router-link :to="{name : 'Login'}" class="lnk">Sign in</router-link></span>
         </div>
     </div>
 </template>
 <script>
 
     import CryptoJs from "crypto-js"
 export default {
    data(){
     return{
     userData : {
         username : null,
         mail : null,
         password: null,
     }
     }
    },
    methods:{
       onSave(){
         const password = CryptoJs.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
         console.log(password);
 
 
         this.$appAxios.post("/user", {...this.userData, password}).then(registered_user =>{
             console.log(registered_user);
             this.$router.push({name: "Panel"});
         });
 
 
 
         // const decrptedPassword = CryptoJs.AES.decrypt(cryptedPassword, key).toString(CryptoJs.enc.Utf8);
         // console.log(decrptedPassword);
         // console.log(this.userData)
       }
    }
 }
 </script>
 <style>
         @import '@/assets/auth.scss';
 </style>