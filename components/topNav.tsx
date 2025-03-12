'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import NavToggle from '@/public/navtoggle-icon.svg';

export default function TopNav(){

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [visibleElement, setVisibleElement] = useState<Element>();
    const [activeSection, setActiveSection] = useState<string|null>('');
    const [navOpen, setNavOpen] = useState<boolean>(false);

    const handleNavClose = () => {
        setNavOpen(false);
    }
    
    const NavLink = ({to, children, active}: {to: string, children:ReactNode, active:boolean}) => {
        const pathname = usePathname();

        let classStr = active ? "--active" : '';
        let pathSplit = pathname?.split("/");
        let toSplit = to.split("/");
        
        if(pathSplit) {
            if(pathSplit[1] && pathSplit[1] == toSplit[1]){
                classStr += ' active';
            }
        }
    
        return <Link href={to} className={classStr} scroll={false} onClick={handleNavClose}>
            <span className="link-title">{children}</span>
            <span className="active-border"></span>
        </Link>
      }
      
      

      useEffect(() => {
        // Handle scroll position
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
        };

        const viewportHeight = window.innerHeight;
        const observable_threshold = window.innerHeight < 460 ? .025 : .1;
    
        // Create intersection observer
        const observerOptions = {
          root: null, // use viewport as root
          rootMargin: '0px',
          threshold: observable_threshold // trigger when 10% of target is visible
        };
    
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              
              setVisibleElement(entry.target);
              let navSection:string|null = entry.target.getAttribute('data-section');
              setActiveSection(navSection);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
        // Add scroll event listener
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
    
        // Observe elements with 'observe-me' class
        document.querySelectorAll('.observe-me').forEach(el => observer.observe(el));
    
        // Cleanup
        return () => {
          window.removeEventListener('scroll', handleScroll);
          observer.disconnect();
        };
      }, []);

      const handleNavToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNavOpen(!navOpen);
      }

    return (
        <nav className="header">
            <button onClick={(e)=>handleNavToggle(e)} className="nav-toggle"><NavToggle /></button>
            <div id="navigation" className={`navigation ${navOpen ? "--open" : ""}`}>
                <div className="navigation__inner">
                    <NavLink to="#about" active={activeSection == "navsection-about" ? true : false}>about</NavLink>
                    <NavLink to="#featuredProjects" active={activeSection == "navsection-featuredprojects" ? true : false}>featured projects</NavLink>
                    <NavLink to="#experience" active={activeSection == "navsection-experience" ? true : false}>experience</NavLink>
                    <NavLink to="#stack" active={activeSection == "navsection-stack" ? true : false}>tech stack</NavLink>
                    <NavLink to="#contact" active={activeSection == "navsection-contact" ? true : false}>say hello</NavLink>
                    {/* <NavLink to="/iaux">IA / UX SAMPLES</NavLink> */}
                </div>
            </div>
        </nav>
    )
}