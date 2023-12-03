import React, { useState } from 'react'
import NewWindow from './NewWindow';
const DataBox = (props) => {

  const [toggleWindow,setToggleWindow] = useState(false);
  const [toShow,setToShow] =useState({});


  console.log("in data box...")
  console.log(props.data)

  if(props.data===undefined || props.data===null) return;
  if (props.data.length===0)
  {
    return (
      <div className="noData">
        <h3><u>No Data Available Currently...</u></h3>
      </div>
      )
  }
  
  else if(props.dataspread)
  {    console.log("where "+typeof props.data[0]);
    return (
      <>
        {toggleWindow && <NewWindow dataspread={true} del={props.del} delFunc={props.delFunc} setToggleWindow={setToggleWindow} toShow={toShow}/>}
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
  else
  {
    return (
    <>
    {toggleWindow && <NewWindow dataspread={props.dataspread} del={props.del} delFunc={props.delFunc} setToggleWindow={setToggleWindow} toShow={toShow}/>}
    {
      Object.keys(props.data).map((item) =>{
        console.log(item);
        return (
          <div id={item} onClick={()=>{
            console.log("toShow")
            console.log(toShow)
            setToShow(props.data[item])
            setToggleWindow(true)
            
          }} className='Databox'>
            <p>{props.data[item]}</p>
          </div>
        )
      })
    }
    </>
    )
  }
}

export default DataBox
