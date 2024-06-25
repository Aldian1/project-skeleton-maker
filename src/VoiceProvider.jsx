import React, { useState, useEffect } from 'react';
import { VoiceProvider as HumeVoiceProvider } from '@humeai/voice-react';
import { fetchAccessToken } from '@humeai/voice';

export default function VoiceProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    async function getToken() {
      const token = await fetchAccessToken({
        apiKey: import.meta.env.VITE_HUME_API_KEY,
        secretKey: import.meta.env.VITE_HUME_SECRET_KEY,
      });
      setAccessToken(token);
    }
    getToken();
  }, []);

  if (!accessToken) {
    return <div>Loading...</div>;
  }

  return (
    <HumeVoiceProvider auth={{ type: 'accessToken', value: accessToken }}>
      {children}
    </HumeVoiceProvider>
  );
}