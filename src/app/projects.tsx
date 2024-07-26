import Image from 'next/image';
import Link from 'next/link';


const box = [
    {
        name: "Anireco",
        img: "/anireco.png",
        altxt: "Anireco",
        href: "http://Anireco.onrender.com",
        info: "HTML, SCSS, JavaScript, Node.js, Express, MalScraper"
    },
    {
        name: "Recipe Deluxe",
        img: "/recipedeluxe.png",
        altxt: "Recipe Deluxe",
        href: "https://recipe-deluxe.onrender.com",
        info: "HTML, SCSS, JavaScript, Node.js, Express, Axios, Edamam API"
    }

]


export default function Projects() {
    return(
        <div>
            <div className="flex flex-col md:flex-row h-auto xs:pb-10 sm:pb-0">
                <div id="firsthalf" className="w-full h-1/5 flex xs:justify-center md:justify-end items-center md:w-2/4 md:h-full md:items-start">
                    <div className="md:mt-14 lg:mt-16 xl:mt-20">
                        <h2 className="xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl textglow1">Projects</h2>
                    </div>
                </div>
                <div id="secondhalf" className="w-full xs:h-full sm:h-4/5 md:h-full sm:p-5 md:p-6 xl:p-9 flex justify-center items-center xs:pt-5">
                    <div id="projectContainer" className="flex flex-col justify-start xs:items-center xs:w-11/12 sm:w-full h-full md:h-5/6 lg:h-full">
                        {box.map((box, index) => {
                            return(
                                <div key={index} className="relative md:left-5 xs:w-11/12 xs:h-80 sm:w-3/4 sm:h-60 xl:h-64 md:w-4/5 lg:w-3/5 flex xs:flex-col sm:flex-row items-center bg-white rounded-lg mb-5 xs:p-1 shadow-lg shadow-white/20">
                                    <div className="relative xs:w-full xs:h-4/6 sm:w-2/3 md:w-4/5 lg:w-11/12 sm:h-3/4 lg:h-2/3 sm:-left-14 xl:-left-16 hover:scale-105 hover:ease-in-out hover:duration-300">
                                        <Link key={index} href={box.href} target='_blank'>
                                            <Image key={index} src={box.img} alt={box.altxt} className='noShadow customShadow xs:rounded-t-lg customBr sm:rounded-md cursor-pointer' fill/>
                                        </Link>
                                    </div>
                                    <div className=" relative sm:-left-4 xl:-left-6 flex flex-col justify-center items-center sm:w-3/5 md:w-3/4 lg:w-10/12 sm:h-full">
                                        <h1 className="text-black  xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-bold font-mono mb-3">{box.name}</h1>
                                        <p className="text-black  xs:text-sm sm:text-xs xl:text-sm font-semibold text-center">{box.info}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}