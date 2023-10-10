import { CheckIcon, HandThumbUpIcon, } from "@heroicons/react/24/solid";
import { skills } from "../data";

export default function Footer() {
    return (
        <section id="Footer" className="bg-gray-800">
            <div className="container px-5 py-2 mx-auto">
                <div className="text-center mx-auto">
                    <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
                        {/* Footer */}
                    </h1>
                </div>
                {/* Make these divs a new link component using data.js */}
                <div className="mx-auto flex px-5 items-center flex-col md:flex-row md:justify-around">
                    <div className="flex flex-wrap m-4 justify-center mx-auto">
                        <a
                            href="https://www.linkedin.com/in/jake-knox/"
                            target="blank"
                            className="inline-flex flex justify-between text-white text-lg text-center px-0 py-0 bg-gray-900 border-4 border-gray-900 rounded-lg mx-4">
                            <img
                                src="./linkedinIco.png"

                                className="py-1 px-1"
                                alt="LinkedIn Logo"
                                loading="lazy"
                            />
                            <p className="py-1 px-1 align-middle title-font font-medium text-white">
                                LinkedIn
                            </p>
                        </a>
                    </div>
                    <div className="flex flex-wrap m-4 justify-center mx-auto">
                        <a
                            href="https://github.com/Jake-Knox"
                            target="blank"
                            className="inline-flex flex justify-between text-white text-lg text-center px-0 py-0 bg-gray-900 border-4 border-gray-900 rounded-lg mx-4 ">
                            <img
                                src="./githubIco.png"
                                className="py-1 px-1"
                                alt="LinkedIn Logo"
                                loading="lazy"
                            />
                            <p className="py-1 px-1 align-middle title-font font-medium text-white">
                                GitHub
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
