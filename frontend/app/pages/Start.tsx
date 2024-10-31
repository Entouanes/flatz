import "../App.css";
import { Button } from "@/components/ui/button";

const Start = (props: {
  start: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { start } = props;

  return (
    <div className="flex py-[20rem] align-middle justify-center">
      <div className="content">
        <h1 className="text-4xl font-extrabold">
          A faster way to browse shared flats
        </h1>
        <h2 className="text-xl">Start for free without an account</h2>
        <div>
          <Button
            onClick={() => {
              start(true);
            }}
          >
            Let's go!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Start;
