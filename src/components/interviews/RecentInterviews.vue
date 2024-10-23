<template>
  <v-card
    class="overflow-y-auto"
    color="bgDark"
    max-height="500px"
    max-width="360px"
    variant="flat"
  >
    <v-toolbar width="100">
      <v-card-title class="text-h6 text-wrap">Últimas Entrevistas</v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text color="bgDark">
      <v-list :items="items" lines="three" item-props>
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import img1 from "../../assets/img/inter1.jpg";
import img2 from "../../assets/img/inter2.jpg";
import img3 from "../../assets/img/inter3.jpg";
const items = [
  {
    prependAvatar: img1,
    title: "KEXP en ...",
    subtitle: `<span class="text-secondary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  {
    prependAvatar: img2,
    title: "Hollo Seahorse en Puebla",
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  {
    prependAvatar: img3,
    title: "Vive Latino 2025",
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle:
      '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
];
</script>

<style>
div.v-avatar.v-theme--customTheme.v-avatar--density-default.v-avatar--size-default.v-avatar--variant-flat {
  border-radius: 0%;
}
.v-avatar.v-avatar--density-default {
  width: 80px;
  height: 80px;
}
.v-list-item-title {
  text-wrap: wrap;
}
</style>
