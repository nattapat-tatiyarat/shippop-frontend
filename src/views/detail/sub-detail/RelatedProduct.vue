<template>
  <v-app style="background-color: #fafafa"
    ><br /><br />
    <v-container>
      <v-card>
        <v-card-title>สินค้าที่เกี่ยวข้อง</v-card-title>
        <v-slide-group
          show-arrows="always"
          :prev-icon="icons['left'].icon"
          :next-icon="icons['right'].icon"
        >
          <v-slide-item v-for="(product, index) in products" :key="'C' + index">
            <div style="margin: 0px 20px">
              <v-card class="mx-auto my-12 card" max-width="250" height="365">
                <v-card-text>
                  <v-icon color="#689F38">{{ icons["check"].icon }}</v-icon
                  >&nbsp;&nbsp;
                  <label style="color: #689f38">มีสินค้า</label>
                </v-card-text>
                <v-img
                  height="150"
                  src="https://media-cdn.bnn.in.th/125744/Samsung-Accessory-Case-Book-Cover-Tab-S7-FE-S7+-Bronze-1-square_medium.jpg"
                ></v-img>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="
                        product.score == 0
                          ? 0
                          : product.score / product.user_voted.length
                      "
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div class="grey--text ms-4">
                      Reviews ({{
                        product.score == 0
                          ? 0
                          : (product.score / product.user_voted.length).toFixed(
                              2
                            )
                      }})
                    </div>
                  </v-row>

                  <br />

                  <div>
                    <h3>{{ product.name }}</h3>
                  </div>
                  <br />
                  <label style="text-decoration: line-through"
                    >THB{{ product.price.toFixed(2) }}</label
                  ><br />
                  <h2>THB{{ product.discount.toFixed(2) }}</h2>
                </v-card-text>
              </v-card>
            </div>
          </v-slide-item>
        </v-slide-group></v-card
      ></v-container
    ><br /><br />
  </v-app>
</template>

<script>
import {
  mdiCheckCircle,
  mdiChevronLeftCircle,
  mdiChevronRightCircle,
} from "@mdi/js";
import ProductService from "../../../services/product.service";

export default {
  data: () => ({
    icons: {
      check: { icon: mdiCheckCircle },
      left: { icon: mdiChevronLeftCircle },
      right: { icon: mdiChevronRightCircle },
    },
    products: [],
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const product = await ProductService.getByStatus({ status: 1 });
      this.products = product.data;
    },
  },
};
</script>
