import { setupTest, expectModuleToBeCalledWith, getNuxt } from '@nuxt/test-utils'
const { resolve } = require('path')

describe('setup module without config', () => {
  setupTest({
    testDir: __dirname,
    fixture: 'example',
    rootDir: resolve(__dirname, '../example'),
    config: {}
  })

  const defaultConfig = {
    namespace: 'console'
  }

  test('should inject plugin', () => {
    // inject plugin
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringMatching(/store/),
      fileName: expect.stringMatching(/store/),
      options: defaultConfig
    })

    // inject store
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringMatching(/plugins/),
      fileName: expect.stringMatching(/plugins/),
      options: defaultConfig
    })
  })
})

describe('setup module with config', () => {
  setupTest({
    testDir: __dirname,
    fixture: 'example',
    rootDir: resolve(__dirname, '../example'),
    config: {
      browserConsole: {
        namespace: 'logs'
      }
    }
  })

  test('should inject plugin', () => {
    // inject plugin
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringMatching(/store/),
      fileName: expect.stringMatching(/store/),
      options: getNuxt().options.browserConsole
    })

    // inject store
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringMatching(/plugins/),
      fileName: expect.stringMatching(/plugins/),
      options: getNuxt().options.browserConsole
    })
  })
})
