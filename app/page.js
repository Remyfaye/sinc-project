import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen ">
      <Header />
      <Hero />
      <Landing />
      <Footer />
    </main>
  );
}
