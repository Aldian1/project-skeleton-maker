import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Our Website</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            This is the initial version of our website. Stay tuned for more updates!
          </p>
          <Button className="mt-4" variant="primary">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;