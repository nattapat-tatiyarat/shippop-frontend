<template>
  <v-app>
    <div style="height: 100px; box-shadow: 0px 0.1px 5px 1px">
      <div v-if="searchBool == false">
        <v-row align="center" style="height: 100%; margin-top: 8px">
          <v-col cols="1" offset="2"
            ><h1
              @click="routeToHome"
              style="
                font-family: 'Century Gothic', CenturyGothic, Geneva,
                  AppleGothic, sans-serif;
                color: #424242;
                cursor: pointer;
              "
            >
              Book
            </h1>
          </v-col>
          <v-col cols="1">สินค้าใหม่</v-col>
          <v-col cols="1">สินค้าขายดี</v-col>
          <v-col cols="1">สินค้าลดราคา</v-col>
          <v-col cols="1">สินค้าแนะนำ</v-col>
          <v-col cols="2" offset="3"
            ><v-icon
              @click="searchBool = !searchBool"
              style="margin-right: 30px"
              >{{ icons["search"].icon }}</v-icon
            >

            <v-icon @click="cartDialog = true" style="margin-right: 30px">{{
              icons["cart"].icon
            }}</v-icon
            ><span class="badge badge-warning" id="lblCartCount">{{
              $store.state.cart.length
            }}</span>

            <v-avatar color="primary" size="56">VJ</v-avatar></v-col
          >
        </v-row>
      </div>
      <div v-else>
        <v-row align="center" style="height: 100%; margin-top: 8px">
          <v-col cols="1" offset="2"
            ><h1
              @click="routeToHome"
              style="font-family: Garamond, serif; cursor: pointer"
            >
              Book
            </h1>
          </v-col>
          <v-col
            ><v-text-field
              v-model="search"
              @change="routeToSearchResult"
              height="50px"
              placeholder="ค้นหาสินค้า"
              background-color="#FAFAFA"
              dense
              hide-details
              rounded
            ></v-text-field
          ></v-col>
          <v-col cols="2"
            ><v-icon
              @click="searchBool = !searchBool"
              style="margin-right: 30px"
              >{{ icons["close"].icon }}</v-icon
            ><v-icon style="margin-right: 30px">{{ icons["cart"].icon }}</v-icon
            ><v-avatar color="primary" size="56">VJ</v-avatar></v-col
          >
        </v-row>
      </div>
    </div>
    <v-dialog
      v-model="cartDialog"
      content-class="elevation-1"
      overlay-color=""
      width="400"
    >
      <v-card>
        <v-card-title class="justify-center">ตะกร้าของฉัน</v-card-title>
        <v-card-text class="text-center"
          >{{ $store.state.cart.length }} สินค้าในตะกร้าของฉัน
        </v-card-text>
        <v-card-text class="text-center">
          <v-btn
            @click="$router.push('/summary/basket'), (cartDialog = false)"
            color="primary"
            width="100%"
            outlined
            rounded
            >ดูหรือแก้ไขสินค้าในตะกร้าของฉัน</v-btn
          ></v-card-text
        >
        <v-divider></v-divider>

        <v-list-item
          class="list"
          v-for="(product, index) in this.$store.state.cart"
          :key="'E' + index"
        >
          <v-list-item-content>
            {{ product.amount }}&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;
            <img
              style="max-width: 100px; max-height: 100px"
              src="https://media-cdn.bnn.in.th/125744/Samsung-Accessory-Case-Book-Cover-Tab-S7-FE-S7+-Bronze-1-square_medium.jpg"
            />
            &nbsp;&nbsp;&nbsp;
            {{
              product.name.length > 20
                ? `${product.name.substring(0, 20)}...`
                : product.name
            }}
            <div class="dialog-button">
              <v-avatar
                @click="deleteProduct(product.id, index)"
                color="error"
                size="20"
                outlined
                style="margin-top: -10px; cursor: pointer"
              >
                <v-icon color="white" size="15">{{
                  icons["close"].icon
                }}</v-icon></v-avatar
              ><br />
              <v-avatar
                color="primary"
                size="20"
                outlined
                style="margin-bottom: -10px; cursor: pointer"
              >
                <v-icon color="white" size="15">{{
                  icons["pencil"].icon
                }}</v-icon></v-avatar
              >
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <br />
        <v-card-text class="text-center">
          <b>ยอดรวม: </b>
          <h2 style="display: inline">THB{{ totalAmount }}</h2>
        </v-card-text>

        <v-card-text class="text-center">
          <v-btn
            @click="$router.push('/summary/payment'), (cartDialog = false)"
            color="primary"
            width="100%"
            rounded
            >ไปชำระเงิน</v-btn
          ></v-card-text
        >
      </v-card>
    </v-dialog></v-app
  >
</template>

<script>
import { mdiMagnify, mdiCartOutline, mdiClose, mdiPencil } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        search: { icon: mdiMagnify },
        cart: { icon: mdiCartOutline },
        close: { icon: mdiClose },
        pencil: { icon: mdiPencil },
      },
      searchBool: false,
      search: "",
      cartDialog: false,
    };
  },
  watch: {
    $route(to, from) {
      if (this.$route.name != "Search Result") {
        this.search = "";
        this.searchBool = false;
      }
    },
  },
  computed: {
    totalAmount() {
      let sum = 0;
      for (let i = 0; i < this.$store.state.cart.length; i++) {
        sum += parseInt(
          this.$store.state.cart[i].price * this.$store.state.cart[i].amount
        );
      }
      return sum.toFixed(2);
    },
  },
  methods: {
    routeToHome() {
      if (this.$route.name != "Home") {
        this.$router.push("/");
      }
    },
    routeToSearchResult() {
      this.$router.push(`/search-result?q=${this.search}`);
    },
    deleteProduct(id, index) {
      this.$store.state.cart.splice(index, 1);
      this.$store.state.cartMap.delete(id);
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 100px !important;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
  position: absolute;
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -35px;
}
.v-dialog {
  position: absolute;
  top: 90px;
  right: 0;
}
.dialog-button {
  position: absolute;
  right: 0;
  margin-right: 10px;
}
.list:hover .dialog-button {
  display: absolute;
}
.list:not(:hover) .dialog-button {
  display: none;
}
</style>
