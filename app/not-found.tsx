import { NotFoundContent } from "./_components/not-found-content"

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return <NotFoundContent />
}
