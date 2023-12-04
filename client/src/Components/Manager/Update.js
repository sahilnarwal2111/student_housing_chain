import React, { useContext,useState } from 'react'
import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
import AddStudent from './AddStudent';

const Update = (props) => {
  
  const [newStu,setNewStu]=useState(false);
  const {details}=useContext(DetailsContext);
  const {setDetails}=useContext(DetailsContext);
  

  function openWindow(){
    setNewStu(!newStu);
  }

  function delStudent(item)
  {


    let temp_details=[];
    // insert data to backend here...
    console.log(details.Org)
    let temp_students = [...details.students];
    for(let i=0;i<temp_students.length;i++)
    {
      if(temp_students[i]._id === item._id)
      {
        temp_students.splice(i,1);
        break;
      }
    }
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
            let temp= {...details};
            temp.students = temp_students;
            setDetails(temp);
          }
        ).catch(
          err => console.log(err)
        )


      }
    ).catch(
      err => console.log(err)
    )
  }
  
  return (
    <>
      {newStu && <AddStudent setNewStu={setNewStu}/>}
      <div className="add-btn">
        <label onClick={openWindow}>+</label>
      </div>
      <DataBox dataspread={true} del={true} delFunc={delStudent} data={details.students}/>
    </>
  )
}

export default Update
