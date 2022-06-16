<template>
  <v-app
    style="margin-top: 100px; background-color: #fafafa; min-height: 867px"
  >
    <v-container>
      <br />
      <v-row>
        <v-col cols="9"><router-view></router-view></v-col>
        <v-col>
          <v-card>
            <v-card-title>สรุปคำสั่งซื้อ</v-card-title>
            <v-card-text>
              <v-row>
                <v-col>ยอดรวม</v-col>
                <v-col align="right">THB{{ totalAmount() }}</v-col>
              </v-row>
              <v-row>
                <v-col>ค่าส่ง</v-col>
                <v-col align="right">THB{{ shippingCost.toFixed(2) }}</v-col>
              </v-row>
            </v-card-text>
            <v-container><v-divider></v-divider></v-container>
            <v-card-text>
              <v-row>
                <v-col>ยอดรวมสุทธิ</v-col>
                <v-col align="right"
                  ><h3>
                    THB{{
                      (
                        parseInt(totalAmount()) + parseInt(shippingCost)
                      ).toFixed(2)
                    }}
                  </h3></v-col
                >
              </v-row>
            </v-card-text>
            <v-card-text class="text-center">
              <v-btn
                @click="$router.push('/summary/payment')"
                class="primary"
                rounded
                width="100%"
                height="50"
                ><v-icon>{{ icons["lock"].icon }}</v-icon
                >&nbsp;&nbsp;ชำระเงิน</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row></v-container
    >
  </v-app>
</template>

<script>
import { mdiClose, mdiPencil, mdiLock } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        close: { icon: mdiClose },
        pencil: { icon: mdiPencil },
        lock: { icon: mdiLock },
      },
      shippingCost: 1,
    };
  },
  watch: {
    $route(to, from) {
      this.totalAmount();
    },
  },
  mounted() {
    this.totalAmount();
  },
  methods: {
    totalAmount() {
      let sum = 0;
      this.$store.state.cartMap.forEach(function (value) {
        sum += parseInt(value.price) * parseInt(value.amount);
      });
      return sum.toFixed(2);
    },
  },
};
</script>
