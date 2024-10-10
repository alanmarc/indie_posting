<template>
  <v-app-bar
    :class="{ navbar: true, 'navbar-hidden': !isScrolledPastFirstSection }"
    style="color: aliceblue"
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title style="font-size: 2rem">Indie Post</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="{ path: '/' }">Home</v-btn>
    <v-btn text :to="{ path: '/about' }">About</v-btn>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item :to="{ path: '/' }">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/about' }">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false); ///Para el mobile
const isScrolledPastFirstSection = ref(false); //ocultar el menu
const router = useRouter();

console.log(isScrolledPastFirstSection.value);
const checkScroll = () => {
  console.log(" function chec");
  const firstSection = document.querySelector(".first-section");
  console.log(firstSection);
  if (firstSection) {
    const firstSectionHeight = firstSection.offsetHeight;
    isScrolledPastFirstSection.value = window.scrollY > firstSectionHeight;
  } else {
    isScrolledPastFirstSection.value = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

watch(
  () => router.currentRoute.value,
  () => {
    console.log("Watch");
    isScrolledPastFirstSection.value = false;
    checkScroll();
  }
);
</script>

<style scoped>
.navbar-hidden {
  display: none;
}
.v-app-bar.v-toolbar {
  background-color: transparent;
  transition: background-color 0.3s ease, top 0.3s ease;

  span.v-btn__content {
    font-size: 2rem;
  }
}
</style>
