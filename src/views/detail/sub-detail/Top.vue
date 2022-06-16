<template>
  <v-app style="background-color: #FAFAFA">
  <v-container>
    <br>
  <v-card>
    <div style="height: 700px">
      <v-row align="center" style="height: 100%;">
        <v-col align="center" cols="5" offset="1"
          ><img
            height="600px"
            src="https://media-cdn.bnn.in.th/125744/Samsung-Accessory-Case-Book-Cover-Tab-S7-FE-S7+-Bronze-1-square_medium.jpg"
        /></v-col>
        <v-col cols="6">
          <h1>{{ product.name }}</h1>
          <br />
          <p>ผู้เขียน : {{ product.author }}</p>
          <p>สำนักพิมพ์ : {{ product.publisher }}</p>
          <p>หมวดหมู่ : {{ product.category }}</p>
          <p>ประเภทของสินค้า : {{ product.type }}</p>
          <p>บาร์โค้ด : {{ product.barcode }}</p>
          <br /><br />
          <p style="white-space: nowrap"
            ><h2 style="display: inline">ราคา</h2>&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 style="display: inline">THB{{ product.discount ? product.discount.toFixed(2) : product.discount }}</h1>&nbsp;&nbsp;&nbsp;&nbsp;
            <h2 style="display: inline; color: gray; text-decoration: line-through"
                >THB{{ product.price ? product.price.toFixed(2) : product.price }}</h2
              >
            </p
          ><br>
          <v-row>
            <v-col cols="2">
                <v-text-field
                    v-model="amount"
                    type="number"
                    background-color="white"
                    outlined
                    dense
                    rounded
                    :rules="[rules.moreThanZero]"
                ></v-text-field>
            </v-col>
            <v-col cols="2" >
                <v-btn @click="addProduct" color="primary" style="width: 100%" rounded>Add</v-btn>
            </v-col>
            <v-col cols="2" >
                <v-btn color="#FFB74D" style="width: 100%" rounded>Wishlist</v-btn>
            </v-col>
        </v-row><br>
        <p>แชร์ :
            <v-avatar size="36" color="#558B2F" style="margin-left: 10px"
                ><v-icon color="white" size="20">{{ icons["email"].icon }}</v-icon></v-avatar
            ><v-avatar size="36" color="#424242" style="margin-left: 10px"
                ><v-icon color="white" size="20">{{ icons["twitter"].icon }}</v-icon></v-avatar
            ><v-avatar size="36" color="#1976D2" style="margin-left: 10px"
                ><v-icon color="white" size="20">{{ icons["facebook"].icon }}</v-icon></v-avatar
            ><v-avatar size="36" color="error" style="margin-left: 10px"
                ><v-icon color="white" size="20">{{ icons["google"].icon }}</v-icon></v-avatar
            ></p>
        </v-col>
      </v-row>
    </div>
    </v-card>
    <br><br><br>
        <v-card elevation="2">
      <v-tabs v-model="tab">
        <v-tab>เกี่ยวกับสินค้า</v-tab>
        <v-tab disabled>รายละเอียด</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
            <div style="padding-left: 2%; padding-right: 20%">
                <br>
            <p><b>รายละเอียด : </b>{{ product.name }}</p>
            <br>
            <p style="white-space: pre-line; color: #757575">{{ product.description }}</p>
            </div>
            <br>
        </v-tab-item>
      </v-tabs-items>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import {
  mdiCheckCircle,
  mdiChevronLeftCircle,
  mdiChevronRightCircle,
  mdiCardsHeartOutline,
  mdiPoll,
  mdiEmail,
  mdiTwitter,
  mdiFacebook,
  mdiGoogle,
} from "@mdi/js";
import ProductService from "../../../services/product.service";

export default {
  data: () => ({
    model: null,
    icons: {
      check: { icon: mdiCheckCircle },
      left: { icon: mdiChevronLeftCircle },
      right: { icon: mdiChevronRightCircle },
      heart: { icon: mdiCardsHeartOutline },
      poll: { icon: mdiPoll },
      email: { icon: mdiEmail },
      twitter: { icon: mdiTwitter },
      facebook: { icon: mdiFacebook },
      google: { icon: mdiGoogle },
    },
    product: {},
    amount: 1,
    tab: 'tab',
    rules: {
      moreThanZero: value => value >= 1 || '',
    },
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const product = await ProductService.getBy({
        _id: this.$route.params.id,
      });
      this.product = product.data;
      this.amount = 1
    },
    routeToDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    addProduct() {
      if (this.amount < 1) {
        alert("failed.")
      } else {
        if (!this.$store.state.cartMap.has(this.product._id)) {
          this.$store.state.cartMap.set(this.product._id, {
            id: this.product._id,
            name: this.product.name,
            price: this.product.discount,
            amount: this.amount,
          })
        } else {
          this.$store.state.cartMap.set(this.product._id, {
            id: this.product._id,
            name: this.product.name,
            price: this.product.discount,
            amount: parseInt(this.$store.state.cartMap.get(this.product._id).amount) + parseInt(this.amount)
          })
        }
        let cart = []
        this.$store.state.cartMap.forEach (function(value) {
          cart.push(value)
        })
        this.$store.state.cart = cart;
        alert('success.')
      }
      
    }
  },
};
</script>
