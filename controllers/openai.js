const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports.openai = async (req, res) => {
    const { prompt } = req.body;
    const response = await openai.createImage({
        
        prompt: prompt,
        n: 1,
        

    
});
    console.log(response.data);
    // render index with generated image
    res.render('index', { image: response.data.data[0].url });

}