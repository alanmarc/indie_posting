<template>
  <div class="page">
    <PrinciplaCard />
    <v-row>
      <v-col cols="12" md="8">
        <News />
      </v-col>
      <v-col cols="12" md="4">
        <Concerts />
      </v-col>
    </v-row>
    <v-row>
      <Interviews />
    </v-row>
    <section class="about">
      <div class="container-about">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          iste dicta impedit repellendus corporis! Cupiditate atque expedita
          blanditiis ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore. At, aliquam aperiam.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          iste dicta impedit repellendus corporis! Cupiditate atque expedita
          blanditiis ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore. At, aliquam aperiam.
        </p>
      </div>
    </section>
    <section class="">
      <div>
        <h2>Stages of work</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          iste dicta impedit repellendus corporis! Cupiditate atque expedita
          blanditiis ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore. At, aliquam aperiam.
        </p>
      </div>
      <div>
        <h3>Moodboard and text prototype</h3>
        <p>
          Created ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore
        </p>
        <h3>Design concepts and 3D models</h3>
        <p>
          Created ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore
        </p>
        <h3>Logo Development</h3>
        <p>
          Created ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore
        </p>
        <h3>Design layout development</h3>
        <p>
          Created ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore
        </p>
        <h3>Adaption and animation</h3>
        <p>
          Created ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore
        </p>
        <h3>UI kit Coplation</h3>
        <p>
          Created ullam, sapiente quasi, tenetur accusamus quibusdam vitae,
          adipisci inventore
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PrinciplaCard from "../components/home/PrinciplaCard.vue";
import News from "../components/home/News.vue";
import Concerts from "../components/home/Concerts.vue";
import Interviews from "../components/home/Interviews.vue";

const message = ref("Welcome to the home page!");

const changeMessage = () => {
  message.value = "Message changed!";
};
</script>
<style scoped>
.home {
  padding: 0;
  margin: 0;
}
.img-principal {
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
  h1 {
    font-size: 120px;
  }
}

.img-principal img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-principal h1 {
  font-size: 84px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  color: white;
}

.about {
  height: 900px;
  padding: 30px;

  .container-about {
    padding: 24px;
  }
}
</style>
