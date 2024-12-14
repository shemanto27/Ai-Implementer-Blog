'use client'
import AllBlogsCard from "@/components/custom/AllBlogsCard";
import { Header } from "@/components/custom/Header";
import Footer from './../components/custom/Footer';



export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <Header></Header>
      <AllBlogsCard></AllBlogsCard>
      <Footer></Footer>
    </div>
  );
}
