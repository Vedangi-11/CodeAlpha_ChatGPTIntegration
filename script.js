const ws=new WebSocket('ws://localhost:8080');
ws.onopen = function() {
    console.log('WebSocket connection established');
  };

  ws.onmessage = function(event) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = 'ChatGPT: ' + event.data;
    document.getElementById('answer').appendChild(messageDiv);
  };

  function sendMessage() {
    const userInput = document.getElementById('ask_query').value;
    const messageDiv = document.createElement('div');
    messageDiv.textContent = 'You: ' + userInput;
    document.getElementById('answer').appendChild(messageDiv);
    ws.send(userInput);
    document.getElementById('ask_query').value = '';
  }