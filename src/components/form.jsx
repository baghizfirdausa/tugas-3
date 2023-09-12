import '../style/Default.css'
import { useDispatch } from 'react-redux';
import { add } from '../redux/add'
import React, {useState} from 'react';

const form = {
  username: '',
  email: '',
  phone: '',
  level: 'administrator',
  role: '',
  status: '',
  pass: '',
  repass: '',
  date: ''
}

function Form() {
  const [errors, setErrors] = useState({})
  const [userData, setUserData] = useState(form)
  const { username, email, phone, level, role, status, pass, repass, date} = userData

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const validateData = () => {
    let errors = {}
    if (!username) {
      errors.username = 'Username is required!'
    }

    if (!email) {
      errors.email = 'Email is required!'
    }

    if (!phone) {
      errors.phone = 'Phone Number is required!'
    }

    if (!level) {
      errors.level = 'Account Level is required'
    }

    if (!role) {
      errors.role = 'Role is required'
    }
    if (!status) {
      errors.status = 'Status is required'
    }
    if (!pass) {
      errors.pass = 'Password is required'
    }
    if (!repass) {
      errors.repass = 'Enter password again please'
    }

    if ((pass && repass) && pass !== repass) {
      errors.repass = 'You enter the different password'
    }
    if (!date) {
      errors.date = 'Effective Date is required'
    }

    return errors
  }

  const addUser = (e) => {
    e.preventDefault();
    const error = validateData()
    if (Object.keys(error).length) {
      setErrors(error)
      return
    }
    setErrors({})
    dispatch(add(userData))
  }
  return (
    <div>
      <form onSubmit={addUser}>
        <div className='inputText'>
          <label>Username</label>
          <input className='input' type="text" value={username} name='username' onChange={handleChange}/>
          <div style={{color: 'red'}}>{errors.username}</div>
        </div>
        <div className='inputText'>
          <label>Email</label>
          <input className='input' type="email" value={email} name='email' onChange={handleChange}/>
          <div style={{color: 'red'}}>{errors.email}</div>
        </div>
        <div className='inputText'>
          <label>HP/WA</label>
          <input className='input' type="text" value={phone} name='phone' maxLength={15} onChange={handleChange}/>
          <div style={{color: 'red'}}>{errors.phone}</div>
        </div>
        <div className='inputText'>
          <label>Account Level</label>
          <select name="level" style={{width: `308px`}} onChange={handleChange}>
            <option value="administrator">Administrator</option>
            <option value="user">User</option>
          </select>
          <div style={{color: 'red'}}>{errors.level}</div>
        </div>
        <div className='inputText'>
          <label>Role</label>
          <input className='input' type="text" name='role' onChange={handleChange}/>
          <div style={{color: 'red'}}>{errors.role}</div>
        </div>
        <div className='inputText'>
          <label>Status</label>
          <div className='passwordInput'>
            <div>
              <input type="radio" name="status" value="Active" onChange={handleChange}/>
              <label>Active</label>
            </div>
            <div>
              <input type="radio" name="status" value="Not Active" onChange={handleChange}/>
              <label>Not Active</label>
            </div>
          </div>
          <div style={{color: 'red'}}>{errors.status}</div>
        </div>
        <div className='inputText'>
          <label>Password</label>
          <div className='passwordInput'>
            <div>
              <input type="text" value={pass} name='pass' onChange={handleChange}/>
              <div style={{color: 'red'}}>{errors.pass}</div>
            </div>
            <div>
              <input type="text" value={repass} name='repass' onChange={handleChange}/>
              <div style={{color: 'red'}}>{errors.repass}</div>
            </div>
          </div>
        </div>
        <div className='inputText'>
          <label>Effective Date</label>
          <input className='input' type="date" value={date} name='date' onChange={handleChange}/>
          <div style={{color: 'red'}}>{errors.date}</div>
        </div>
        <div className='submitButton'>
          <button style={{backgroundColor: 'green', color: 'white', cursor: 'pointer'}} type='submit'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default Form;