<template>
  <div >
    hello kupac
    <button class="btn bg-success">dugme</button>
 
  </div>
</template>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'

export default {
    name: "Kupac",
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
