import React from 'react'

const DataWindow = (props) => {
  console.log(props.dataspread)
  if(props.dataspread)
  return (
    <div className="details-window">
      {Object.keys(props.details).map((item)=>{
        if(Array.isArray(props.details[item]))
            return (  
                <div className='key-value'>
                    <h3 className="key">{item}</h3>
                    <h4 className="value">{props.details[item].length}</h4>
                </div>
            ) 
            
        else
            return (
                <div className='key-value'>
                    <h3 className="key">{item}</h3>
                    <h4 className="value">{props.details[item]}</h4>
                </div>
        )
        })}
    </div>
  )
  else
    return (
      <div className="details-window">
      <p>{props.details}</p>
    </div>
   )
}

export default DataWindow
