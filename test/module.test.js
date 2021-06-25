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
    // inject store
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringMatching(/plugins[\\/]index\.js/),
      fileName: expect.stringMatching(/console[\\/]plugins[\\/]index\.js/),
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
    // inject store
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringMatching(/plugins[\\/]index\.js/),
      fileName: expect.stringMatching(/logs[\\/]plugins[\\/]index\.js/),
      options: getNuxt().options.browserConsole
    })
  })
})
