import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <h2>Home Page</h2>
      <Link href="/dashboard">Parallel Routing World</Link>
    </main>
  );
}
