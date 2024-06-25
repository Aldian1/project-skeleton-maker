import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ResponsivePie } from "@nivo/pie";
import { Button } from "@/components/ui/button";
import { MobilePhoneNumberCard } from "./mobile-phone-number-card";

export function VoiceAnalysisCard() {
  const [showMobilePhoneNumberCard, setShowMobilePhoneNumberCard] = useState(false);

  const handleSubmit = () => {
    setShowMobilePhoneNumberCard(true);
  };

  if (showMobilePhoneNumberCard) {
    return <MobilePhoneNumberCard />;
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Emotion Analysis</CardTitle>
        <CardDescription>Analysis of a 2:32 minute voice recording</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PlayIcon className="w-5 h-5" />
            <span>Play Recording</span>
          </div>
          <div className="text-sm text-muted-foreground">2:32</div>
        </div>
        <PieChart className="w-full aspect-square" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span>Happy</span>
            </div>
            <span>52%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span>Neutral</span>
            </div>
            <span>28%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span>Angry</span>
            </div>
            <span>12%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span>Sad</span>
            </div>
            <span>8%</span>
          </div>
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
      </CardContent>
    </Card>
  );
}

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PlayIcon(props) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}