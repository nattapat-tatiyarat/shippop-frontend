<template>
  <v-app style="background-color: #fafafa">
    <v-card
      ><v-card-title>ชำระเงิน</v-card-title>
      <v-card-text><b>ที่อยู่ในการจัดส่ง</b></v-card-text>
      <v-divider></v-divider>
      <br />
      <v-card-text>
        <v-row>
          <v-col cols="4">ชื่อ</v-col>
          <v-col cols="4">นามสกุล</v-col>
        </v-row>
        <v-row class="text-field">
          <v-col cols="4"
            ><v-text-field outlined dense hide-details rounded></v-text-field
          ></v-col>
          <v-col cols="4"
            ><v-text-field outlined dense hide-details rounded></v-text-field
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="8">ประเทศ</v-col>
        </v-row>
        <v-row class="text-field">
          <v-col cols="8"
            ><v-select
              v-model="country"
              :items="countries"
              outlined
              dense
              hide-details
              rounded
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8"
            >ที่อยู่
            <label style="color: #e57373"
              >(บ้านเลขที่ / หมู่บ้าน / ซอย / ถนน)</label
            ></v-col
          >
        </v-row>
        <v-row class="text-field">
          <v-col cols="8"
            ><v-text-field outlined dense hide-details rounded></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">แขวง/ตำบล</v-col>
          <v-col cols="4">เขต/อำเภอ</v-col>
        </v-row>
        <v-row class="text-field">
          <v-col cols="4"
            ><v-text-field outlined dense hide-details rounded></v-text-field
          ></v-col>
          <v-col cols="4"
            ><v-text-field outlined dense hide-details rounded></v-text-field
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="4">จังหวัด</v-col>
          <v-col cols="4">รหัสไปรษณีย์</v-col>
        </v-row>
        <v-row class="text-field">
          <v-col cols="4"
            ><v-text-field outlined dense hide-details rounded></v-text-field
          ></v-col>
          <v-col cols="4"
            ><v-text-field outlined dense hide-details rounded></v-text-field
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="8"
            >เบอร์โทรติดต่อ (กรุณาระบุหมายเลขโทรศัพท์
            เฉพาะตัวเลขเท่านั้น)</v-col
          >
        </v-row>
        <v-row class="text-field">
          <v-col cols="8"
            ><v-text-field outlined dense hide-details rounded></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <br />
      <v-card-text><b>เลือกขนส่ง</b></v-card-text>
      <v-divider></v-divider>
      <br />
      <v-radio-group v-model="shipping" style="padding: 0px 20px">
        <v-radio class="radio" value="1">
          <template v-slot:label>
            <div style="margin-left: 20px"><strong>Free Shipping</strong></div>
          </template>
        </v-radio>
        <v-radio class="radio" value="2">
          <template v-slot:label>
            <div>
              <img
                style="max-height: 100px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kerrry_Express.svg/1200px-Kerrry_Express.svg.png"
              />
            </div>
          </template>
        </v-radio>
      </v-radio-group>
      <br />
      <v-card-text><b>วิธีชำระเงิน</b></v-card-text>
      <v-divider></v-divider>
      <br />
      <v-radio-group v-model="paymentMethod" style="padding: 0px 20px">
        <v-radio class="radio" value="1">
          <template v-slot:label>
            <div style="margin-left: 20px; width: 100%">
              <v-row
                ><v-col
                  ><v-icon
                    size="30"
                    style="border: 2px solid currentColor; border-radius: 100px"
                    >{{ icons["usd"].icon }}</v-icon
                  >&nbsp;&nbsp;&nbsp;<strong>Cash</strong></v-col
                ><v-col align="right"><b>THB0.00</b></v-col></v-row
              >
            </div>
          </template>
        </v-radio>
        <v-radio class="radio" value="2">
          <template v-slot:label>
            <div style="margin-left: 20px; width: 100%">
              <v-row
                ><v-col
                  ><v-icon size="30">{{ icons["credit-card"].icon }}</v-icon
                  >&nbsp;&nbsp;&nbsp;<strong>Credit/Debit</strong
                  ><b>THB40.00</b></v-col
                ><v-col align="right"><b>THB40.00</b></v-col></v-row
              >
            </div>
          </template>
        </v-radio>
      </v-radio-group>
    </v-card>
    <br />
  </v-app>
</template>

<script>
import { mdiCurrencyUsd, mdiCreditCardMultiple } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        usd: { icon: mdiCurrencyUsd },
        "credit-card": { icon: mdiCreditCardMultiple },
      },
      country: "thailand",
      countries: [{ text: "Thailand", value: "thailand" }],
      shipping: "",
      paymentMethod: "",
    };
  },
  methods: {
    shippingOnChange() {
      const a = document.querySelector(`#${this.shipping}`);
    },
  },
};
</script>

<style scoped>
.text-field {
  margin-top: -20px;
}
.radio {
  padding: 30px;
  border: 1px solid;
  border-color: #bdbdbd;
  border-radius: 10px;
  height: 100px;
  width: 50%;
}
</style>
