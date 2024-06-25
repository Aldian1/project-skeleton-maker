import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VoiceAnalysisCard } from "./voice-analysis-card";

export function CardVoice() {
  const [isRecording, setIsRecording] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [showAnalysis, setShowAnalysis] = React.useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handleSave = () => {
    setShowAnalysis(true);
  };

  if (showAnalysis) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <VoiceAnalysisCard />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <Card
        className={`p-8 rounded-2xl shadow-lg w-full max-w-lg h-96 transition-colors duration-500 ${
          isRecording ? "bg-red-500" : ""
        } ${isFlipped ? "rotate-y-180" : ""} transform-style-3d`}
      >
        <CardContent
          className={`flex flex-col items-center justify-center space-y-6 ${
            isRecording ? "text-white" : ""
          } ${isFlipped ? "rotate-y-180" : ""} transform-style-3d`}
        >
          {!isFlipped ? (
            <>
              <div
                className={`relative w-20 h-20 transition-transform duration-500 ${
                  isRecording ? "scale-150" : ""
                }`}
              >
                {isRecording ? (
                  <Button
                    variant="ghost"
                    size="lg"
                    className="absolute inset-0 bg-white rounded-full animate-pulse"
                    onClick={handleStopRecording}
                  >
                    <CircleStopIcon className="w-8 h-8 text-red-500" />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="lg"
                    className="absolute inset-0 bg-red-500 rounded-full"
                    onClick={handleStartRecording}
                  >
                    <MicIcon className="w-8 h-8 text-white" />
                  </Button>
                )}
              </div>
              <div className="text-4xl font-bold">00:12</div>
              <Button
                variant="outline"
                size="lg"
                className={isRecording ? "text-black" : ""}
                onClick={handleSave}
              >
                Save
              </Button>
            </>
          ) : (
            <CheckIcon className="w-20 h-20 text-green-500" />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CircleStopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <rect width="6" height="6" x="9" y="9" />
    </svg>
  );
}

function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}