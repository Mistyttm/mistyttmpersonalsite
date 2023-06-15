import { ReactComponent as PawPrint } from "../assets/images/Paw_Print_optimized.svg";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useSearchParams } from "react-router-dom";
import Error from "./404";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Article() {
    const [searchParams] = useSearchParams();
    const params = searchParams.get("b");
    const file_name = `/${params}.md`;
    const [post, setPost] = useState("");

    useEffect(() => {
        document.title = "Blog - Misty Rose";
        import(file_name).then((res) => {
            fetch(res.default)
                .then((response) => response.text())
                .then((text) => setPost(text))
                .catch((err) => console.log(err));
        });
    }, []);

    if (!params) {
        return <Error location="/blog" place="to the blog" />;
    }

    return (
        <div className="mx-auto overflow-clip">
            <div className="overflow-clip -z-10 absolute right-0 mt-20 -mr-40">
                <PawPrint fill="#C897E626" className="scale-90 rotate-30" />
            </div>
            <div className="-z-10 absolute -ml-60 -mt-96">
                <PawPrint fill="#C897E626" className="scale-90 -rotate-30" />
            </div>
            <div className="flex flex-col justify-center place-content-center ">
                <div className="flex z-5 mb-10">
                    <Navbar />
                </div>
                <section className="text-xl max-w-3xl ml-auto mr-auto text-justify">
                    <ReactMarkdown
                        children={post}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ ...props }) => (
                                <h1
                                    className="font-bagel text-7xl text-center mb-10"
                                    {...props}
                                />
                            ),
                            h2: ({ ...props }) => (
                                <h2
                                    className="font-bagel text-6xl text-center mb-10"
                                    {...props}
                                />
                            ),
                            h3: ({ ...props }) => (
                                <h3
                                    className="font-bagel text-5xl text-center mb-10"
                                    {...props}
                                />
                            ),
                            blockquote: ({ ...props }) => (
                                <blockquote
                                    className="bg-zinc-200 text-2xl italic"
                                    {...props}
                                />
                            ),
                            code({ inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(
                                    className || ""
                                );
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        {...props}
                                        children={String(children).replace(
                                            /\n$/,
                                            ""
                                        )}
                                        style={ghcolors}
                                        language={match[1]}
                                        PreTag="div"
                                    />
                                ) : (
                                    <code {...props} className={className}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    />
                </section>
            </div>
        </div>
    );
}
