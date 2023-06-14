import { ReactComponent as PawPrint } from "../assets/images/Paw_Print_optimized.svg";
import { useEffect } from "react";
import Navbar from "../components/navbar";

export default function Blog() {
    useEffect(() => {
        document.title = "Blog - Misty Rose";
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
                <h1 className="font-bagel text-7xl text-center mb-10">Blog</h1>
                <section className="text-center text-xl max-w-3xl ml-auto mr-auto">
                    <p className="">Under construction</p>
                </section>
            </div>
        </div>
    );
}
