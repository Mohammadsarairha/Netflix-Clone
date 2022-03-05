import { Nav } from 'react-bootstrap';

export default function Navbar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" style={{ marginBottom:'30px',backgroundColor:'white'}}>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}