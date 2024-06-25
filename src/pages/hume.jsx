import React from "react";
import Controls from "@/components/Controls";
import Messages from "@/components/Messages";
import { VoiceProvider } from "@humeai/voice-react";

const accessToken = "kRMrhCBbNdXvjBV7noMsMe5tA85HAd014cMllyU8IpABQky0";
const secretKey = "kRMrhCBbNdXvjBV7noMsMe5tA85HAd014cMllyU8IpABQky0";

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