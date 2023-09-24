import React from 'react'
function check(data)
{
  if(data===null)
  {
    return (
    <div className="noData">
      <h3><u>No Data Available Currently...</u></h3>
    </div>
    )
  }
  else
  {
    return (
      <div className="data">
        data comes here...
      </div>
    )
  }
}
const DataBox = (props) => {
  return (
    <>
    {check(props.data)}
    </>
  )
}

export default DataBox
