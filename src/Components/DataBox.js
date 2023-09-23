import React from 'react'

function tryloop()
{
    let temp;
    for(let i=0;i<10;i++)
    {
        temp=temp+<p>{i}</p>;
    }
    console.log(temp);
    return temp;
}
const DataBox = (props) => {
  return (
    <div className="data">
        {tryloop()}
    </div>
  )
}

export default DataBox
