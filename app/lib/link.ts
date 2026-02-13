const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export default function link(link: string) {
  return link.startsWith("/") ? `${BASE_URL}${link}` : `${BASE_URL}/${link}`;
}
