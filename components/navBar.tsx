'use client'
import Link from "next/link";
import { usePathname} from "next/navigation";
import { ReactNode } from "react";

export default function Navbar(){

    const NavLink = ({to, children}: {to: string | URL, children:ReactNode}) => {
        const pathname = usePathname()
        let classStr = '';    
        if(pathname == to){
            classStr += ' active';
        }
    
        return <Link href={to} className={classStr}>
            {children}
        </Link>
      }

    return (
        
            <ul className="mainNav">
                <li><NavLink to="/project/abreak"><span></span>aBreak Music</NavLink></li>
                <li><NavLink to="/project/amsa"><span></span>AMSA</NavLink></li>
                <li><NavLink to="/project/nature-sacred"><span></span>Nature Sacred</NavLink></li>
                <li><NavLink to="/project/hpp"><span></span>Health Pro Press</NavLink></li>
                <li><NavLink to="/project/stm"><span></span>STM</NavLink></li>
            </ul>
    )
}