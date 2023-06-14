import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div
            role="navigation"
            className="flex flex-row font-bagel text-4xl justify-between h-16 mt-6">
                <img
                    src="/hero_logo.png"
                    alt="Misty Rose! logo"
                    className="z-4 w-auto ml-10"
                />
            <div className="flex flex-row gap-x-20 z-10 mr-10 underline underline-offset-8">
                <Link to="/">
                    <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        Home
                    </h2>
                </Link>
                <Link to="/about">
                    <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        About Me
                    </h2>
                </Link>
                <Link to="/blog">
                    <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        Blog
                    </h2>
                </Link>
                <Link to="/projects">
                    <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        Projects
                    </h2>
                </Link>
                <Link to="/contact">
                    <h2 className="transition-colors duration-300 ease-in-out hover:text-zinc-500">
                        Contact Me
                    </h2>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
