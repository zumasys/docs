<template>
  <div class="git-log">
      <h2 id="git-details"><a href="#git-details" class="header-anchor">#</a>Git Details</h2>
      <p class="git-details">
        <strong>Last Updated By:</strong> {{author}}<br />
        <strong>Created:</strong> {{created}}<br />
        <strong>Updated:</strong> {{updated}}<br />
      </p>
      <hr />
  </div>
</template>

<script>
  export default {
    name: "GitLog",
    computed: {
      // Full list of API: https://vuepress.github.io/en/plugins/git-log/#api
      author() { return this.$page.git.author; },
      commits() { return this.$page.git.commits; },
      contributors() { return this.$page.git.contributors; },
      created() { return this.$page.git.created; },
      updated() { return this.$page.git.updated; }
    }
  };
</script>

<style lang="stylus" scoped>
@require '~@parent-theme/styles/wrapper.styl';

.git-log
  @extend $wrapper;
  .git-details
    padding: 0 0 1em 0;
</style>
