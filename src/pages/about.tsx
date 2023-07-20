import { ReactComponent as PawPrint } from "../assets/images/Untitled.svg";
import { useEffect } from "react";
import Navbar from "../components/navbar";

export default function About() {
    useEffect(() => {
        document.title = "About - Misty Rose";
    }, []);
    return (
        <div className="mx-auto overflow-scroll">
            <div>
                <PawPrint fill="#C897E626" className="-z-10 absolute bottom-0 right-20 w-80 h-auto md:w-1/3 -rotate-45" />
            </div>
            <div className="flex flex-col justify-center place-content-center ">
                <div className="flex z-5 mb-10">
                    <Navbar />
                </div>
                <h1 className="font-bagel text-7xl text-center mb-10">
                    About Me
                </h1>
                <section className="text-center text-xl max-w-3xl ml-20 mr-20 min-[800px]:ml-auto min-[800px]:mr-auto">
                    <p className="mb-4">
                        Hi there 🐶!!!! My name is Emmey Leo, 19. Online I go by
                        the moniker of Misty Rose. I'm a currently enrolled 2nd
                        year student in a bachelors of IT at QUT and I'm
                        studying a major of computer science.
                    </p>
                    <p className="mb-4">
                        I enjoy studying the process in which games are created
                        in my free time as well as playing them. I also enjoy
                        music, as a cellist of over 10 years now, I have a bit
                        of experience in it. Knowing music has many
                        transferrable skills to my programming which has greatly
                        helped me over the years.
                    </p>
                    <p className="mb-4">
                        I am versed in languages such as JavaScript, Typescript,
                        CSS, Tailwind, Python, C#, MySQL and I have some
                        experince in other languages like C, C++ and Java. I do
                        have a main focus in wanting to create video games as
                        it's my ultimate passion to be able to entertain people.
                        However I am also competent in web design and
                        development, software development and UX/UI. I am
                        capable of really quickly learning any language thrown
                        at me and using my problem solving skills to solve
                        complex digital problems.
                    </p>
                    <p>
                        I am currently looking for work as a junior developer or
                        technician with my experience in windows 7, 10 and 11,
                        Apple's software, as well as some experience using Linux
                        environments.
                    </p>
                </section>
            </div>
        </div>
    );
}
