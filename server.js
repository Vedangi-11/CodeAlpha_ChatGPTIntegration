const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    // Handle message from client
    // Forward the message to ChatGPT
    // Send ChatGPT's response back to the client
  });

  ws.on('close', function() {
    console.log('Client disconnected');
  });
});
const axios = require('axios');
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

async function getChatGPTResponse(userInput) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: userInput,
        max_tokens: 150
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        }
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error in getting ChatGPT response:', error);
    return 'Sorry, I am unable to process your request at the moment.';
  }
}