import React,{useContext,useState} from 'react'

import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
import AddNotice from './AddNotice';
const Notice = (props) => {
  const {details}=useContext(DetailsContext);
  const [newNotice,setNewNotice]=useState(false);
  const {setDetails}=useContext(DetailsContext);
  

  function delNotice(item){
    let temp_details=[];
    // insert data to backend here...
    console.log(details.Org)
    let temp_notice = [...details.notice];
    for(let i=0;i<temp_notice.length;i++)
    {
      if(temp_notice[i] === item)
      {
        temp_notice.splice(i,1);
        break;
      }
    }
    let temp_hostels={...details};
    delete temp_hostels.Org;
    temp_hostels.notice=temp_notice;
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
            temp.notice = temp_notice;
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
      {newNotice && <AddNotice setNewNotice={setNewNotice}/>}
      <div className="add-btn">
        <label onClick={()=> setNewNotice(true)}>+</label>
      </div>
      <DataBox dataspread={false} del={true} delFunc={delNotice} data={details.notice}/>
    </>
  )
}

export default Notice
