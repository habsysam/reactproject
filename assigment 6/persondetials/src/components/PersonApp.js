import React, { useState } from 'react'
import PersonDetails from './PersonDetails'
import PersonList from './PersonList'
import habsy from './image/habsy.jpg'
import uma from './image/uma.jpg'
import madhu from './image/madhu.jpg'
import anu from './image/anu.jpg'
import sam from './image/sam.jpeg'
 

function PersonApp() {
 const [showData,setShowData]=useState([])
    const [users,serUsers]=useState([
        {
            name:'Habsy',
            age:24,
          Qualification :'Btech',
            Email:'habsysam@gmail.com',
            img:habsy
        },
        {
            name:'Sam',
            age:29,
            Qualification:'MCA',
            Email:'sam@gmail.com',
            img:sam
        },
        {
            name:'Anu',
            age:23,
            Qualification:'Mtech',
            Email:'Anu12342@gmail.com',
            img:anu
        },
        {
            name:'Madhu',
            age:24,
            Qualification:'Btech(ME)',
            Email:'madhu195@gmail.com',
            img:madhu
        },
        {
            name:'Uma',
            age:25,
            Qualification:'BCA',
            Email:'uma@gmail.com',
            img:uma
        },
         
    ])

    return (
        <div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-8'>
                        <PersonList users={users} setShowData={setShowData}/>
                    </div>
                    <div className='col-md-4'>
                        <PersonDetails showData={showData} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PersonApp
