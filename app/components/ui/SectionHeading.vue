<script setup lang="ts">
withDefaults(defineProps<{eyebrow?:string;title:string;description?:string;centered?:boolean}>(),{centered:false})
</script>
<template><div class="section-heading" :class="{'section-heading--centered':centered}"><p v-if="eyebrow" class="eyebrow">{{eyebrow}}</p><h2>{{title}}</h2><p v-if="description" class="section-heading__description">{{description}}</p></div></template>
<style scoped>
.section-heading{max-width:680px;margin-bottom:2rem}.section-heading--centered{margin-inline:auto;text-align:center}.section-heading h2{margin:.55rem 0 0;font-size:clamp(1.75rem,4vw,2.5rem)}.section-heading__description{margin:.9rem 0 0;color:var(--eem-text-muted)}
</style>