import React, { useContext, useState } from 'react'
import { DetailsContext } from '../Details';

const AddStudent = (props) => {

  const { details } = useContext(DetailsContext);
  const { setDetails } = useContext(DetailsContext);
  const [invalid, setInvalid] = useState(false);
  const [newOrg,setnewOrg] =useState(false);

  const [studentID,setStudentID]=useState("");
  const [studentName, setStudentName] = useState('');
  const [studentPass, setStudentPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');


  function toggleWindow() {
    props.setNewStu((prev) => {
      prev = !prev;
    })
  }

  function inputID(event) {
    let input = event.target.value;
    input =input.toLowerCase().trim();
    setStudentID(input);
    if (input === "") {
      setnewOrg(false);
      return;
    }
    for (let i = 0; i < details.students.length; i++) {
      if (details.students[i]._id.toLowerCase().trim().replace(/\s+/g, ' ') === input.toLowerCase().trim().replace(/\s+/g, ' ')) {
        setnewOrg(false);
        return;
      }
    }
    setnewOrg(true);

  }

  function inputStudent(event){
    let input=event.target.value;
    setStudentName(input);
  }
  function inputPass(event) {
    let input = event.target.value;
    setStudentPass(input);
  }
  function inputConfirm(event) {
    let input = event.target.value;
    setConfirmPass(input);
  }
  function inputContact(event) {
    let input = event.target.value;
    setContact(input);
  }
  function inputEmail(event) {
    let input = event.target.value;
    setEmail(input);
  }
  function inputAddress(event) {
    let input = event.target.value;
    setAddress(input);
  }




  function submit(e) {
    e.preventDefault();
    if(!newOrg)
    {
      setInvalid(true);
      return;
    }
    else {
      setInvalid(false);
    }
    if (studentName !== "" &&
      studentPass !== "" &&
      confirmPass !== "" &&
      contact !== "" &&
      email !== "" &&
      address !== ""
    ) {
      if (studentPass === confirmPass) {
        let object = {
          _id:studentID,
          Name: studentName,
          Password: studentPass,
          contact: contact,
          email: email,
          address: address,
          appeal: [],
          notice: []
        }
        // console.log(object)
        let temp_details=[];
        // insert data to backend here...
        console.log(details.Org)
        let temp_students = [object, ...details.students];
        let temp_hostels={...details};
        delete temp_hostels.Org;
        temp_hostels.students=temp_students;
        console.log(temp_hostels)
        fetch("http://localhost:5000/getdata",{
          method:'POST',
          body:JSON.stringify({Name:details.Org}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(
          response=>response.json()
        ).then(
          data=>{
            console.log(data);

            temp_details=[...data._doc.hostels];
            console.log(temp_details);
            console.log(temp_hostels);
            for(let i=0;i<temp_details.length;i++)
            {
              console.log("iterate");
              if(temp_details[i].Name === temp_hostels.Name){
                console.log("to delete here");
                temp_details.splice(i,1);
                break;
              }
            }
            temp_details=[temp_hostels,...temp_details]
            console.log(temp_details);


            fetch("http://localhost:5000/updatehostel", {
              method: 'POST',
              body: JSON.stringify({ Name: details.Org, data: temp_details }),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(
              response => response.json()
            ).then(
              data => {
                console.log("daTa -> ")
                console.log(data);
                let temp= details;
                temp.hostels = temp_details;
                setDetails(temp);
                toggleWindow()
              }
            ).catch(
              err => console.log(err)
            )


          }
        ).catch(
          err => console.log(err)
        )

        // console.log("details again...");
        // console.log(temp_details);
       


      }
      else {
        console.log("invalid pass and confirm ..");
        setInvalid(true);
      }
    }
  }

  return (
    <>
      <div className='new-window'>
      </div>
      <div className="data-window">
        <div className="close-menu">
          <label onClick={toggleWindow}>X</label>
        </div>
        <form className='loginInputs' autoComplete='off' onSubmit={submit}>
          <input
            type="text"
            onChange={inputID}
            value={studentID}
            placeholder='Enter Student ID'
          />
          <input
            type="text"
            onChange={inputStudent}
            value={studentName}
            placeholder='Enter Student Name'
          />
          <input
            type="password"
            onChange={inputPass}
            value={studentPass}
            placeholder='Enter Password'
          />
          <input
            type="password"
            onChange={inputConfirm}
            value={confirmPass}
            placeholder='Confirm Password'
          />
          <input
            type="text"
            onChange={inputContact}
            value={contact}
            placeholder='Enter Contact No.'
          />
          <input
            type="email"
            onChange={inputEmail}
            value={email}
            placeholder='Enter Email'
          />
          <textarea
            className='min-height-3'
            type="text"
            onChange={inputAddress}
            value={address}
            placeholder='Enter Address'
          />
          {(invalid)?(<p style={{fontSize:'medium', color:"red"}}> *Invalid Credentials </p>): (<p> </p>)}
          <input
            id='submit'
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  )
}

export default AddStudent
