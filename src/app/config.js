import { configure } from '@storybook/react'
import 'ui-tachyons-dark'

const req = require.context('../lib', true, /story\.js$/)

const loadStories = () => {
  req.keys().forEach(req)
}

configure(loadStories, module)
