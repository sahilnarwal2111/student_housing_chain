import React,{useContext,useState,useEffect} from 'react'
import AddIssue from './AddIssue';
import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
const Notice = (props) => {
  const {details}=useContext(DetailsContext);

  const [newIssue,setNewIssue]=useState(false);
  const [toShow,setToShow]=useState([]);
  
  useEffect(()=>{
    function getData()
    {
      fetch(process.env.REACT_APP_PORT+"getdata",{
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
          let temp_details=[...data._doc.hostels];
          console.log(temp_details);
          for(let i=0;i<temp_details.length;i++)
          {
            console.log("iterate");
            if(temp_details[i].Name === details.Hostel){
              let temp_issue=[];
              for(let j=0;j<temp_details[i].issue.length;j++)
              {
                if(temp_details[i].issue[j]._id===details._id)
                {
                  temp_issue=[...temp_issue,temp_details[i].issue[j]];
                }
              }
              setToShow([...temp_issue]);
              break;
            }
          }

        }
      ).catch(
        err => console.log(err)
      )
    }
    getData();
    setInterval(getData,20000);
    console.log(toShow);
  },[])


  

  return (
    <>
      {newIssue && <AddIssue setNewIssue={setNewIssue}/>}
      <div className="add-btn">
        <label onClick={()=> setNewIssue(true)}>+</label>
      </div>
      <DataBox dataspread={true} del={false} data={toShow}/>
    </>
  )
}

export default Notice
