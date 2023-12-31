import { CodeBracketIcon, PhoneXMarkIcon } from '@heroicons/react/24/solid'
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                        Apps I've Built
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        I try to pick projects that allow me to learn a new aspect of a language, library or framework. Over the past year, I've focused on web development - mainly with node.js and react.
                    </p>
                    <br />
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Most of my projects can be found on my GitHub page.
                    </p>
                </div>
                <div className='flex flex-wrap m-4'>
                    {projects.map((project) => (
                        <a
                            target='blank'
                            href={project.link}
                            key={project.image}
                            className='w-full h-full md:w-1/2 md:min-h-full p-4'>
                            <div className='flex relative'>
                                <img
                                    alt='gallary'
                                    className='absolute inset-0 w-full h-full object-cover object-center border rounded border-gray-900'
                                    src={project.image}
                                />
                                <div className='px-8 py-12 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100' >
                                    <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1 py-6'>
                                        {project.subtitle}
                                    </h2>
                                    <h1 className='title-font text-lg font-medium text-white mb-3'>
                                        {project.title}
                                    </h1>
                                    <p className='leadeing-relaxed pt-4' >{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
