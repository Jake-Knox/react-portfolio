import { CheckIcon, HandThumbUpIcon, } from "@heroicons/react/24/solid";
import { skills } from "../data";

export default function Footer() {
    return (
        <section id="Footer">
            <div className="container px-5 py-10 mx-auto text-center">
                <div className="flex flex-wrap m-4">
                    <a
                        href="https://www.linkedin.com/in/jake-knox/"
                        target="blank"
                        className="inline-flex text-white text-lg text-center">
                        <p>
                            LinkedIn
                        </p>
                        <img

                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
