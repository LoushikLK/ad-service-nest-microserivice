import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoPersonCircle, IoPersonOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineWavingHand } from "react-icons/md";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useScrollPosition } from "@/hooks";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  console.log("scrollPosition", scrollPosition);
  return (
    <>
      <nav
        className={`hidden sticky top-0 z-[9990] h-20 w-full lg:flex items-center ${
          scrollPosition > 52
            ? "shadow-sm shadow-primary/10 bg-white transition-all ease-in-out duration-500"
            : "bg-transparent common-transition"
        }`}
      >
        {scrollPosition < 52 ? (
          <div className="absolute top-0 left-0 w-full h-full bg-rose-200 blur-3xl"></div>
        ) : null}
        <section className="main-container flex items-center justify-between gap-4">
          <aside className="font-black text-[3.5rem]">
            <div className="flex">
              <span className="text-primary mt-1 rotate-12">D</span>
              <span className="text-green-300 -mt-3 -rotate-6">L</span>
              <span className="text-rose-400 mt-2 rotate-12">C</span>
              <span className="text-orange-400 -mt-1.5 rotate-6">S</span>
              <span className="text-secondary mt-2 -rotate-12">K</span>
            </div>
          </aside>
          <ul
            className={`flex items-center justify-end gap-5 2xl:gap-7 font-medium ${
              scrollPosition > 52 ? "text-slate-800" : "text-white"
            }`}
          >
            <li className="">Why us</li>
            <li className="">Feature</li>
            <li className="">Resources</li>
            <li className="">Pricing</li>
            <li className="">How You Benefited!</li>
          </ul>
          <div
            className={`group relative flex items-center gap-2 border-2 h-10 px-4 rounded-full ${
              scrollPosition > 52 ? "border-slate-500" : "border-white"
            }`}
          >
            <HiMenuAlt1
              className={`text-2xl ${
                scrollPosition > 52 ? "text-slate-500" : " text-white"
              }`}
            />
            <IoPersonCircle
              className={`text-3xl ${
                scrollPosition > 52 ? "text-slate-500" : " text-white"
              }`}
            />
            <div className="scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 ease-in-out absolute z-[100] top-full right-0 w-60 bg-white rounded-md p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200">
              <Link href="/account">
                <p className="w-full flex items-center gap-2 text-left py-2 px-3 hover:bg-emerald-500/5 hover:text-emerald-500  rounded-md font-medium">
                  <span className="w-7 h-7 rounded-md grid place-items-center bg-emerald-500 text-white">
                    <MdOutlineWavingHand className="text-lg" />
                  </span>
                  Hi User
                </p>
              </Link>
              <Link href="/account">
                <p className="w-full flex items-center gap-2 text-left py-2 px-3 hover:bg-primary/5 hover:text-primary rounded-md font-medium">
                  <span className="w-7 h-7 rounded-md grid place-items-center bg-primary text-white">
                    <IoPersonOutline className="text-lg" />
                  </span>
                  My Profile
                </p>
              </Link>

              <p className="w-full flex items-center gap-2 text-left py-2 px-3 hover:bg-danger/5 hover:text-danger rounded-md font-medium cursor-pointer">
                <span className="w-7 h-7 rounded-md grid place-items-center bg-danger text-white">
                  <BiLogOutCircle className="text-lg" />
                </span>
                Signout
              </p>
            </div>
          </div>
        </section>
      </nav>
      {/* <ResponsiveNavbar /> */}
    </>
  );
};

export default Navbar;
