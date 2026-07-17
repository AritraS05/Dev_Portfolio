import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import EmailCopyCard from "@/components/site/email-copy-card";
import TopNav from "@/components/site/top-nav";

export default function Home() {
  return (
    <main className="relative bg-white text-neutral-900 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <TopNav />
        <Hero />
        <RecentProjects />
        <Experience />
        <Clients />
        <EmailCopyCard />
        <Footer />
      </div>
    </main>
  );
}
