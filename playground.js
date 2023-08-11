
const { gptAnalyzeEmotions } = require('./controllers/emotionController');

// emotions = 'positive, neutral, negative'
// prompt = 'AI will take over the world.'

// prompt = 'I had the most amazing day at the park with my family.'
//prompt = 'My flight was delayed without any prior notice. I had to wait for hours at the airport.'
//prompt = 'I received the package today. It was wrapped in brown paper.'

// gptAnalyzeEmotions(prompt, emotions).then(emotion => {
//   console.log(emotion.toUpperCase())
// })

//emotions = 'happy, sad, surprised, confused'
//prompt = '😃'
//prompt = '😔'
//prompt = '😮'
//prompt = '🤔'

// gptAnalyzeEmotions(prompt, emotions).then(emotion => {
//     console.log(emotion.toUpperCase())
//   })