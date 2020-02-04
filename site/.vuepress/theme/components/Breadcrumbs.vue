<template>
  <div class="bread-crumbs">
    <span v-for="(crumb, index) in bread" :key="crumb.path">
      <router-link class="bread-crumb" :to="crumb.path">{{crumb.title}}</router-link><span v-if="index !== bread.length - 1" class="bread-crumb-separator"> &raquo; </span>
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
.bread-crumbs   
  .bread-crumb
    font-size: .7em
    color: #999
    &:hover
      color: $accentColor
  .bread-crumb-separator
    color: #ccc
</style>
