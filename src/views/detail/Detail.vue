<template>
  <div style="margin-top: 100px">
    <top></top>
    <related-product></related-product>
  </div>
</template>

<script>
import Top from "./sub-detail/Top.vue";
import RelatedProduct from "./sub-detail/RelatedProduct.vue";

export default {
  data: () => ({}),
  components: {
    Top,
    RelatedProduct,
  },
};
</script>
