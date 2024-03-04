import React,{useState} from 'react'

const Eventclass = () => {
    // const [myNumber, setNumber] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allStudents, setAllStudents] = useState([]);

    // const changeNumber = ()=>{
    //     setNumber(myNumber+1)
    // }
    const signUp = ()=>{
      let allStudent = {firstName, lastname, email, password}
      setAllStudents([...allStudents,allStudent])
    }
    const editStudent = (userIndex)=>{
      document.getElementById()
    }
    const deleteStudent =(userIndex)=>{
      alert("Are You sure you want to delete")
      let newallStudents = [...allStudents]
      newallStudents.splice(userIndex,1)
      setAllStudents(newallStudents)
    }
  return (
    <>
    <div className='container-fluid'>
      <div className='col-4 mx-auto my-4 p-3 border rounded-3'>
      <h2 className='text-center text-danger mb-3'>Student Portal</h2>
       
        <div className='mx-auto col-12 mb-3'>
          <input className='form-control mb-3' placeholder='FirstName'onChange={(e)=>(setFirstName(e.target.value))}></input>
          <input className='form-control mb-3' placeholder='LastName'onChange={(e)=>(setLastName(e.target.value))}></input>
          <input className='form-control mb-3' placeholder='Email'onChange={(e)=>(setEmail(e.target.value))}></input>
          <input className='form-control mb-3' placeholder='Password'onChange={(e)=>(setPassword(e.target.value))}></input>
        </div>
        <div className=' col-12 mx-auto mb-3'>
          <button className='form-control btn btn-danger' onClick={signUp}>Sign Up</button>
        </div>
        
      </div>
    </div>
    <div className='col-11 mx-auto'>
    <h2 className='text-center border-bottom'>LIST OF STUDENTS</h2>
    {allStudents.length==0 ?<h6 className='text-center text-danger mx-auto'>No student has been added</h6>:
      <div className='container-fluid'>
        <div className='col-8 mx-auto border rounded-3 shadow-md'>
          <table className='table table-stripped '>
            <thead>
              <tr>
                <th>S/N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            <>{allStudents.map((student, index)=>(
            <tr key={index} className='col-5 mx-auto mb-3'>
              <td>{index+1}</td>
              <td className='text-primary'>{student.firstName}</td>
              <td className='text-primary'>{student.lastname}</td>
              <td className='text-primary'>{student.email}</td>
              <td className='text-primary'>{student.password}</td>
              <td>
                <button className='btn btn-danger btn-md' onClick={(e)=>deleteStudent(index)}>Delete</button>
              </td>
              <td>
                <button className='btn btn-success btn-md'onClick={(e)=> editStudent(index)} >Edit</button>
              </td>
            </tr>
          ))}
          </>
          </tbody>
          </table>
        </div>
      </div>
    }
    </div>
    </>
  )
}

export default Eventclass