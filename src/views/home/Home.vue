<template>
  <div style="margin-top: 100px">
    <v-container>
      <br />
      <v-card elevation="2"><banner></banner></v-card>
      <br />
      <v-card elevation="2"
        ><v-card-title>สินค้าขายดี</v-card-title>
        <b class="view-all-product">ดูสินค้าขายดีทั้งหมด</b>
        <best-sell></best-sell></v-card
      ><br />
      <v-card elevation="2"
        ><v-card-title>สินค้าแนะนำ</v-card-title
        ><b class="view-all-product">ดูสินค้าขายดีทั้งหมด</b
        ><suggest-product></suggest-product
      ></v-card>
      <br /><br /><br /><br />
    </v-container>
  </div>
</template>

<script>
import Banner from "./sub-home/Banner.vue";
import BestSell from "./sub-home/BestSell.vue";
import SuggestProduct from "./sub-home/SuggestProduct.vue";

export default {
  name: "Home",
  components: {
    Banner,
    BestSell,
    SuggestProduct,
  },
};
</script>

<style scoped>
.view-all-product {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
