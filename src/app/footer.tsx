import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

const Icons = [
    {
        name: faSquareGithub,
        href: "https://github.com/KellyCu"
    },
    {
        name: faFacebookMessenger,
        href: "https://www.messenger.com/kellytomcu"
    },
    {
        name: faSquareEnvelope,
        href: "mailto:cukellytom@gmail.com"
    },
    {
        name: faLinkedin,
        href: "https://www.linkedin.com/in/kelly-tom-cu-a4704b260"
    },
]


export default function Footer () {
    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center xs:text-3xl sm:text-4xl lg:text-5xl">
                {Icons.map((icons, index) => {
                    return(
                        <Link key={index} href={icons.href} target='_blank'>
                            <FontAwesomeIcon key={index} icon={icons.name} className="xs:pl-1 xs:pr-1 glow hover:duration-300 hover:-translate-y-3 hover:cursor-pointer xs:hover:text-5xl lg:hover:text-7xl" />
                        </Link>
                    )
                })}
            </div>
            <footer className='xs:text-xs sm:text-sm text-[#ffe100] mt-3' >©KellyCu</footer>
        </div>
    )
}