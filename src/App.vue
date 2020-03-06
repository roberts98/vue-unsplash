<template>
  <div id="app">
    <ImagesList />
  </div>
</template>

<script>
import ImagesList from "./components/ImagesList";

export default {
  name: "App",
  components: {
    ImagesList
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
