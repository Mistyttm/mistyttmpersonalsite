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
            <div className="flex flex-row gap-x-16 z-10 mr-10">
                <Link to="/">
                    <h2 className="">Home</h2>
                </Link>
                <Link to="/about">
                    <h2 className="">About Me</h2>
                </Link>
                <Link to="/blog">
                    <h2 className="">Blog</h2>
                </Link>
                <Link to="/projects">
                    <h2 className="">Projects</h2>
                </Link>
                <Link to="/contact">
                    <h2 className="">Contact Me</h2>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
