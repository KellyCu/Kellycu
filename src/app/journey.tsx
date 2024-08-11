
import Image from 'next/image';

const years = [
    {
        year: '2022',
        id: 'yr1',
        key: 1
    },
    {
        year: '2023',
        id: 'yr2',
        key: 2
    },
    {
        year: '2024',
        id: 'yr3',
        key: 3
    }
]

const upright = [
    {
        name: 'Java Programming 1',
        src: '/Java Certificate.png',
        date: 'November 4 2022',
        id: 'jp',
        key: 4
    },
    {
        name: 'SQL Intermediate',
        src: '/SQLCertificate.png',
        date: 'February 10 2023',
        id: 'sql',
        key: 5
    },
    {
        name: 'Front End Development',
        src: '/FrontEnd Certificate.png',
        date: 'October 11 2023',
        id: 'fd',
        key: 6
    },
    {
        name: 'Mastering Authentication Vulnerabilities',
        src: '/Authentication Vulnerabilities.jpg',
        date: 'March 2 2024',
        id: 'av',
        key: 7
    },
];


const invert = [
    {
        name: 'Responsive Design',
        src: '/FCC_Responsive_WebDesign certificate.png',
        date: 'June 20 2022',
        id: 'rd',
        key: 8
    },
    {
        name: 'Backend Development',
        src: '/Backend Certificate.png',
        date: 'February 25 2023',
        id: 'bd',
        key: 9
    },
    {
        name: 'Mastering SQL Injection',
        src: '/sql_injection cert.jpg',
        date: 'February 9 2024',
        id: 'sqli',
        key: 10
    },
    {
        name: 'Mastering Server-Side Request Forgery (SSRF) Vulnerabilities',
        src: '/Server-side Request Forgery.jpg',
        date: 'March 7 2024',
        id: 'ssrf',
        key: 11
    }
];


export default function Journey() {
    return(
        <div className="xs:w-full xs:h-full md:w-full md:h-full flex sm:flex-row md:flex-col relative justify-center items-center overflow-x-hidden ">
            <div className='xs:w-1/2 xs:h-full sm:w-1/2 sm:h-full md:w-11/12 md:h-1/2 flex xs:flex-col md:flex-row sm:justify-start md:justify-center items-end md:absolute md:top-0 '>
                {upright.map((up) => {
                    console.log(up.key);
                    return(
                        <div key={up.key} id={up.id} className='xs:h-1/5 xs:w-full sm:h-1/5 sm:w-3/4 md:h-2/3 md:w-1/5 xl:h-4/5 md:mr-3 flex xs:flex-row md:flex-col xs:justify-end md:justify-center items-center'>
                            <div key={up.key} className='xs:w-5/6 xs:h-full sm:w-3/4 sm:h-full md:w-full md:h-2/3 relative '>
                                <Image key={up.key} src={up.src} alt={up.name} className='hover:absolute hover:scale-150 hover:object-cover hover:cursor-pointer hover:z-30 hover:duration-300 border-2 border-gray-500 rounded-sm' fill/>
                            </div>
                            <div key={up.key} className='xs:w-1/5 xs:h-0 sm:w-1/6 sm:h-0 md:w-0 md:h-1/3 border borderGlow'>
                            </div>  
                        </div>
                    )
                })}
            </div>
            <div className="xs:w-0 xs:h-full md:w-11/12 md:h-0 flex xs:flex-col md:flex-row justify-around items-center md:pl-5 md:pr-5 relative border borderGlow">
                {years.map((yr) => {
                    console.log(yr.key);
                    return(
                        <div key={yr.key} id={yr.id} className='w-5 h-5 rounded-full border borderGlow bg-white relative xs:-top-12 md:-top-0 md:-left-28 xl:-left-52 flex justify-center '>
                            <h1 className='relative xs:-top-9 md:top-10 text-2xl textglow1'>{yr.year}</h1>
                        </div>
                    )
                })}
            </div>
            <div className='xs:w-1/2 xs:h-full sm:w-1/2 sm:h-full md:w-11/12 md:h-1/2 md:absolute flex xs:flex-col md:flex-row justify-center items-start md:bottom-0'>
                {invert.map((inv) => {
                    console.log(inv.key);
                    return(
                        <div key={inv.key} id={inv.id} className='xs:h-1/5 xs:w-full sm:h-1/5 sm:w-3/4 md:h-2/3 md:w-1/5 xl:h-4/5 md:mr-3 flex xs:flex-row md:flex-col xs:justify-start md:justify-center items-center'>
                            <div key={inv.key} className='xs:w-1/5 xs:h-0 sm:w-1/6 sm:h-0 md:w-0 md:h-1/3 border borderGlow'>
                            </div>
                            <div key={inv.key} className='xs:w-5/6 xs:h-full sm:w-3/4 sm:h-full md:w-full md:h-2/3 relative'>
                                <Image key={inv.key} src={inv.src} alt={inv.name} className='hover:absolute hover:scale-150 hover:object-cover hover:cursor-pointer hover:z-30 hover:duration-300 border-2 border-gray-500 rounded-sm' fill/>
                            </div>
                        </div>
                    )
                })}
            </div> 
        </div>
    )
}