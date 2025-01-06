declare global {
    interface Window {
      botpressWebChat: {
        init: (config: {
          composerPlaceholder: string;
          botConversationDescription: string;
          botId: string;
          hostUrl: string;
          messagingUrl: string;
          clientId: string;
          webhookId: string;
          lazySocket: boolean;
          stylesheet: string;
          themeName: string;
          frontendVersion: string;
          theme: string;
          themeColor: string;
          botName: string;
          useSessionStorage: boolean;
          enablePersistHistory: boolean;
        }) => void;
        open: () => void;
      };
    }
  }
  
  export {};