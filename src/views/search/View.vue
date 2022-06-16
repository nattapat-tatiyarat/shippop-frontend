<template>
  <v-app style="margin-top: 100px; background-color: #fafafa">
    <br />

    <v-container>
      <div v-if="products.length == 0">
        <v-card class="card-if"><p class="no-result">No result</p></v-card>
      </div>
      <div v-else>
        <v-card>
          <v-slide-group
            show-arrows="always"
            :prev-icon="icons['left'].icon"
            :next-icon="icons['right'].icon"
          >
            <v-slide-item
              v-for="(product, index) in products"
              :key="'A' + index"
            >
              <div style="margin: 0px 20px">
                <v-card
                  class="mx-auto my-12 card"
                  width="250"
                  @click="routeToDetail(product._id)"
                >
                  <v-card-text>
                    <v-icon color="#689F38">{{ icons["check"].icon }}</v-icon
                    >&nbsp;&nbsp;
                    <label style="color: #689f38">มีสินค้า</label>
                  </v-card-text>
                  <v-img
                    height="150"
                    src="https://media-cdn.bnn.in.th/125744/Samsung-Accessory-Case-Book-Cover-Tab-S7-FE-S7+-Bronze-1-square_medium.jpg"
                  ></v-img>
                  <div class="hover-class icon-class">
                    <v-avatar class="avatar" size="36" color="error"
                      ><v-icon small>{{
                        icons["heart"].icon
                      }}</v-icon></v-avatar
                    >
                    <br />
                    <v-avatar
                      class="avatar"
                      size="36"
                      color="#E0E0E0"
                      style="margin-top: 5px"
                      ><v-icon small>{{ icons["poll"].icon }}</v-icon></v-avatar
                    >
                  </div>
                  <div class="hover-class add-to-cart">
                    <v-btn color="primary" outlined rounded>Add To Cart</v-btn>
                  </div>
                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating
                        :value="4"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                      <div class="grey--text ms-4">Reviews (4)</div>
                    </v-row>

                    <br />

                    <div>
                      <h3>{{ product.name }}</h3>
                    </div>
                    <br />

                    <div
                      style="position: absolute; bottom: 0; margin-bottom: 15px"
                    >
                      <label style="text-decoration: line-through"
                        >THB{{ product.price.toFixed(2) }}</label
                      ><br />
                      <h2>THB{{ product.discount.toFixed(2) }}</h2>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-slide-item>
          </v-slide-group></v-card
        >
      </div></v-container
    >
  </v-app>
</template>

<script>
import {
  mdiCheckCircle,
  mdiChevronLeftCircle,
  mdiChevronRightCircle,
  mdiCardsHeartOutline,
  mdiPoll,
} from "@mdi/js";
import { ProductService } from "../../services";

export default {
  data: () => ({
    model: null,
    icons: {
      check: { icon: mdiCheckCircle },
      left: { icon: mdiChevronLeftCircle },
      right: { icon: mdiChevronRightCircle },
      heart: { icon: mdiCardsHeartOutline },
      poll: { icon: mdiPoll },
    },
    products: [],
  }),
  watch: {
    $route(to, from) {
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      if (this.$route.query.q == "") {
        this.$router.push("/");
      } else {
        const product = await ProductService.getByName({
          name: this.$route.query.q,
        });
        this.products = product.data;
      }
    },
    routeToDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style scoped>
.card:hover .hover-class {
  display: block;
}
.card:not(:hover) .hover-class {
  display: none;
}
.card:hover {
  height: 420px;
}
.card:not(:hover),
.card-if {
  height: 365px;
}
.add-to-cart {
  text-align: center;
  margin-top: 10px;
}
.v-icon.outlined {
  border: 1px solid currentColor;
  border-radius: 50%;
  height: 35px;
  width: 35px;
}
.icon-class {
  position: absolute;
  top: 60px;
  right: 5px;
}
.avatar {
  cursor: pointer;
}
.no-result {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
