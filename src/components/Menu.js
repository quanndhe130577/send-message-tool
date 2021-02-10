import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Menu = () => {
    return (
        <>
            <Row align='center'>
                <Col md={6}><Link to="/">Login</Link></Col>
                <Col md={6}><Link to="/privacy">Privacy</Link></Col>
            </Row>

        </>
    )
}

export default Menu