// script.js

document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById('chat-history');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = sender;
        messageElement.textContent = message;
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight; // Auto-scroll to latest message
    }

    sendButton.addEventListener('click', () => {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user-message');
            messageInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                addMessage('This is a simulated response from the bot.', 'bot-message');
            }, 1000);
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
