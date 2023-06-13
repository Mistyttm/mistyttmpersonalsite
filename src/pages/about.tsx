import { ReactComponent as PawPrint } from "../assets/images/Paw_Print_optimized.svg";
import Navbar from "../components/navbar";

export default function About() {
    return (
        <div className="mx-auto">
            <div className="overflow-hidden -z-10 absolute top-0 right-0 -mr-20 -mt-80">
                <PawPrint fill="#C897E626" className="scale-90 -rotate-30" />
            </div>
            <div className="flex z-5">
                <Navbar />
            </div>
        </div>
    );
}
