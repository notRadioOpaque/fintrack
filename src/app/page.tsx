import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen px-12 pb-12">
      {/* TODO: header component goes here */}
      <Header />

      {/* TODO: main content goes here */}
      <main className="flex flex-1 border">
        <Sidebar />

        <section></section>
      </main>
    </div>
  );
}
