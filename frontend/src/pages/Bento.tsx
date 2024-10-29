import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Bento = () => {
  return (
    <div className="flex justify-center align-middle pt-[10rem]">
      <Card>
        <CardHeader>
          <CardTitle>Meierhofplatz</CardTitle>
          <CardDescription>Kreis 6, Höngg</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-[70rem] gap-5">
            <div className="w-[30rem] aspect-w-2 aspect-h-1">
              <img
                className="rounded-lg object-cover ..."
                src="https://images.unsplash.com/photo-1702569111309-08df3eb7530f?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="chien"
              />
            </div>
            <div className="w-[40rem]">
              <img
                className="rounded-lg object-cover ..."
                src="https://images.unsplash.com/photo-1702569111309-08df3eb7530f?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="chien"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Bento;
