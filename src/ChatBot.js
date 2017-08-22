import React, { Component } from 'react'
import Bot from 'react-simple-chatbot'


class ChatBot extends Component {

  render() {
    return (
      <Bot
        steps={[
          {
            id: '1',
            message: 'いつの天気が知りたいですか？',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: '今日の天気', trigger: '3' },
              { value: 2, label: '明日の天気', trigger: '4' },
              { value: 3, label: '明後日の天気', trigger: '5' },
            ],
          },
          {
            id: '3',
            message: '晴れ',
            trigger: '6',
          },
          {
            id: '4',
            message: '曇り',
            trigger: '6',            
          },
          {
            id: '5',
            message: '雨',
            trigger: '6',
          },
          {
            id: '6',
            message: '他にも知りたいですか？',
            trigger: '7',
          },
          {
            id: '7',
            options: [
              { value: 1, label: 'もういい', end: true},
              { value: 2, label: 'はい', trigger: '2' },
            ]
          },

        ]}
      />
    )
  }
  
}

export default ChatBot