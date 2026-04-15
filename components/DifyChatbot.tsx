'use client';


import Script from 'next/script';

const girlAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
    <rect width="100%" height="100%" rx="32" fill="#FCE7F3"/>
    <text x="50%" y="54%" font-size="34" text-anchor="middle" dominant-baseline="middle">👧</text>
  </svg>
`)}`;

export function DifyChatbot() {
  return (
    <>
      <Script id="dify-chatbot-config" strategy="afterInteractive">
        {`
          window.difyChatbotConfig = {
            token: 'snsIplze7mAPdFGy',
            inputs: {},
            systemVariables: {},
            userVariables: {
              avatar_url: '${girlAvatar}',
              name: 'user'
            },
          };
        `}
      </Script>
      <Script
        src="https://udify.app/embed.min.js"
        id="snsIplze7mAPdFGy"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        #dify-chatbot-bubble-button {
          background-color: #1c64f2 !important;
        }
        #dify-chatbot-bubble-window {
          width: 24rem !important;
          height: 40rem !important;
        }
      `}</style>
    </>
  );
}
