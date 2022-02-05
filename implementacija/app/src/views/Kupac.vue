<template>
  <div >
    hello kupac
    <button class="btn bg-success">dugme</button>
  </div>
</template>

<script>


export default {
    name: "Kupac",
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
