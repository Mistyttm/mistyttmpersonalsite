import NavbarHome from "../components/navbar-home";
import { ReactComponent as PawPrint } from "../assets/images/Paw_Print_optimized.svg";

function Home() {
    return (
        <div>
            <PawPrint fill="#C897E626" className="z-0 absolute scale-90 rotate-45 -ml-20 -mt-96" />
            <div className="z-1">
                <NavbarHome />
                <div className="flex flex-col">
                    <img
                        src="../../public/hero_logo.png"
                        alt="Misty Rose! logo"
                        className="scale-50 justify-self-center -mb-20"
                    />
                    <h3 className="font-bagel text-4xl text-center">
                        Puppy Programmer Girl
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
