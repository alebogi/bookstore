<template>
  <div >
    hello prodavac

  </div>
</template>

<script>
import Zaglavlje from '../components/Zaglavlje.vue'

export default {
    name: "Prodavac",
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
