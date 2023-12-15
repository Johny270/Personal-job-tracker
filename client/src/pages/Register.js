import { useState, useEffect } from "react"
import { Logo, FormRow, Alert } from "../components"
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from "../context/appContext"

const initialState  = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  // showAlert: false
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  // global state and useNavigate
  const { isLoading, showAlert, displayAlert } = useAppContext()
  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember});
  }

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name] : evt.target.value })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password, isMember } = values
    if(!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
            <FormRow
            type='text'
            name='username'
            value={values.name}
            handleChange={handleChange}
          />
        )}
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
        <p>
          {values.isMember ? 'Not a member yet ? ' : 'Already a member ? '}
          <button type="button" onClick={toggleMember} className="member-btn">{values.isMember ? 'Register' : 'Login'}</button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register