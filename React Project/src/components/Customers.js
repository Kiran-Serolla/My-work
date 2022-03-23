/** this componenet illustrated use of useEffect */
import { useState, useEffect } from "react"


const Customers = (props)=>{
    //my two counters
    const [counter1, setCounter1]=useState(10)
    const [counter2, setCounter2]=useState(20)

    //fetch fn to call all the users
    const getUsers = async()=>{
                try {
                    const response =  await fetch('https://jsonplaceholder.typicode.com/users')
                    const users = await response.json()
                    console.log(users)
                } catch (error) {
                   console.log(error)   
                }         
    }
   

    //use Effect
    useEffect(()=>{
        //code
        getUsers()
    },[counter1])  // dependency array


   return (
       <>
            My customers component! <br/>
            Counter 1 : {counter1} <button onClick={e=>setCounter1(counter1+1)}>ctr1+</button> <br/>
            Counter 2 : {counter2} <button onClick={e=>setCounter2(counter2+1)}>ctr2+</button> <br/>
       </>
   )
}

export default Customers