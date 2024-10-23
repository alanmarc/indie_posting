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
    <section class="d-flex flex-row my-15">
      <v-card color="bgDark" variant="flat" class="mx-auto">
        <v-card-item>
          <v-card-title class="text-h3 text-wrap">{{
            interview[0].title
          }}</v-card-title>
          <v-card-subtitle class="my-2 text-subtitle-1">
            Invitados:
            {{ interview[0].band.name }} / {{ interview[0].band.genre }}
            <hr class="my-1 opacity-40" />
            {{ interview[0].band.origin }} /
            {{ interview[0].band.years_active }}
          </v-card-subtitle>
          <v-card-text class="text-body-1">
            <p>{{ interview[0].description }}</p>
            <div
              v-for="(member, index) in interview[0].band.members"
              :key="index"
              class="interview-card mt-6 text-secondary text-body-2"
            >
              <p>{{ member.name }} / {{ member.role }}</p>
              <hr class="my-0 opacity-40" />
              <p style="font-size: 0.75rem">{{ member.bio }}</p>
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
      <RecentInterviews />
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import data from "../assets/data/interviews.json";
import RecentInterviews from "../components/interviews/RecentInterviews.vue";

const { title, description, interview } = data;
const reveal = ref(false);
</script>
