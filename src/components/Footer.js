import React from 'react'

const Footer = () => {
    const myName = 'Lawal'
    const bgnd = "text-danger"
    const gender = "female"
    const mylink = "www.google.com"
    const allStudents = [
        {firstName:"Okiki",lastName:"Lawal"},
        {firstName:"Deji",lastName:"Lawal"},
        {firstName:"Ayo",lastName:"Lawal"}
    ]
  return (
    <>
    <a className={myName=="Lawal"?"gbnd":"bg-secondary"} href={mylink}>click</a>
    <div className={bgnd}>Footer {myName}</div>
    {/* {gender=="male"?<h1>Im a man</h1>:<h1>Not a Man</h1>} */}
    {allStudents.map((student, index)=>(
        <div key={index}>
        <h1>{student.firstName} {student.lastName}</h1>
        </div>
    ))}
    </>
  )
}

export default Footer 