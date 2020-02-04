<template>
  <div class="bread-crumbs">
    <span v-for="(crumb, index) in bread" :key="crumb.path">
      <router-link class="bread-crumb" :to="crumb.path">{{crumb.title}}</router-link><span v-if="index !== bread.length - 1"> &raquo; </span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "Breadcrumbs",
    computed: {
      bread() {
        const parts = this.$page.path.split("/");

        // Bascially if there's a trailing slash then get rid of the blank 
        if (!parts[parts.length - 1].length) { 
          parts.pop(); 
        }
      
        let link = ''
        // Loop through the crumbs
        const crumbs = parts.map(slug => {
          link += slug
          const page = this.$site.pages.find((el) => el.path === link || el.path === link + "/");
          link += '/'
          // if a page is found
          if (page) {
            return { path: page.path, title: page.title || page.frontmatter.breadcrumb }
          }

        })
        
        return crumbs
      }
    }
  };
</script>

<style lang="stylus" scoped>
  nav
    margin-bottom 0
    background-color #B0BEC5
    height 64px
    line-height 64px

    .nav-wrapper
      position: relative
      height 100%

  .breadcrumb
    &::before
      content "/"
      font-family inherit
      font-size inherit

    &:last-child
      cursor default
</style>
