import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col sm:flex-row items-center gap-8">
        <Image
          src="/icon.png"
          alt="PanSzelescik"
          width={256}
          height={256}
          priority
        />
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-4xl font-bold">PanSzelescik</h1>
        </div>
      </main>
    </div>
  );
}
