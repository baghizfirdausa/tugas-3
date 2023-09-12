import '../style/Default.css'

function table() {
  return (
    <div>
      <form action="">
        <div className='inputText'>
          <label>Username</label>
          <input type="text" />
        </div>
        <div className='inputText'>
          <label>Email</label>
          <input type="text" />
        </div>
        <div className='inputText'>
          <label>HP/WA</label>
          <input type="text" />
        </div>
        <div className='inputText'>
          <label>Account Level</label>
          <input type="text" />
        </div>
        <div className='inputText'>
          <label>Role</label>
          <input type="text" />
        </div>
        <div className='inputText'>
          <label>Status</label>
          <input type="text" />
        </div>
        <div className='inputText'>
          <label>Password</label>
          <input type="text" />
        </div>
        <div className='inputText'>
          <label>Effective Date</label>
          <input type="text" />
        </div>
        <div className='submitButton'>
          <button style={{backgroundColor: 'green', color: 'white', cursor: 'pointer'}}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default table;