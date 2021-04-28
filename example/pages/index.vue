<template>
  <div>
    Works!
  </div>
</template>

<script>
export default {
  asyncData ({ app, route }) {
    app.$console('groupCollapsed', `Route: ${route.fullPath}`)
    app.$console('info', 'Message:', `this is ${process.server ? 'server' : 'client'} side log`)
    app.$console('warn', 'this is a warning!')
    app.$console('groupEnd')
  },
  mounted () {
    this.$console('log', 'The page has been mounted!')
  }
}
</script>
