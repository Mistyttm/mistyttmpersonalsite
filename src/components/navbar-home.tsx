import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

function NavbarHome() {
    return (
        <div
            role="navigation"
            className="flex flex-row justify-center gap-x-16 mt-10 mb-40">
            <div data-aos="flip-right">
                <Link to="/">
                    <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        Home
                    </h2>
                </Link>
            </div>
            <div data-aos="flip-right" data-aos-delay="50">
                <Link to="/about">
                    <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        About Me
                    </h2>
                </Link>
            </div>
            <div data-aos="flip-right" data-aos-delay="150">
                <Link to="/blog">
                    <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        Blog
                    </h2>
                </Link>
            </div>
            <div data-aos="flip-right" data-aos-delay="200">
                <Link to="/projects">
                    <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        Projects
                    </h2>
                </Link>
            </div>
            <div data-aos="flip-right" data-aos-delay="250">
                <Link to="/contact">
                    <h2 className="font-bagel text-4xl underline underline-offset-8 transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        Contact Me
                    </h2>
                </Link>
            </div>
        </div>
    );
}

export default NavbarHome;
