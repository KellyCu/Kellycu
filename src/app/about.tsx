export default function About() {
    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className="xs:w-4/5 xs:h-auto flex flex-col justify-center items-center border rounded-md shadow-white shadow-sm xs:p-5">
                <div className="xs:w-auto xs:h-auto">
                    <h1 className="xs:text-lg textglow1">About Me</h1>
                </div>
                <div className="xs:w-auto xs:h-auto">
                    <p className="text-justify">I am a self-taught full stack developer with a passion for building dynamic and responsive web applications. My skill set includes HTML, SCSS, JavaScript, Node.js, Express, Next.js, Typescript, SQL, and MongoDB. I am also delving into Web Security, including pentesting and OSINT (Open Source Intelligence). My goal is to create secure and efficient web solutions. <span className="animate-blink"> |</span> </p>
                </div>
            </div>
        </div>
    )
}