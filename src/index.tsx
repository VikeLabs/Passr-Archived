import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import './index.css'

import App from './components/App/App'

console.log('Starting Application')

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
)
