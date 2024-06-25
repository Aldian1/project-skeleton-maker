import React from "react";
import Controls from "@/components/Controls";
import Messages from "@/components/Messages";
import { VoiceProvider } from "@humeai/voice-react";

const accessToken = "YOUR_HARD_CODED_ACCESS_TOKEN";
const secretKey = "YOUR_HARD_CODED_SECRET_KEY";

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