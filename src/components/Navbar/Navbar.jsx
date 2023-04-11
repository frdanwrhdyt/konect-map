import { Link, useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function Example({ children }) {
  const location = useLocation();

  return (
    <>
      <div className="min-h-full fixed top-0 w-full">
        <nav
          className={
            location.pathname !== "/about"
              ? " justify-end flex  items-center py-2 px-8 bg-cyan-900 shadow-lg"
              : "justify-between flex  items-center py-2 px-8 bg-cyan-900 shadow-lg"
          }
        >
          {location.pathname !== "/about" ? (
            <>
              <button className="text-white px-3  py-2 rounded-md  hover:bg-white hover:text-cyan-900 duration-300">
                <Link to="/about">Tentang Aplikasi</Link>
              </button>
              <div className="text-white py-2 px-4 ">V 1.0.0 (Beta)</div>
            </>
          ) : (
            <>
              <button className="text-white px-3  py-2 rounded-md flex items-center hover:bg-white hover:text-cyan-900 duration-300">
                <ChevronLeftIcon className="h-5 w-5 " />
                <Link to="/">Kembali</Link>
              </button>
              <div className="flex justify-end">
                <button className=" px-3  py-2 rounded-md bg-white text-cyan-900 ">
                  <Link to="/about">Tentang Aplikasi</Link>
                </button>
                <div className="text-white py-2 px-4 ">V 1.0.0 (Beta)</div>
              </div>
            </>
          )}
        </nav>
        <main>
          <div className="mx-auto max-w-screen ">{children}</div>
        </main>
      </div>
    </>
  );
}
