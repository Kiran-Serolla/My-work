import './Banner.css'
const Banner =()=>{
    // JSON object
    const bannerBackgroundImg ={
         backgroundImage: `url('/assets/images/shutterstock_348320018.png')`
    }

    return (
        <div className="container-fluid">
       
        <div className="row banner" style={bannerBackgroundImg}>
            
           <br/>
                
            <div className="col-md-12 offset-md-9">
                <span className="login">Login</span> &nbsp;
                <span className="createacc">Create an account</span>
            </div>
           
             <br/>
            
            <div className="col-md-12 offset-md-5">
                <div className="circle">
                    <span className="logo">
                        e!
                      </span>
                </div>
            </div>


           
            <div className="col-md-12 col-sm-12 offset-md-2">
                <span className="bigtext">
                    Find the best restaurants, cafés, and bars
                  </span>
            </div>


            
            <div className="col-md-3 offset-md-2">
                
                    <input type="text"
                    placeholder="Please type a location" 
                    className="form-control find"/> 
            </div>


           
            <div className="col-md-4">
                  <input type="text" 
                  placeholder="Search for restaurants"
                  className="form-control 
                  find"/>
            </div>
        </div>
    </div>
    
    )
}

export default Banner