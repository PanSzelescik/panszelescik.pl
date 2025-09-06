import Image from "next/image";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="grid min-h-dvh items-center justify-items-center">
      <main className="flex flex-col items-center gap-8 sm:flex-row">
        <Image
          src="/web-app-manifest-512x512.png"
          alt="PanSzelescik"
          width={256}
          height={256}
          priority
          fetchPriority={"high"}
        />
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-4xl font-bold">PanSzelescik</h1>
        </div>
      </main>
    </div>
  );
}
