<script setup lang="ts">
    import MenuItem from './MenuItem.vue';
</script>

<template>
    <nav class="flex flex-col gap-2">
        <MenuItem to="/" label="Home"/>
        <MenuItem to="/counter" label="Contador"/>
        <MenuItem to="/auth" label="Autenticação"/>
    </nav>
</template>