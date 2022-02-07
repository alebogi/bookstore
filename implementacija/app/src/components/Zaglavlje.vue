<template>

    <!-- <div class="row">
        <img src="../assets/logoMali.png" style="height: 80px; width: 294px;">

        <a @click="mojProfil()">Moj profil</a>
        <h6 @click="logout()">Odjavi se</h6>
    </div>  -->

    <div  style="white-space:nowrap" >

        <div id="image" style="display:inline; float: left;">
            <img id="slika" src="../assets/logoMali.png" style="height: 80px; width: 294px;" @click="pocetna()">
        </div>

        <div id="texts" style="display:inline; white-space:nowrap; float: right;" > 
            <br>
            <a class="dugme" @click="mojProfil()">Moj profil</a> 
            &nbsp;&nbsp;
            <a class="dugme"  @click="logout()">Odjavi se</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
        </div>

        <br><br><br>
    </div>


</template>

<style>

.dugme{
    color: black;
}

.dugme:hover{
    cursor: pointer;
    color: rgb(3, 54, 112);
}

#slika:hover{
    cursor: pointer;
}

</style>

<script>
export default {
    name: "Zaglavlje",
    methods:{
        logout(){
            localStorage.setItem("username", "");
            localStorage.setItem("type", "");
            this.$router.replace("/login");
        },
        mojProfil(){
            this.$router.replace("/mojProfil");
        },
        pocetna(){
            let type = localStorage.getItem("type");
            let pathPocetna = "/" + type;
            this.$router.replace(pathPocetna);
        }
    }
}
</script>