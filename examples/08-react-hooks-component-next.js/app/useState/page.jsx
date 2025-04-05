import Bulb from "./Bulb";
import Counter from "./Counter";

export default async function BulbPage() {
  return (
    <>
      <Counter startValue={3} />
      <Bulb startValue={3} />
    </>
  );
}

