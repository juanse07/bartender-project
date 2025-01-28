import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav, Navbar } from 'react-bootstrap';







export default function NavBar() {
    const router = useRouter();
    return (
        <Navbar expand="md" collapseOnSelect variant="dark" bg="body" sticky="top"  >
            <Navbar.Brand as={Link} href='/' className='d-flex align-items-center '>
            
    

            <Image
      src="/denverbartendersSign.png"
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
            
       
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='main-navbar'/>
            <Navbar.Collapse id='main-navbar'>
                <Nav>
                    <Nav.Link as={Link}href='/' active={router.pathname==="/"}>Home</Nav.Link>
                    <Nav.Link as={Link}href='/contactUs' active={router.pathname==="/contactUs"}>Contact Us</Nav.Link>
                
                    
                </Nav>
               
              
            </Navbar.Collapse>
        </Navbar>
    );
}



