import '../style/Default.css'
import { useSelector } from 'react-redux';

function Table() {
  const { users } = useSelector((state) => state.add)

  return (
    <div>
      <table>
        <thead>
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
        </thead>
        <tbody>
          {users.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.level}</td>
                <td>{val.role}</td>
                <td>{val.status}</td>
                <td>{val.pass}</td>
                <td>{val.registeredDate}</td>
                <td>{val.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;