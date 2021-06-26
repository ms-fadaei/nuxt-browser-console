<template>
  <div>Works!</div>
</template>

<script>
export default {
  asyncData({ $console, route }) {
    $console('groupCollapsed', `Route: ${route.fullPath}`)
    $console(
      'info',
      'Message:',
      `this is ${process.server ? 'server' : 'client'} side log`
    )
    $console('warn', 'this is a warning!')
    $console('groupEnd')
  },
  mounted() {
    this.$console('log', 'The page has been mounted!')
  }
}
</script>
