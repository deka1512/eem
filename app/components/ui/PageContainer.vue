<template><div class="page-container"><slot /></div></template>
<style scoped>
.page-container{width:min(100% - 2rem,var(--eem-container-width));margin-inline:auto}
@media(min-width:768px){.page-container{width:min(100% - 3rem,var(--eem-container-width))}}
</style>