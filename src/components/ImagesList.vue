<template>
  <div>
    <Spinner v-if="isLoading" />
    <div v-else class="row">
      <div v-bind:key="image.id" v-for="image in images" class="item">
        <img v-bind:src="image.urls.small" v-bind:alt="image.alt_description" />
      </div>
    </div>
    <button @click="handleClick">Load more</button>
  </div>
</template>

<script>
import { getImages } from "../services/unsplash.service";
import Spinner from "./Spinner";

export default {
  name: "ImagesList",
  components: {
    Spinner
  },
  data: function() {
    return {
      images: [],
      isLoading: true,
      page: 1
    };
  },
  methods: {
    handleClick() {
      this.page += 1;
      this.$nextTick(async function() {
        this.isLoading = true;
        const images = await getImages(this.page);
        this.images = this.images.concat(images);
        this.isLoading = false;
      });
    }
  },
  async mounted() {
    this.isLoading = true;
    this.images = await getImages(this.page);
    this.isLoading = false;
  },
  updated() {
    window.scrollTo(0, document.body.scrollHeight);
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 100%;
  overflow: hidden;
}

@media only screen and (min-width: 540px) {
  .item {
    width: 50%;
  }
}

@media only screen and (min-width: 767px) {
  .item {
    width: 33.3333%;
  }
}

@media only screen and (min-width: 1200px) {
  .item {
    width: 25%;
  }
}

img {
  display: block;
  object-fit: cover;
  transition: all 0.5s;
  width: 100%;
  height: 300px;
}

img:hover {
  transform: scale3d(1.2, 1.2, 1.2) rotate(5deg);
}

button {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  padding: 20px 0;
  text-transform: uppercase;
  border: unset;
  font-size: 20px;
  border: unset;
  background: #3498db;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
}
</style>