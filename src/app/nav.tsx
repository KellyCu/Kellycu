import Link from "next/link";


const navLinks = [
    {name: "Home", href: "/"},
    {name: "Projects", href: "#Projects"},
    {name: "About", href: "#About"},
    {name: "Contacts", href: "#Contacts"}
  ]
  

export default function Nav() {

    return(
        <div>
            <div id="nav" className="xs:hidden sm:block sm:mr-5 xl:mr-20">
                {navLinks.map((link, index) => {
                    return(
                        <Link key={index} href={link.href} className="pl-4 glow" >{link.name}</Link>
                    )
                })}
            </div>
        </div>
    )
}