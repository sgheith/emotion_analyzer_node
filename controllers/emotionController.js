const openai = require('../config/openaiConfig')

const gptAnalyzeEmotions = async (req, res) => {

    system_prompt = `You are capable of analyzing the sentiment of a given text.
        You will classify the sentiment of a given text into ONLY ONE of these emotions: ${req.body.emotions}.
        After classifying the text, respond with the emotion ONLY.`

    user_prompt = `The text to analyze is:  ${req.body.prompt}`

    messages = [
        { 'role': 'system', 'content': system_prompt },
        { 'role': 'user', 'content': user_prompt }
    ]

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 0,
        max_tokens: 128
    })

    //console.log(response.data.choices[0].message.content)

    content = response.data.choices[0].message.content

    if (content == '')
        content = 'N/A'

    res.status(200).json({
        content: content
    })
}

module.exports = { gptAnalyzeEmotions }