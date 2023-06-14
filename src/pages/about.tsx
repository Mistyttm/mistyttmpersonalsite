import { ReactComponent as PawPrint } from "../assets/images/Paw_Print_optimized.svg";
import React, { useEffect } from "react";
import Navbar from "../components/navbar";

export default function About() {
    useEffect(() => {
        document.title = "About - Misty Rose";
    }, []);
    return (
        <div className="mx-auto">
            <div className="overflow-hidden -z-10 absolute top-0 right-0 -mr-20 -mt-80">
                <PawPrint fill="#C897E626" className="scale-90 -rotate-30" />
            </div>
            <div className="flex flex-col justify-center place-content-center ">
                <div className="flex z-5 mb-10">
                    <Navbar />
                </div>
                <h1 className="font-bagel text-7xl text-center mb-10">About Me</h1>
                <section className="text-center text-xl max-w-3xl ml-auto mr-auto">
                    <p>Hi there!!!! My name is Emmey Leo. Online I go by the moniker of Misty Rose. I'm a currently enrolled student in a bachelors of IT and I'm studying a major of computer science.</p>
                </section>
            </div>
        </div>
    );
}
