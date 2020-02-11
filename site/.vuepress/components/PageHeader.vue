<template>
    <div class="page-header">
        <h1 :id="anchor">
            <a :href="'#'+ anchor" class="header-anchor">#</a>
            {{ getTitle }}
        </h1>
        <p>
            <strong>Updated:</strong> {{ created }}<br />
            <strong>Created:</strong> {{ updated }}<br />
            <strong>Last Updated By:</strong> {{ author }}<br />
            <strong>Read Time:</strong> {{ readingTime }} minute<br />
            
        </p>
    </div>
</template>

<script>
export default {
    props: ['title'],
    computed: {
        getTitle () {
            let title
            const path = this.$page.path
            // If a title is passed as a prop
            if (this.title) {
                title = this.title
            } else {
                const page = this.$site.pages.find((el) => el.path === path || el.path === path + "/");
                console.log(this.$page)
                title = page ? page.title : 'No Title'
            }
            
            return title
        },
        anchor () {
            const parts = this.$page.path.split("/");

            // Bascially if there's a trailing slash then get rid of the blank 
            if (!parts[parts.length - 1].length) { 
            parts.pop(); 
            }
            
            return parts[parts.length - 1]
        },
        // Full object list: //github.com/darrenjennings/vuepress-plugin-reading-time#usage
        readingTime() { 
            let minutes = this.$page.readingTime.minutes
            
            if (minutes < 1) {
                minutes = 1
            } else {
                minutes = (minutes - Math.floor(minutes) < .5) ? Math.floor(minutes) : Math.ceil(minutes)
            }

            return minutes 
        },
        // Full list of API: //vuepress.github.io/en/plugins/git-log/#api
        author() { return this.$page.git.author; },
        commits() { return this.$page.git.commits; },
        contributors() { return this.$page.git.contributors; },
        created() { return this.$page.git.created; },
        updated() { return this.$page.git.updated; }
    }
}
</script>