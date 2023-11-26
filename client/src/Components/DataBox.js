import React, { useState } from 'react'
import NewWindow from './NewWindow';
const DataBox = (props) => {

  const [toggleWindow,setToggleWindow] = useState(false);
  const [toShow,setToShow] =useState({});


  console.log("in data box...")
  console.log(props.data)
  if (props.data.length===0)
  {
    return (
      <div className="noData">
        <h3><u>No Data Available Currently...</u></h3>
      </div>
      )
  }
  else 
    return (
      <>
        {toggleWindow && <NewWindow setToggleWindow={setToggleWindow} toShow={toShow}/>}
        {
          Object.values(props.data).map((item) =>{
            console.log(item);
            return (
              <div id={item.Name} onClick={()=>{
                console.log("toShow")
                console.log(toShow)
                setToShow({...item})
                setToggleWindow(true)
                
              }} className='Databox'>
                <h3>{item.Name}</h3>
                <p>{item.address}</p>
              </div>
            )
          })
        }
      </>
    )
}

export default DataBox
