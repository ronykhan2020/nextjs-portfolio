import Footer from "@/component/footer";
import LeftSide from "@/component/left-side";
import RightSide from "@/component/right-side";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 h-full w-full gap-10 xl:flex-row mx-auto  ">
      {/* Left Side */}
       <LeftSide/>

      {/* Right Side */}
     <RightSide/>

     {/* Footer */}
     <div className='flex  w-full px-8 pb-10 xl:hidden'>
       
      <Footer/>
      </div>


    </main>
  );
}
