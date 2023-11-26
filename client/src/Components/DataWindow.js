import React from 'react'

const DataWindow = (props) => {
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
}

export default DataWindow
