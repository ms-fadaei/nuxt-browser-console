import { setupTest, createPage, url } from '@nuxt/test-utils'
const { resolve } = require('path')

describe('example project test', () => {
  setupTest({
    testDir: __dirname,
    fixture: 'example',
    rootDir: resolve(__dirname, '../example'),
    browser: true
  })

  test('should render page', async () => {
    const page = await createPage('/')
    const body = await page.innerHTML('body')
    expect(body).toContain('Works!')
  })

  test('server-side logs appear in the console', async () => {
    // create new tab
    const page = await createPage()

    // listen on console
    const logArray = []
    page.on('console', (msg) => {
      logArray.push({
        type: msg.type(),
        args: msg.text()
      })
    })

    // navigate to home
    await page.goto(url('/'))

    // check first call
    expect(logArray[0]).toMatchObject({
      type: 'startGroupCollapsed',
      args: 'Route: /'
    })

    // check second call
    expect(logArray[1]).toMatchObject({
      type: 'info',
      args: 'Message: this is server side log'
    })

    // check third call
    expect(logArray[2]).toMatchObject({
      type: 'warning',
      args: 'this is a warning!'
    })

    // check forth call
    expect(logArray[3].type).toBe('endGroup')
  })

  test('client-side logs appear in the console after server-side logs', async () => {
    // create new tab
    const page = await createPage()

    // listen on console
    const logArray = []
    page.on('console', (msg) => {
      logArray.push({
        type: msg.type(),
        args: msg.text()
      })
    })

    // navigate to home
    await page.goto(url('/'))

    // check fifth call
    expect(logArray[4]).toMatchObject({
      type: 'log',
      args: 'The page has been mounted!'
    })
  })
})
