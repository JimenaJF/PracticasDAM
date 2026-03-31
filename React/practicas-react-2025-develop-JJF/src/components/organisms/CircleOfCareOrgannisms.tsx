import { CircleBody } from "../molecules/CircleBody";
import { CircleNav } from "../molecules/CircleNav";
import CircleOfCare from "../molecules/CircleOfCare";

export function CircleOfCareOrganisms({nameCircleOfCare, imgCircle,pending,cards, textCircleBody, textNav1, textNav2, textNav3 }: { pending: number; cards: any[]; textCircleBody: string; textNav1: string; textNav2: string; textNav3: string; imgCircle: string; nameCircleOfCare: string  }) {
  return (
    <>
      <CircleOfCare name={nameCircleOfCare} image={imgCircle} />

      <div className="circle">
        <div className="circle_container">
          <CircleNav pending={pending} textNav1={textNav1} textNav2={textNav2} textNav3={textNav3} />
          <CircleBody cards={cards} text={textCircleBody} />
        </div>
      </div>
    </>
  );
}