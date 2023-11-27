import React, { useContext, useState } from 'react'
import { DetailsContext } from '../Details';

const AddHostel = (props) => {

  const { details } = useContext(DetailsContext);
  const { setDetails } = useContext(DetailsContext);
  const [hostels, setHostels] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [newOrg,setnewOrg] =useState(false);

  const [hostelName, setHostelName] = useState('');
  const [hostelPass, setHostelPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');


  function toggleWindow() {
    props.setNewStu((prev) => {
      prev = !prev;
    })
  }

  function inputHostel(event) {
    let input = event.target.value;
    setHostelName(input);
    if (input === "") {
      setnewOrg(false);
      return;
    }
    for (let i = 0; i < details.hostels.length; i++) {
      if (details.hostels[i].Name.toLowerCase().trim().replace(/\s+/g, ' ') === input.toLowerCase().trim().replace(/\s+/g, ' ')) {
        setnewOrg(false);
        return;
      }
    }
    setnewOrg(true);

  }

  function inputPass(event) {
    let input = event.target.value;
    setHostelPass(input);
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
      setInvalid (false);
      
    }
    if (hostelName !== "" &&
      hostelPass !== "" &&
      confirmPass !== "" &&
      contact !== "" &&
      email !== "" &&
      address !== ""
    ) {
      if (hostelPass === confirmPass) {
        let object = {
          Name: hostelName,
          Password: hostelPass,
          contact: contact,
          email: email,
          address: address,
          appeal: [],
          issue: [],
          notice: [],
          students: []
        }
        // console.log(object)

        // insert data to backend here...
        console.log(details)
        let temp_hostels = [...details.hostels, object];
        console.log(temp_hostels)
        fetch("http://localhost:5000/newhostel", {
          method: 'POST',
          body: JSON.stringify({ Name: details.Name, data: temp_hostels }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(
          response => response.json()
        ).then(
          data => {
            console.log("daTa -> ")
            console.log(data);
            let temp_details = details;
            temp_details.hostels = temp_hostels;
            setDetails({ ...temp_details });
            toggleWindow()
          }
        ).catch(
          err => console.log(err)
        )


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
            onChange={inputHostel}
            value={hostelName}
            placeholder='Enter Hostel Name'
          />
          <input
            type="password"
            onChange={inputPass}
            value={hostelPass}
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
          {invalid && (<p> Invalid Credentials </p>)}
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

export default AddHostel
