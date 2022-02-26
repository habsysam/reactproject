import React from 'react'

function PersonDetails(props) {

    console.log(props.showData.length);
    return (
        <div id='divcard'> 
            {
                props.showData.length === 0 ? <h4 style={{color:'black' ,font : 20}}>Click on the image to know the details</h4> : <div className='card'>
                    <div  style={{backgroundColor :'black'}} className='card-header'>
                        <img src={props.showData.img} style={{  height: '120px', width: '120px', borderRadius: '65%' }} />
                    </div>
                    <div style={{backgroundColor : 'cornflowerblue'}} className='card-body'>
                        <ul className='list-group'>
                            <li className='list-group-item'>Name: {props.showData.name}</li>
                            <li className='list-group-item'>Age: {props.showData.age}</li>
                            <li className='list-group-item'>Qualification: {props.showData.Qualification}</li>
                            <li className='list-group-item'>Email: {props.showData.Email}</li>
                        </ul>
                    </div>
                </div>
            }


        </div>
    )
}

export default PersonDetails
