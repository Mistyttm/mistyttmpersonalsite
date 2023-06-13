import { Link } from "react-router-dom";

function NavbarHome() {
    return (
        <div role="navigation" className="flex flex-row justify-center gap-x-16 mt-10">
            <Link to="/">
                <h2 className="font-bagel text-4xl underline underline-offset-8">Home</h2>
            </Link>
            <Link to="/about">
                <h2 className="font-bagel text-4xl underline underline-offset-8">About Me</h2>
            </Link>
            <Link to="/blog">
                <h2 className="font-bagel text-4xl underline underline-offset-8">Blog</h2>
            </Link>
            <Link to="/projects">
                <h2 className="font-bagel text-4xl underline underline-offset-8">Projects</h2>
            </Link>
            <Link to="/contact">
                <h2 className="font-bagel text-4xl underline underline-offset-8">Contact Me</h2>
            </Link>
        </div>
    );
}

export default NavbarHome;
