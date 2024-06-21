import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const FOOTER_ARR = [
  {
    _id: "1",
    title: "Products",
    arr: [
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
    ],
  },
  {
    _id: "2",
    title: "Community",
    arr: [
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
    ],
  },
  {
    _id: "3",
    title: "Contacts",
    arr: [
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
      {
        path: "",
        title: "Menus one",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-700 py-8 md:py-12">
      <section className="main-container flex flex-col">
        <aside className="w-full flex flex-col lg:flex-row justify-between gap-5 pb-8 md:pb-12 border-b">
          <div className="w-full lg:w-2/5 font-black text-[3.25rem]">
            <div className="flex">
              <span className="text-primary mt-1 rotate-12">D</span>
              <span className="text-green-300 -mt-3 -rotate-6">L</span>
              <span className="text-rose-400 mt-2 rotate-12">C</span>
              <span className="text-orange-400 -mt-1.5 rotate-6">S</span>
              <span className="text-secondary mt-2 -rotate-12">K</span>
            </div>
            <p className="w-full lg:w-3/4 tracking-wide text-white text-small font-medium pt-5">
              It encompasses activities such as planning, creating, scheduling,
              analyzing, and optimizing social media posts.
            </p>
          </div>
          <div className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-5">
            {FOOTER_ARR?.map((curElm) => (
              <div className="flex flex-col gap-5" key={curElm._id}>
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-white">
                  {curElm.title}
                </h4>
                <aside className="flex flex-col gap-2 text-white text-small">
                  {curElm?.arr?.map((innerElm, i) => (
                    <p
                      className="w-fit hover:text-slate-200 hover:underline cursor-pointer"
                      key={i}
                    >
                      {innerElm.title}
                    </p>
                  ))}
                </aside>
              </div>
            ))}
          </div>
        </aside>
        <aside className="flex flex-col gap-5 lg:flex-row py-6">
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <button className="btn-gradient py-2 px-5 w-fit text-sm">
              Know about AI Test Editor
            </button>
          </div>
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center lg:place-items-start">
            <div className="flex items-center gap-4 text-white">
              <a href="#" target="_blank" rel="noreferrer noopener">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener">
                <FaPinterest className="text-xl" />
              </a>
            </div>
            <div className="flex gap-4 items-center text-white text-sm">
              <p className="border-r pr-4 cursor-pointer">Terms & Conditions</p>
              <p className="cursor-pointer">Privacy Policy</p>
            </div>
          </div>
        </aside>
        <aside className="tracking-wider text-center capitalize flex items-center justify-center text-sm text-white pt-0 lg:pt-2">
          &copy; {new Date().getFullYear()}
          <div className="flex font-semibold pl-2 pr-1">
            <span className="text-primary mt-1 rotate-12">D</span>
            <span className="text-green-300 -mt-1 -rotate-6">L</span>
            <span className="text-rose-400 mt-1 rotate-12">C</span>
            <span className="text-orange-400 -mt-1 rotate-6">S</span>
            <span className="text-secondary mt-1 -rotate-12">K</span>
          </div>
          . All Rights Reserved.
        </aside>
      </section>
    </footer>
  );
};

export default Footer;
