import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export default function Component() {
  return (
    <div className="p-8 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-[70rem] shadow-lg bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1727102406027-e7ae00b762b9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DZZ"
              alt="Placeholder image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <CardHeader>
              <CardTitle>Custom Card Component</CardTitle>
              <CardDescription>
                A card with a full-height image and custom buttons
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Nested Card 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      This is some placeholder content for the first nested
                      card. You can replace this with any content you like.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Nested Card 2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Here's some more placeholder content for the second nested
                      card. Feel free to customize this as needed.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Nested Card 2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Here's some more placeholder content for the second nested
                      card. Feel free to customize this as needed.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <Heart className="mr-2 h-4 w-4" /> Like
              </Button>
              <Button variant="outline">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
