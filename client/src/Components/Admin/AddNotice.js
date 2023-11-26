import React from 'react'

const AddNotice = (props) => {

    const toggleWindow=() =>{
        props.setNewNotice((prev) => {
            prev=!prev;
        })
    }
  return (
    <>
      <div className="new-window"></div>
      <div className="data-window">
        <div className="close-menu" onClick={toggleWindow}> <label>X</label></div>
      </div>
    </>
  )
}

export default AddNotice
