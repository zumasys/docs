<template>
    <div class="page-header-details">
        <p>
            <strong>Updated:</strong> {{ created }}<br />
            <strong>Created:</strong> {{ updated }}<br />
            <strong>Last Updated By:</strong> {{ author }}<br />
            <strong>Read Time:</strong> {{ readingTime }} minute(s)<br />
            
        </p>
    </div>
</template>

<script>
export default {
    computed: {
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