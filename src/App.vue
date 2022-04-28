<template>
  <v-app>
    <v-app-bar color="#ffffff" app height="80">
      <div class="header">
        <img src="../src/assets/logo.jpg" />
      </div>
      <template v-if="!$vuetify.breakpoint.smAndDown">
        <div class="navManu">
          <div
            class="px-5"
            @click="$router.push({ name: 'home' }).catch(() => {})"
          >
            Home
          </div>
          <div
            class="px-5"
            @click="$router.push({ path: '/AirQuality' }).catch(() => {})"
          >
            Air Quality
          </div>
          <div
            class="px-5"
            @click="$router.push({ name: 'about' }).catch(() => {})"
          >
            Company
          </div>
          <div
            class="px-5"
            @click="$router.push({ name: 'features' }).catch(() => {})"
          >
            Features
          </div>
        </div>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import qualityData from "./Data/CoolingLoad15months.json";

export default {
  name: "App",
  //
  beforeMount() {
    console.log(qualityData);
  },
  data() {
    return {
      qualityData,
      appTitle: "Awesome App",
      sidebar: false,
      items: [
        { title: "Home", value: "home" },
        { title: "Test", value: "test" },
        { title: "About", value: "about" },
        { title: "Features", value: "features" },
      ],
    };
  },
};
</script>

<style>
:root {
  --main-color: #219150;
  --black: #13131a;
  --bg: #eeeeee;
  --border: 0.2rem solid rgba(0, 0, 0, 0.1);
}

* {
  font-family: "Poppins", sans-serif;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: none;
  transition: 0.2s linear;
}

.header img {
  height: 80px;
  padding: 10px;
  z-index: 1000;
  /*margin-top: 20px;*/
  margin-left: 90px;
}

.navManu {
  width: 100%;
  justify-content: end;
  z-index: 1;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  font-size: 20px;
  color: #13131a;
}

.navManu :hover {
  color: #219150;
}

section {
  padding: 5rem 9%;
}
</style>
