import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav, Navbar } from 'react-bootstrap';
import Sign from "../assets/images/denverbartendersSign.png";
import logo from "../assets/images/goldbarman.png";






export default function NavBar() {
    const router = useRouter();
    return (
        <Navbar expand="md" collapseOnSelect variant="dark" bg="body" sticky="top"  >
            <Navbar.Brand as={Link} href='/' className='d-flex align-items-center gap-2'>
            
            <Image src={logo} alt="technician (3)" width={120} height={70} /> 


            <Image
      src={Sign}
      alt="DenverBartenders"
      width={250} // Original size for larger screens
      height={70}
      sizes="(max-width: 768px) 200px, 250px" // Smaller on mobile
      style={{
        width: '100%', // Makes the image responsive
        maxWidth: '230px', // Ensure it doesn’t exceed 250px
        height: 'auto', // Maintain aspect ratio
      }}
    />
            
            {/* <span className={styles.brandText}>
            DenverBartenders
            </span> */}
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



