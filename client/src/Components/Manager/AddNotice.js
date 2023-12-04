import React,{useContext,useState} from 'react';
import { DetailsContext } from '../Details';
const AddNotice = (props) => {
  
  const {details}=useContext(DetailsContext);
  const {setDetails}=useContext(DetailsContext);
  const [setNotice,setSetNotice] =useState(""); 
  
  const toggleWindow=() =>{
    props.setNewNotice((prev) => {
        prev=!prev;
    })
}
  function editNotice(event){
    setSetNotice(event.target.value)
  }

  function uploadNotice(){
    console.log(details);
    console.log(setNotice);

    let temp_details=[]
    let temp_hostel={...details};
    delete temp_hostel.Org;
    let temp_notice=[setNotice, ...details.notice];
    temp_hostel.notice=temp_notice;
    console.log("new data here...")
    console.log(temp_hostel)
    // fetch data from backend...
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
        console.log(temp_hostel);
        for(let i=0;i<temp_details.length;i++)
        {
          console.log("iterate");
          if(temp_details[i].Name === temp_hostel.Name){
            console.log("to delete here");
            temp_details.splice(i,1);
            break;
          }
        }
        console.log(temp_details);
        temp_details=[temp_hostel,...temp_details]
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
            let temp= {...details};
            temp.notice=temp_notice;
            setDetails({...temp});
            toggleWindow()
          }
        ).catch(
          err => console.log(err)
        )


      }
    ).catch(
      err => console.log(err)
    )





    toggleWindow();

  }


  return (
    <>
      <div className="new-window"></div>
      <div className="data-window">
        <div className="close-menu" onClick={toggleWindow}> <label>X</label></div>
        <textarea type="text" value={setNotice} onChange={editNotice} style={{ alignSelf: 'center', height: '60vh' }} placeholder='Enter text here' />
        <label className="btn-del" onClick={uploadNotice}>Upload</label>
      </div>
    </>
  )
}

export default AddNotice
