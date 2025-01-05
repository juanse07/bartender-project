import styles from '@/styles/NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../assets/images/bartenderlogo.png";






export default function NavBar() {
    const router = useRouter();
    return (
        <Navbar expand="md" collapseOnSelect variant="dark" bg="body" sticky="top"  >
            <Navbar.Brand as={Link} href='/' className='d-flex align-items-center gap-4'>
            
            <Image src={logo} alt="technician (3)" width={60} height={60} /> 
            
            <span className={styles.brandText}>
            DenverBartenders
            </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='main-navbar'/>
            <Navbar.Collapse id='main-navbar'>
                <Nav>
                    <Nav.Link as={Link}href='/' active={router.pathname==="/"}>Home</Nav.Link>
                    {/* <Nav.Link as={Link} href='/blog' active={router.pathname==="/blog"}>About</Nav.Link> */}
                    
                    <Nav.Link as={Link} href='/BarService/new-quotation' active={router.pathname==="/BarService/new-quotation"}>
                                Contact with us</Nav.Link>
                </Nav>
               
              
            </Navbar.Collapse>
        </Navbar>
    );
}



