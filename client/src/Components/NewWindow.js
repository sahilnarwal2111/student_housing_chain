import React from 'react'
import DataWindow from './DataWindow';
const NewWindow = (props) => {

    function toggleWindow(){
        props.setToggleWindow(false);
    }

    function deleteData(){
        props.delFunc(props.toShow);
        props.setToggleWindow(false);
    }

    return (
        <>
            <div className='new-window'></div>
            <div className='data-window'>
            <div className="close-menu">
                <label onClick={toggleWindow}>X</label>
            </div>
                <DataWindow details={props.toShow}/>
                {props.del && <label className="btn-del" onClick={deleteData}>Remove</label>}
            </div>
            
        </>
  )
}

export default NewWindow
