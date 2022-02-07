<template>
  
    <div class="w3-container">
        
        <zaglavlje></zaglavlje>  
      
            <div class="row d-flex justify-content-center" style="justify-content: center;">
                <h1>Moj profil</h1>
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
                    
                </div>
                
                
                

            </div>

    </div>

</template>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'

export default {
    name: "MojProfil",
    components:{
        Zaglavlje
    },
    // data(){
        
    // },
    created(){
        if(localStorage.getItem("username") == null){
          alert("autorizacija brt")
            this.$router.go(-1);
        }
    }
}
</script>
