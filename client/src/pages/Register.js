import { useState, useEffect } from "react"
import { Logo, FormRow, Alert } from "../components"
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState  = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  // global state and useNavigate

  const handleChange = (evt) => {
    console.log(evt.target);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}
        <FormRow
          type='text'
          name='username'
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  )
}

export default Register