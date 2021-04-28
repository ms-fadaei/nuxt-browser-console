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
      src: expect.stringContaining('store\\index.js'),
      fileName: 'console\\store\\index.js',
      options: defaultConfig
    })

    // inject store
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringContaining('plugins\\index.js'),
      fileName: 'console\\plugins\\index.js',
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
    const { namespace } = getNuxt().options.browserConsole

    // inject plugin
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringContaining('store\\index.js'),
      fileName: `${namespace}\\store\\index.js`,
      options: getNuxt().options.browserConsole
    })

    // inject store
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringContaining('plugins\\index.js'),
      fileName: `${namespace}\\plugins\\index.js`,
      options: getNuxt().options.browserConsole
    })
  })
})
