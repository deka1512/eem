<script setup lang="ts">
withDefaults(defineProps<{to?:string;href?:string;variant?:'primary'|'secondary'|'dark'|'ghost';size?:'sm'|'md'|'lg';type?:'button'|'submit'|'reset';disabled?:boolean;block?:boolean}>(),{variant:'primary',size:'md',type:'button',disabled:false,block:false})
</script>
<template>
<NuxtLink v-if="to" :to="to" class="base-button" :class="['base-button--'+variant,'base-button--'+size,{'base-button--block':block}]"><slot /></NuxtLink>
<a v-else-if="href" :href="href" class="base-button" :class="['base-button--'+variant,'base-button--'+size,{'base-button--block':block}]"><slot /></a>
<button v-else :type="type" :disabled="disabled" class="base-button" :class="['base-button--'+variant,'base-button--'+size,{'base-button--block':block}]"><slot /></button>
</template>
<style scoped>
.base-button{display:inline-flex;min-height:42px;align-items:center;justify-content:center;gap:.5rem;border:1px solid transparent;border-radius:.625rem;font-weight:700;line-height:1.2;text-decoration:none;cursor:pointer;transition:background-color 160ms,border-color 160ms,transform 160ms}
.base-button:hover:not(:disabled){transform:translateY(-1px)}.base-button:focus-visible{outline:3px solid rgb(22 135 232 / 35%);outline-offset:3px}.base-button:disabled{cursor:not-allowed;opacity:.55}
.base-button--sm{min-height:36px;padding:.55rem .9rem;font-size:.8125rem}.base-button--md{padding:.75rem 1.15rem;font-size:.875rem}.base-button--lg{min-height:50px;padding:.9rem 1.4rem;font-size:.9375rem}
.base-button--primary{background:var(--eem-primary);color:#fff}.base-button--primary:hover{background:var(--eem-primary-hover)}
.base-button--secondary{background:var(--eem-surface);color:var(--eem-secondary)}.base-button--secondary:hover{background:var(--eem-surface-hover)}
.base-button--dark{background:var(--eem-secondary);color:#fff}.base-button--dark:hover{background:#064354}
.base-button--ghost{border-color:var(--eem-border);background:transparent;color:var(--eem-secondary)}.base-button--ghost:hover{background:var(--eem-surface)}
.base-button--block{width:100%}
</style>