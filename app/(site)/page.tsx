import Image from "next/image";

export const dynamic = "force-static";

const externalLinks = [
  {
    name: "BedrockHost.pl",
    url: "https://bedrockhost.pl/?utm_source=panszelescik.pl&utm_medium=website&utm_campaign=homepage_links",
    icon: "https://bedrockhost.pl/assets-static/favicon/bedrockhost-v2.svg",
  },
  {
    name: "Serwery-Minecraft.pl",
    url: "https://serwery-minecraft.pl/?utm_source=panszelescik.pl&utm_medium=website&utm_campaign=homepage_links",
    icon: "/serwery-minecraft.webp",
  },
  {
    name: "Minecraft-Servers.gg",
    url: "https://minecraft-servers.gg/?utm_source=panszelescik.pl&utm_medium=website&utm_campaign=homepage_links",
    icon: "/minecraft-servers.webp",
  },
  {
    name: "Serwery-Hytale.pl",
    url: "https://serwery-hytale.pl/?utm_source=panszelescik.pl&utm_medium=website&utm_campaign=homepage_links",
    icon: "https://serwery-hytale.pl/images/logo-128.png",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center p-8 pb-40">
      <main className="flex flex-col items-center gap-8 sm:flex-row">
        <Image
          src="/icon.png"
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
      <footer className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-center gap-4 p-4">
        {externalLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            className="transition-transform hover:scale-110 motion-reduce:transition-none"
            aria-label={link.name}
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={64}
              height={64}
              className="rounded-lg"
            />
          </a>
        ))}
      </footer>
    </div>
  );
}
