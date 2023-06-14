import { Link } from "react-router-dom";
import { ReactComponent as PawPrint } from "../assets/images/Paw_Print_optimized.svg";
import React, { useEffect } from "react";
import Navbar from "../components/navbar";

export default function Error() {
    useEffect(() => {
        document.title = "404 - Misty Rose";
    }, []);
    return (
        <div className="mx-auto overflow-clip">
            <div className="overflow-clip -z-10 absolute right-0 mt-20 -mr-40">
                <PawPrint fill="#C897E626" className="scale-90 rotate-30" />
            </div>
            <div className="flex flex-col justify-center place-content-center ">
                <div className="flex z-5 mb-10">
                    <Navbar />
                </div>
                <h1 className="font-bagel text-7xl text-center mb-10">404</h1>
                <section className="font-bagel text-center text-7xl max-w-3xl ml-auto mr-auto">
                    <p className="my-10">Woof!</p>
                    <p className="mb-16">You're in the wrong spot 🐶</p>
                    <Link to="/" className="text-amber-700 underline transition-colors duration-300 ease-in-out hover:text-zinc-500">Go back home</Link>
                </section>
            </div>
        </div>
    );
}
