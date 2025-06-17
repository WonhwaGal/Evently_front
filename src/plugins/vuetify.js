// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const eventlyLight = {
  dark: false,
  colors: {
    primary: '#FB8C00',
    secondary: '#FB8C00',
    background: '#FB8C00',
    surface: '#FB8C00',
    error: '#FF5252',
    success: '#4CAF50',
    info: '#2196F3',
    warning: '#FB8C00',
  }
}

const eventlyDark = {
  dark: true,
  colors:{
    primary: '#238025',
    secondary: '#238025',
    background: '#238025',
    surface: '#238025',
    error: '#610909',
    success: '#0c530f',
    info: '#0e3b60',
    warning: '#bf8a45',
  }
}
export default createVuetify({
  theme: {
    defaultTheme: 'eventlyDark',
    themes:{
      eventlyLight,
      eventlyDark
    }
  },
})
