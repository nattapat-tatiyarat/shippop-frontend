<template>
  <v-app>
    <v-card>
      <v-card-title>ตะกร้าสินค้า</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th colspan="2" class="text-left">สินค้า</th>
              <th class="text-left">ราคา</th>
              <th class="text-left" style="width: 10%">จำนวน</th>
              <th class="text-left">ยอดรวม</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(product, index) in $store.state.cart"
              :key="`Basket${index}`"
            >
              <td>
                <img
                  style="max-width: 100px; max-height: 100px"
                  src="https://media-cdn.bnn.in.th/125744/Samsung-Accessory-Case-Book-Cover-Tab-S7-FE-S7+-Bronze-1-square_medium.jpg"
                />
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <v-text-field
                  :value="parseInt(product.amount)"
                  @change="amountOnChange(product.id, $event)"
                  type="number"
                  min="1"
                  dense
                  hide-details
                  outlined
                  :rules="[rules.moreThanZero]"
                ></v-text-field>
              </td>
              <td>{{ amountComputed(product.id) }}</td>
              <td>
                <v-avatar
                  @click="deleteProduct(product.id, index)"
                  color="error"
                  size="20"
                  outlined
                  style="margin-top: -5px; cursor: pointer"
                >
                  <v-icon color="white" size="15">{{
                    icons["close"].icon
                  }}</v-icon></v-avatar
                ><br />
                <v-avatar
                  color="primary"
                  size="20"
                  outlined
                  style="margin-bottom: -5px; cursor: pointer"
                >
                  <v-icon color="white" size="15">{{
                    icons["pencil"].icon
                  }}</v-icon></v-avatar
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-divider></v-divider>
      <br />
      <v-container>
        <v-btn
          @click="$router.push('/')"
          outlined
          color="secondary"
          rounded
          width="200"
          >ซื้อสินค้าต่อไป</v-btn
        >&nbsp;&nbsp;
        <v-btn
          @click="clear"
          color="#000000"
          style="color: white"
          rounded
          width="200"
          >ล้างตระกร้าสินค้า</v-btn
        ></v-container
      ><br />
    </v-card>
  </v-app>
</template>

<script>
import { mdiClose, mdiPencil } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        close: { icon: mdiClose },
        pencil: { icon: mdiPencil },
      },
      shippingCost: 1,
      rules: {
        moreThanZero: (value) => value >= 1 || "",
      },
    };
  },
  methods: {
    amountOnChange(id, amount) {
      let map = this.$store.state.cartMap.get(id);
      map.amount = amount;
      this.$store.state.cartMap.set(id, map);
    },
    amountComputed(id) {
      let map = this.$store.state.cartMap.get(id);
      return parseInt(map.price) * parseInt(map.amount);
    },
    clear() {
      this.$store.state.cart = [];
      this.$store.state.cartMap.clear();
      this.$router.push("/summary/basket?status=clear-all");
    },
    deleteProduct(id, index) {
      this.$store.state.cart.splice(index, 1);
      this.$store.state.cartMap.delete(id);
      this.$router.push("/summary/basket?status=clear-row");
    },
  },
};
</script>
