<template>
  <div class="page">
    <v-card color="primary" class="d-flex flex-row p-" max-width="1500px">
      <div class="align-self-center">
        <v-card-text>
          <h1 class="text-secondary text-h2 pb-4">{{ title }}</h1>
          <h2 class="text-subtitle-1 pt-2 pb-2">{{ description }}</h2>
          <p class="text-medium-emphasis">
            Puebla, Mex. {{ interview[0].date_published }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-list-item class="w-100">
            <template v-slot:prepend>
              <v-avatar
                color="grey-darken-3"
                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-avatar>
            </template>
            <v-list-item-title>
              {{ interview[0].interviewer.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ interview[0].interviewer.occupation }}
            </v-list-item-subtitle>
            <template v-slot:append>
              <div class="justify-self-end">
                <v-icon class="me-1" icon="mdi-heart"></v-icon>
                <span class="subheading me-2">256</span>
                <span class="me-1">·</span>
                <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                <span class="subheading">45</span>
              </div>
            </template>
          </v-list-item>
        </v-card-actions>
      </div>
      <div>
        <img class="img-principal" src="../assets/img/home.jpg" alt="" />
      </div>
    </v-card>
    <section>
      <v-card color="secondary" variant="tonal" class="mx-auto">
        <v-card-item>
          <v-card-title>{{}}</v-card-title>
        </v-card-item>
      </v-card>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import data from "../assets/data/interviews.json";

const { title, description, interview } = data;
const reveal = ref(false);
console.log(data);
console.log(title);
</script>
