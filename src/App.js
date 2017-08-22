import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
import ChatBot from './ChatBot.js'

class App extends Component {
  render() {
    const theme = {
      background: '#fff',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#14d0d6',
      headerFontColor: '#fff',
      botBubbleColor: '#14d0d6',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    }

    return (
      <div>
        <ThemeProvider theme={theme}>
          <ChatBot />
        </ThemeProvider>
      </div>
    )
  }
}

export default App
