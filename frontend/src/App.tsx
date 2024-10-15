import { useState } from "react";
import OnboardLayout from "./pages/OnboardLayout";
import Start from "./pages/Start";

function App() {
  const [onBoard, setOnboard] = useState(false);
  return (
    <>{onBoard ? <OnboardLayout steps={3} /> : <Start start={setOnboard} />}</>
  );
}

export default App;
