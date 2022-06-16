<template>
  <div style="background-color: #fafafa; min-height: 867px">
    <vue-element-loading
      :active="this.$store.state.loading"
      spinner="bar-fade-scale"
      :is-full-screen="true"
    />
    <top-bar class="top-bar"></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";
import TopBar from "./views/top-bar/TopBar.vue";

export default {
  name: "App",
  components: {
    VueElementLoading,
    TopBar,
  },
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
