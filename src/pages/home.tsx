import NavbarHome from "../components/navbar-home";
import { ReactComponent as PawPrint } from "../assets/images/Paw_Print_optimized.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function Home() {
    useEffect(() => {
        document.title = "Home - Misty Rose";
    }, []);
    return (
        <div>
            <div className="-z-10 absolute -ml-20 -mt-96">
                <PawPrint fill="#C897E626" className="scale-90 rotate-30" />
            </div>
            <div className="z-5">
                <NavbarHome />
                <div className="flex flex-col">
                    <div data-aos="fade-up">
                        <img
                            src="/hero_logo.png"
                            alt="Misty Rose! logo"
                            className="scale-50 justify-self-center -mt-10 -mb-20"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <h3 className="font-bagel text-4xl text-center">
                            Puppy Programmer Girl
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
