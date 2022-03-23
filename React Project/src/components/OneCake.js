const OneCake =(props)=>{
    return(
        <div>
                          Name :  {props.name} <br/>
                          Qty : {props.qty}   <br/>
                          In Stock : {props.isAvailable?'In-Stock':'Out-Of-Stock'} <br/>
                          <button onClick={e=>{props.buy(props.id)}} disabled={!props.isAvailable}>Buy cake</button>
                          <hr/>
        </div>
    )
}

export default OneCake