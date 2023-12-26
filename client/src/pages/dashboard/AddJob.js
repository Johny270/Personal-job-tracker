import { FormRow, Alert, FormRowSelect} from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { CREATE_JOB_BEGIN } from '../../context/actions'

const AddJob = () => {

  const { 
    isLoading,
    showAlert, 
    displayAlert, 
    position, 
    company, 
    jobLocation, 
    jobType, 
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if(!position || !company || !jobLocation) {
      displayAlert()
      return
    }
    if(isEditing) {
      editJob()
      return
    }
    createJob();
  }

  const handleJobInput = (evt) => {
    const name = evt.target.name
    const value = evt.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow 
            type="text" 
            name="position" 
            value={position} 
            handleChange={handleJobInput}
          />
          <FormRow 
            type="text" 
            name="company" 
            value={company} 
            handleChange={handleJobInput}
          />
          <FormRow 
            type="text"
            labelText='job location' 
            name="jobLocation" 
            value={jobLocation} 
            handleChange={handleJobInput}
          />
          {/* Job type and status */}
          <FormRowSelect 
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect 
            name='jobType'
            labelText='job type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button 
              type='submit' 
              className='btn btn-block submit-btn' 
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button 
              className='btn btn-block clear-btn' 
              onClick={(evt) => {
                evt.preventDefault()
                clearValues()
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob