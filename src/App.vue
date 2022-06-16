<template>
  <div style="background-color: #fafafa; min-height: 867px">
    <top-bar class="top-bar"></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from "./views/top-bar/TopBar.vue";

export default {
  name: "App",
  components: {
    TopBar,
  },
  data: () => ({
    collapseOnScroll: true,
    //
  }),
};
</script>

<style scoped>
.top-bar {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1;
}
</style>
