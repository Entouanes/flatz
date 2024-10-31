"use client";

import Bento from "./pages/Bento";
import OnboardLayout from "./pages/OnboardLayout";
import Start from "./pages/Start";
import { useState } from "react";
export default function Home() {
  const [onBoard, setOnboard] = useState(false);
  return (
    <>{onBoard ? <OnboardLayout steps={3} /> : <Start start={setOnboard} />}</>
    // <>
    //   <Bento />
    // </>
  );
}
