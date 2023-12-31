import { ReactComponent as PawPrint } from "../assets/images/Paw_Print_optimized.svg";
import { useEffect } from "react";
import Navbar from "../components/navbar";

export default function Contact() {
    useEffect(() => {
        document.title = "Contact Me - Misty Rose";
    }, []);
    return (
        <div className="mx-auto">
            <div className="overflow-hidden -z-10 absolute -ml-20 -mt-96">
                <PawPrint fill="#C897E626" className="scale-90 rotate-30" />
            </div>
            <div className="flex flex-col justify-center place-content-center ">
                <div className="flex z-5 mb-10">
                    <Navbar />
                </div>
                <h1 className="font-bagel text-7xl text-center mb-10">Contact Me</h1>
                <section className="text-center text-xl max-w-3xl ml-auto mr-auto">
                    <p className="">Under construction</p>
                </section>
            </div>
        </div>
    );
}
