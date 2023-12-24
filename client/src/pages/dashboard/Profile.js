import { useState } from "react"
import { FormRow, Alert } from "../../components"
import { useAppContext } from "../../context/appContext"
import Wrapper from "../../assets/wrappers/DashboardFormPage"

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } = useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if(!name || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={ handleSubmit }>
        <h3>Profile</h3>
        { showAlert && <Alert /> }
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={ name }
            handleChange={(evt) => setName(evt.target.value)} 
          />
          <FormRow
            type="email"
            name="email"
            value={ email }
            handleChange={(evt) => setEmail(evt.target.value)} 
          />
          <FormRow
            type="text"
            name="location"
            value={ location }
            handleChange={(evt) => setLocation(evt.target.value)} 
          />
          <FormRow
            type="text"
            labelText='last name'
            name="lastName"
            value={ lastName }
            handleChange={(evt) => setLastName(evt.target.value)} 
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>{isLoading ? 'Please wait' : 'Save changes'}</button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile