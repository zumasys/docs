<template>
  <div class="page-header-details">
    <p><strong>Read Time:</strong> {{ readingTime }} minute(s)<br /></p>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  computed: {
    // Full object list: //github.com/darrenjennings/vuepress-plugin-reading-time#usage
    readingTime() {
      let minutes = this.$page.readingTime.minutes;

      if (minutes < 1) {
        minutes = 1;
      } else {
        minutes =
          minutes - Math.floor(minutes) < 0.5
            ? Math.floor(minutes)
            : Math.ceil(minutes);
      }

      return minutes;
    },
  },
};
</script>