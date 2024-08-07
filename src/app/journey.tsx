
import Image from 'next/image';

const years = [
    {
        year: '2022'
    },
    {
        year: '2023'
    },
    {
        year: '2024'
    }
]

const upright = [
    {
        name: 'Java Programming 1',
        src: '/Java Certificate.png',
        date: 'November 4 2022',
        id: 'jp'
    },
    {
        name: 'SQL Intermediate',
        src: '/SQLCertificate.png',
        date: 'February 10 2023',
        id: 'sql'
    },
    {
        name: 'Front End Development',
        src: '/FrontEnd Certificate.png',
        date: 'October 11 2023',
        id: 'fd'
    },
    {
        name: 'Mastering Authentication Vulnerabilities',
        src: '/Authentication Vulnerabilities.jpg',
        date: 'March 2 2024',
        id: 'av'
    },
];


const invert = [
    {
        name: 'Responsive Design',
        src: '/FCC_Responsive_WebDesign certificate.png',
        date: 'June 20 2022',
        id: 'rd'
    },
    {
        name: 'Backend Development',
        src: '/Backend Certificate.png',
        date: 'February 25 2023',
        id: 'bd'
    },
    {
        name: 'Mastering SQL Injection',
        src: '/sql_injection cert.jpg',
        date: 'February 9 2024',
        id: 'sqli'
    },
    {
        name: 'Mastering Server-Side Request Forgery (SSRF) Vulnerabilities',
        src: '/Server-side Request Forgery.jpg',
        date: 'March 7 2024',
        id: 'ssrf'
    }
];


export default function Journey() {
    return(
        <div className="md:w-full md:h-full flex flex-col relative justify-center items-center overflow-x-hidden ">
            <div className='csWidth h-1/2 absolute flex flex-row justify-center items-end top-0'>
                {upright.map((up, index) => {
                    return(
                        <div key={index} id={up.id} className='w-1/5 h-4/5 mr-3 flex flex-col justify-center items-center'>
                            <div key={index} className='w-full h-2/3 relative'>
                                <Image key={index} src={up.src} alt={up.name} className='hover:absolute hover:scale-150 hover:object-cover hover:cursor-pointer hover:z-30 border-2 border-gray-500 rounded-sm' fill/>
                            </div>
                            <div key={index} className='w-0 h-1/3 border'>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="csWidth md:h-0 flex flex-row justify-around items-center pl-5 pr-5 relative border">
                
                {years.map((yr, index) => {
                    return(
                        <div key={index} className='w-5 h-5 rounded-full border bg-white relative -left-52 flex justify-center '>
                            <h1 className='relative top-10 text-2xl textglow1'>{yr.year}</h1>
                        </div>
                    )
                })}
            </div>
            <div className='csWidth h-1/2 absolute flex flex-row justify-center items-start bottom-0'>
                {invert.map((inv, index) => {
                    return(
                        <div key={index} id={inv.id} className='w-1/5 h-4/5 mr-3 flex flex-col justify-center items-center'>
                            <div key={index} className='w-0 h-1/3 border'>
                            </div>
                            <div key={index} className='w-full h-2/3 relative border'>
                                <Image key={index} src={inv.src} alt={inv.name} className='hover:absolute hover:scale-150 hover:object-cover hover:cursor-pointer hover:z-30 border-2 border-gray-500 rounded-sm' fill/>
                            </div>
                        </div>
                    )
                })}
            </div> 



        </div>
    )
}