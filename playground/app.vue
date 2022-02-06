<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
const { $console } = useNuxtApp()
$console.log('Hello from Nuxt module playground form ' + (process.server ? 'server' : 'client'))
</script>
