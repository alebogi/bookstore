<template>
  <div id="wrapper">
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<style>

#wrapper {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height:100vh ;
  background-image: url('~@/assets/bck.jpg'); 

  background-size: cover;
  overflow-x: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
