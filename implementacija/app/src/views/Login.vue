<template>
    <div class="w3-container">
        
        <div class="row">
            <div class="row justify-content-center">
                <img src="../assets/logoCeo.png" style="width: 500px; height: 100%;">
            </div> 
            <div
                class=" w3-card-4 d-flex justify-content-center"
                style="
                margin-left: 250px;
                width: 40rem;
                min-width: 70%;
                min-height: 30rem;
                background: rgb(248, 246, 243, 0.5);
                padding-right: 50px;
                padding-left: 50px;
                "
            >
                
                
               
                <div class="row">
                    <table class="mojatabela">
                        <tr>
                            <td >Korisnicko ime:</td>
                            <td>
                                <input type="text" v-model="username">
                            </td>
                        </tr>
                        <tr>
                            <td>Lozinka:</td>
                            <td>
                                <input type="password" v-model="password">
                            </td>
                        </tr>
                        <tr>
                            <td><button type="button" class="btn btn-warning" @click="login()">Prijavi se</button></td>
                        </tr>
                    </table>
                    <div class="alert alert-danger" role="alert" v-if="error" style="height: 60px">
                        {{error}}
                    </div>
                </div>
                
                
                

            </div>
        
        
        </div>  
      
    

    </div>

    
    
</template>

<style>

    span{
        color: red;
    }

    .mojbtn {
        background-color: rgb(240, 133, 11);
        color: black;
    }

    

    .mojatabela{
        
        text-align: center;
    }
    
</style>

<script>
import users from '../data/users'

export default {
    name: "Login",
    data(){
        return{
            username: "",
            password: "",
            tip_kupac: false,
            tip_prodavac: false,
            error: ""
        }
    },
    methods:{
        login(){            
            this.error="";

            if(this.username == ""){
                this.error = "Polje username je prazno. \n";
            }
            if(this.password == ""){
                this.error += "Polje password prazno. \n";
            }
            if(this.error != "")
                return;

            users.forEach(korisnik=>
            {
                if(korisnik.username == this.username){
                    if(korisnik.password == this.password){
                        if(korisnik.tip == "prodavac"){
                            this.$router.push('prodavac');
                            localStorage.setItem("username", this.username);
                            localStorage.setItem("type", "prodavac");
                        }else if(korisnik.tip == "kupac"){
                            this.$router.push('kupac');
                            localStorage.setItem("username", this.username);
                            localStorage.setItem("type", "kupac");
                        }else{
                            this.error = "Pogresno uneti podaci";
                        }
                    }else{
                        this.error = "Pogresno uneti podaci";
                    }
                }else{
                    this.error = "Pogresno uneti podaci";
                }
            })
            
        }
    },
    created(){
        if(localStorage.getItem("users") == null){
            localStorage.setItem("users",JSON.stringify(users))
        }
    }
}
</script>
