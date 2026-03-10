<script setup lang="ts">
    interface MenuItemProps {
        to: string;
        label: string;
    }

    defineProps<MenuItemProps>();
</script>

<template>
    <RouterLink :to="to" class="block px-4 py-2 hover:bg-zinc-800 rounded">{{ label }}</RouterLink>
</template>
