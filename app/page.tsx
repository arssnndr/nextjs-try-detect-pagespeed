import { headers } from "next/headers";

export default async function Home() {
  const headersList = headers();
  const userAgent = (await headersList).get("user-agent") || "";
  const isLighthouse = userAgent.includes("Lighthouse");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1 className="text-4xl sm:text-6xl font-bold">
          User Agent:
          <span className="text-[#f7ab0a]"> {userAgent}</span>
        </h1>

        <br />
        <br />
        <br />

        {isLighthouse && (
          <>
          <h1 className="text-4xl sm:text-6xl font-bold">
            Lighthouse detected!
          </h1>
          </>
        )}

      </main>
    </div>
  );
}