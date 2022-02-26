import React from 'react'

function PersonList(props) {
    const storeIndex=(index)=>{
        const usersCopy=props.users[index]
        props.setShowData(usersCopy)
    }
    return (
        <div style={{backgroundColor :" black",width:'fit-content' ,height:'600px'}} >
            <div  className='row row-cols-1 row-cols-md-3 g-4'>
                {props.users.map((obj,index)=>{
            return <div  className='col' key={index}>
                    <div className=''>
                        <img style={{height:'270px', width:'225px' ,border:'50%'}} src={obj.img} onClick={()=>{storeIndex(index)}}/> 
                    </div>
                </div>
                })}
            </div>

        </div>
    )
}

export default PersonList
