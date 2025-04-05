import AcctTypeDropdown from "./AcctTypeDropdown";

export default async function Accounts({ searchParams }) {
  console.log("Accounts - searchParams.type", (await searchParams).type);

  return (
    <>
      <AcctTypeDropdown />
      <br />
      <p>List of {(await searchParams).type} accounts</p>
    </>
  );
}
