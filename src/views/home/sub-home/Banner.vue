<template>
  <v-app>
    <v-container>
      <v-slide-group multiple show-arrows="always">
        <v-slide-item
          style="margin-right: 20px; margin-top: 20px; margin-bottom: 20px"
          v-for="n in 10"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <img
            style="max-height: 400px"
            src="https://img.freepik.com/free-photo/light-gray-background-with-small-sparkles-texture-macro-focus-microtexture_328295-112.jpg?w=2000"
          />
        </v-slide-item> </v-slide-group
    ></v-container>
  </v-app>
</template>
