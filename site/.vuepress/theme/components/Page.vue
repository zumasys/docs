<template>
  <main class="page">
    <slot name="top" />

      <div class="theme-default-content">
        <Breadcrumbs />

        <Content />
      </div>

      <GitLog />

      <PageEdit />

      <Vssue />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import Breadcrumbs from "@theme/components/Breadcrumbs.vue";
import GitLog from "@theme/components/GitLog.vue";
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { Breadcrumbs, GitLog, PageEdit, PageNav },
  props: ["sidebarItems"]
};
</script>

<style lang="stylus">
@require '~@parent-theme/styles/wrapper.styl';

.page 
  padding-bottom: 2rem;
  display: block;

.vssue
  @extend $wrapper;
  padding-left: 0;
  padding-right: 0;

</style>
