import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Location from "./Location";
import { useState } from "react";
import Budget from "./Budget";
import Profile from "./Profile";

function OnboardLayout(props: { steps: number }) {
  const { steps } = props;
  const [step, setStep] = useState(0);

  const nextStep = () => () => {
    console.log("next step");
    setStep((prev) => (prev < steps - 1 ? prev + 1 : steps - 1));
  };

  const goBack = () => () => {
    console.log("go back");
    setStep((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="content">
      <div className="flex items-center w-full justify-between">
        <div className="flex-none">
          <Button variant={"outline"} onClick={goBack()}>
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex grow justify-center gap-[2rem]">
          {Array.from({ length: steps }).map((_, i) => (
            <div key={i} className="flex w-[10rem]">
              <Progress value={step < i ? 0 : 100} className="h-2" />
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        {step == 0 && <Location />}
        {step == 1 && <Budget />}
        {step == steps - 1 && <Profile />}
        {step < steps - 1 && (
          <Button className="w-[20rem] z-2" onClick={nextStep()}>
            <ArrowRightIcon className="mr-4" />
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default OnboardLayout;
