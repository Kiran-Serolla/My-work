
/** This is a component that displays list of cakes it is developed to illustrate useState */
import {useState} from 'react'
import OneCake from './OneCake'
const Cakes = ()=>{
    //some cakes here
    const [myCakes, setMyCakes]= useState([
    {
        name : 'Vanilla',
        id : 90,
        qty : 7,
        isAvailable : true
    },{
        name : 'ButterScotch',
        id : 34,
        qty : 1,
        isAvailable : true
    },{
        name : 'Chocolate',
        id : 12,
        qty : 0,
        isAvailable : true
    }])

      // buyCake
    const buyCake =(id)=>{
        
        //make copy of cakes : pure functions
        const copy_cakes = [...myCakes]  //{...myObj}
        // find the index of the cake which is to be modified
        const cakeIndex = copy_cakes.findIndex(eachCake=>eachCake.id===id)  //1
        // modify that cake
        copy_cakes[cakeIndex].qty= copy_cakes[cakeIndex].qty -1
        if(copy_cakes[cakeIndex].qty<1){
            copy_cakes[cakeIndex].isAvailable = false
        }
        // update the actual myCakes with copy
        setMyCakes(copy_cakes)
        
    }


    return(
    <div>
        {myCakes.map(eachCake=>
        <OneCake key={eachCake.id}  {...eachCake} buy={buyCake} />)}  
    </div>)
}

export default Cakes