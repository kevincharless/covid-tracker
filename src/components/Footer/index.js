import { Button, Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <div style={{ backgroundColor: '#01BAB5', color: '#fff', height: '160px' }}>
            <hr className="position-relative" style={{ height: '2px', top: '75%' }} />
            <Container className="d-flex align-items-end justify-content-center" style={{ height: '85%' }}>
                Copyright © 2021 Kelompok psw. All Rights Reserved 
            </Container>
        </div>
    )
}

export default Footer
