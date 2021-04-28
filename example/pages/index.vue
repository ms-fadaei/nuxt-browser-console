<template>
  <div>
    Works!
  </div>
</template>

<script>
const defaultStyle = 'background: #1b5e20;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em;'

export default {
  asyncData ({ app, route }) {
    app.$console('groupCollapsed', `%cRoute: ${route.fullPath}`, defaultStyle)
    app.$console('info', 'Message:', `this is ${process.server ? 'server' : 'client'} side log`)
    app.$console('groupEnd')
  },
  mounted () {
    this.$console('log', 'The page has mounted!')
  }
}
</script>
