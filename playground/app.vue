<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
const { $console } = useNuxtApp()

$console.groupCollapsed("Route: '/'")
$console.info('Message:', `this is ${process.server ? 'server' : 'client'} side log`)
$console.warn('this is a warning!')
$console.groupEnd()

onMounted(() => {
  $console.log('The page has been mounted!')
})
</script>
