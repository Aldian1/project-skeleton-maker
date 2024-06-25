import React from "react";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { Button } from "@/components/ui/button";

export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();

  if (readyState === VoiceReadyState.OPEN) {
    return (
      <Button
        onClick={() => {
          disconnect();
        }}
      >
        End Session
      </Button>
    );
  }

  return (
    <Button
      onClick={() => {
        connect()
          .then(() => {
            /* handle success */
          })
          .catch(() => {
            /* handle error */
          });
      }}
    >
      Start Session
    </Button>
  );
}