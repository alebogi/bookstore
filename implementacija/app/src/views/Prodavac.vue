<template>
  <div >
    hello prodavac
    
  </div>
</template>

<script>
export default {
    name: "Prodavac",
    components:{
         
    },
    data(){
        
    },
    created(){
        if(localStorage.getItem("username") == null){
          alert("autorizacija brt")
            this.$router.go(-1);
        }
    }
}
</script>
