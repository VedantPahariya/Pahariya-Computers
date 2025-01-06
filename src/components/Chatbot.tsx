import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    window.botpressWebChat.init({
      composerPlaceholder: "Chat with Pahariya Computers",
      botConversationDescription: "Let's kick off our conversation with a warm hello!",
      botId: "dc4ff08d-3e8a-4c8e-86d8-0025d62aa89f",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "dc4ff08d-3e8a-4c8e-86d8-0025d62aa89f",
      webhookId: "aa70629f-8ea6-4b1c-a102-53b874648089",
      lazySocket: true,
      stylesheet: "https://webchat-styler-css.botpress.app/prod/code/70721ca7-c863-4239-9850-7d7986492934/v47941/style.css",
      themeName: "prism",
      frontendVersion: "v1",
      theme: "prism",
      themeColor: "#dd0404",
      botName: "Pahariya Computers",
      useSessionStorage: true,
      enablePersistHistory: false,
    });
  }, []);

  return null;
};

export default Chatbot;