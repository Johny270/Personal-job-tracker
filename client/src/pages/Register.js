import { useState, useEffect } from "react"
import { Logo } from "../components"
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState  = {
  name: '',
  email: '',
  password: '',
  isMember: true,
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
        <h3>Logo</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">name</label>
          <input type="text" value={values.name} onChange={handleChange} className="form-input" />
        </div>
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  )
}

export default Register