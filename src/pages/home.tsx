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
            <NavbarHome />
            <div className="z-5">
                
                <div className="flex flex-col">
                    <div data-aos="fade-up">
                        <img
                            src="/hero_logo.png"
                            alt="Misty Rose! logo"
                            className="w-auto h-20 sm:h-32 md:h-40 xl:h-60  ml-auto mr-auto mt-16 z-10"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="250">
                        <h3 className="font-bagel text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                            Puppy Programmer Girl
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
