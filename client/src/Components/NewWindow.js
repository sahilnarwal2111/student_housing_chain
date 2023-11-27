import React from 'react'
import DataWindow from './DataWindow';
const NewWindow = (props) => {

    function toggleWindow(){
        props.setToggleWindow(false);
    }

    // function deleteData(){

    // }

    return (
        <>
            <div className='new-window'></div>
            <div className='data-window'>
            <div className="close-menu">
                <label onClick={toggleWindow}>X</label>
            </div>
                <DataWindow details={props.toShow}/>
            </div>
            
        </>
  )
}

export default NewWindow
