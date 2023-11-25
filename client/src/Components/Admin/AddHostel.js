import React,{useState} from 'react'

const AddHostel = (props) => {
  function toggleWindow(){
    props.setNewStu((prev)=>{
      prev=!prev;
    })
  }
  function inputHostel(event){
    let input = event.target.value;
    setHostelName(input);
  }
  function inputPass(event)
  {
    let input=event.target.value;
    setHostelPass(input);
  }
  function inputConfirm(event)
  {
    let input =event.target.value;
    setConfirmPass(input);
  }
  function inputContact(event)
  {
    let input =event.target.value;
    setContact(input);
  }
  function inputEmail(event)
  {
    let input=event.target.value;
    setEmail(input);
  }
  function inputAddress(event)
  {
    let input=event.target.value;
    setAddress(input);
  }

  function submit(e)
  {
    e.preventDefault();
    if(hostelName!=="" &&
      hostelPass!=="" &&
      confirmPass!=="" &&
      contact!=="" &&
      email !=="" &&
      address!==""
    )
    {
      if(hostelPass===confirmPass)
      {
        let object = {
          Name:hostelName,
          Password:hostelPass,
          contact:contact,
          email:email,
          address:address,
          issue:[],
          notice:[]
        }
        console.log(object)
        toggleWindow()
      }
      else {
        console.log("invalid pass and confirm ..");
      }
    }

  }

  const [hostelName,setHostelName]=useState('');
  const [hostelPass,setHostelPass]=useState('');
  const [confirmPass,setConfirmPass]=useState('');
  const [contact,setContact]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  return (
    <>
      <div className='new-window'>   
      </div>
      <div className="data-window">
          <div className="close-menu">
            <label onClick={toggleWindow}>X</label>
          </div>
          <form className='loginInputs' onSubmit={submit}>
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
