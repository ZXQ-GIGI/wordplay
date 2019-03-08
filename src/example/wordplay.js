const config = {
  name: "不知道啊",  
  author: "haha",
  title: "WORDPLAY",
  subTitle: "This is a wordplay, this is subtltle.", 
  backgroundMusic: "https://m10.music.126.net/20190307143539/23e50e0e285eddd38d2f7d28e3b77744/ymusic/4831/e469/3558/d5e2bd7a328072eb01216a3ef07ac357.mp3",
  backgroundImage: "http://wx2.sinaimg.cn/mw690/0060lm7Tly1g0s2v40p8gj31c00u0ald.jpg",
  chapters: [
    {
      name: "Chapter 1",
      title: "Chapter 1",
      subTitle: "Do you know? This is Chapter 1.",
      backgroundMusic: "",
      backgroundImage: "http://wx2.sinaimg.cn/mw690/0060lm7Tly1g0u6ceu2mlj31400p0adl.jpg",
      duration: 2,
      transition: "",
      dialogues: [
        {
          name: "Dialogue 1",
          narration: "",
          caption: "This is Dialogue 1",
          duration: 0,
          actions: [
            {
              name: "Action 1",
              type: "next"
            }
          ]
        },
        {
          name: "Dialogue 2",
          narration: "",
          caption: "This is Dialogue 2",
          duration: 0,
          actions: [
            {
              name: "Action 2",
              type: "jump",
              next: "Dialogue 3"
            }
          ]
        },
        {
          name: "Dialogue 3",
          narration: "",
          caption: "This is Dialogue 3",
          duration: 0,
          actions: [
            {
              type: "end",
              name: "Action 3"
            }
          ]
        }
      ]
    },
    {
      name: "Chapter 2",
      title: "Chapter 2",
      subTitle: "Do you know? This is Chapter 2.",
      backgroundMusic: "",
      backgroundImage: "http://wx2.sinaimg.cn/mw690/0060lm7Tly1g0u6ceu2mlj31400p0adl.jpg",
      duration: 2,
      transition: "",
      dialogues: [
        {
          name: "Dialogue 1",
          narration: "",
          caption: "This is Dialogue 1",
          duration: 0,
          actions: [
            {
              name: "Action 1",
              type: "next"
            }
          ]
        },
        {
          name: "Dialogue 2",
          narration: "",
          caption: "This is Dialogue 2",
          duration: 0,
          actions: [
            {
              name: "Action 2",
              type: "jump",
              next: "Dialogue 3"
            }
          ]
        },
        {
          name: "Dialogue 3",
          narration: "",
          caption: "This is Dialogue 3",
          duration: 0,
          actions: [
            {
              type: "end",
              name: "Action 3"
            }
          ]
        }
      ]
    },

  ]
}

export default config;