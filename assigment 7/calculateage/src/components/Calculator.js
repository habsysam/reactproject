import React, { useEffect, useState } from 'react'

const Calculator = () => {
    const [inDate, setInDate] = useState(new Date())
    const [upDate, setUpDate] = useState(new Date())
    const [changeDate, setchangeDate] = useState('')

    useEffect(() => {
        const todayDate = inDate.getDate()
        const todayMonth = inDate.getMonth()
        const todayYear = inDate.getFullYear()

        const updateDate = upDate.getDate()
        const updateMonth = upDate.getMonth()
        const updateYear = upDate.getFullYear()

        setchangeDate(`Age difference is : ${todayYear - updateYear} Year ${todayMonth - updateMonth} Month ${todayDate - updateDate} Days`)

    }, [upDate])

    console.log(inDate);

    const changeValue = (event) => {

        setUpDate(new Date(event.target.value))

    }
    return (
        <div  style={{backgroundColor :"GrayText"}} >
            <div  className='col-md-3 offset-2'>
                <input type="date" name='age' onChange={(event) => { changeValue(event) }} className='form-control' />

            </div>
            <div>
                <p>{changeDate}</p>

            </div>
        </div>
    )

}

export default Calculator
