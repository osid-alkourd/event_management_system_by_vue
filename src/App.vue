<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";
import SideBar from "./components/SideBar.vue";
//import EventView from "./views/pages/Events/EventView.vue";
export default{
  components : {Footer , SideBar}
}
</script>

<template>
   <div id="main">
    <RouterView></RouterView>
  </div>
</template>

 