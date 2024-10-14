import CountingComponent from "../CountingComponent";

export default function Counter() {
  return (
    <>
      <div className="mx-10">
        <p>Installed Capacity</p>
        <div className="text-center">
          <CountingComponent start={1} end={40} duration={2200} /> +MW{" "}
        </div>
      </div>
      <div className="mx-10 text-center">
        <p>Team</p>
        <div className="text-center">
          <CountingComponent start={1} end={8} duration={2800} /> {" "}
        </div>
      </div>
    </>
  );
}
