<script setup lang="ts">
withDefaults(defineProps<{color?:'blue'|'green'|'sand'|'gray'}>(),{color:'blue'})
</script>
<template><span class="base-badge" :class="'base-badge--'+color"><slot /></span></template>
<style scoped>
.base-badge{display:inline-flex;width:fit-content;align-items:center;border-radius:999px;padding:.3rem .65rem;font-size:.72rem;font-weight:750;line-height:1.2}.base-badge--blue{background:#e5f5f8;color:#07546b}.base-badge--green{background:#e6f4ed;color:#176b4c}.base-badge--sand{background:#f5eee3;color:#896b42}.base-badge--gray{background:#f1f5f9;color:#475569}
</style>