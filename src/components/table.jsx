import '../style/Default.css'

// Example data
const data = [
  { id:"1", name: "Anom", email: 'anom@mail.com', phone: '6282230784278', level: 'user', role: 'IT network', status: 'active', password: 'encrypted', registeredDate: '2023-10-08', EffectiveDate: '2023-11-09' },
]

function table() {
  return (
    <div>
      <table>
        <tr>
          <th>UserID</th>
          <th>Username</th>
          <th>Email</th>
          <th>HP/WA</th>
          <th>Account Level</th>
          <th>Role</th>
          <th>Status</th>
          <th>Password</th>
          <th>RegisteredDate</th>
          <th>EffectiveDate</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td>{val.level}</td>
              <td>{val.role}</td>
              <td>{val.status}</td>
              <td>{val.password}</td>
              <td>{val.registeredDate}</td>
              <td>{val.EffectiveDate}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default table;