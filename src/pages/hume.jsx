import React from "react";
import Controls from "@/components/Controls";
import Messages from "@/components/Messages";
import { VoiceProvider } from "@humeai/voice-react";

const accessToken = process.env.REACT_APP_HUME_ACCESS_TOKEN;

export default function HumePage() {
  return (
    <VoiceProvider auth={{ type: "accessToken", value: accessToken }}>
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <Messages />
        <Controls />
      </div>
    </VoiceProvider>
  );
}