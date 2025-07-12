import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center">
      <main className="flex flex-col items-center gap-8 sm:flex-row">
        <Image
          src="/icon.png"
          alt="PanSzelescik"
          width={256}
          height={256}
          priority={true}
        />
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-4xl font-bold">PanSzelescik</h1>
        </div>
      </main>
    </div>
  );
}
