
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function login (){



    return(
        <div className="Container">
    <div className="row">
      <div className="col-3">
        
      </div>
      <div className="col-6">
      <Form className="signupform">
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control  placeholder="Please enter username"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Please enter password" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Login
            </Button>
            
            </Form>
      </div>
      <div className="col-3">
      
      </div>
    </div>
  </div>
    )
}

export default login;