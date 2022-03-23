import './QuickSearch.css'
const QuickSearch =()=>{
    return(
        <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h2 className="heading">Quick Searches</h2>
        <h4 className="subheading">Discover restaurants by type of meal</h4>
      </div>
    </div>

    
    <div className="row">
      <div className="col-md-4">


       
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
          <div className="row g-0">
            <div className="col-md-4 fill">
              <img src="/assets/images/breakfast.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title heading">Breakfast</h5>
                <p className="card-text">Start your day with exclusive breakfast options</p>
              </div>
            </div>
          </div>
        </div>




      </div>
      <div className="col-md-4">
        

      
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
          <div className="row g-0">
            <div className="col-md-4 fill">
              <img src="/assets/images/lunch.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title heading">Lunch</h5>
                <p className="card-text">Start your day with exclusive lunch options</p>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="col-md-4">
        

        
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
          <div className="row g-0">
            <div className="col-md-4 fill">
              <img src="/assets/images/dinner.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title heading">Dinner</h5>
                <p className="card-text">Start your day with exclusive dinner options</p>
              </div>
            </div>
          </div>
        </div>



      </div>

    </div>

    
    <div className="row">
      <div className="col-md-4">
        

            
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
          <div className="row g-0">
            <div className="col-md-4 fill">
              <img  src="/assets/images/snacks.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title heading">Snacks</h5>
                <p className="card-text">Start your day with exclusive snacks options</p>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="col-md-4">
        

       
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
          <div className="row g-0">
            <div className="col-md-4 fill">
              <img src="/assets/images/drinks.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title heading">Drinks</h5>
                <p className="card-text">Start your day with exclusive drinks options</p>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="col-md-4">
        

            
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
          <div className="row g-0">
            <div className="col-md-4 fill">
              <img src="/assets/images/nightlife.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title heading">Nightlife</h5>
                <p className="card-text">Start your day with exclusive night life options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default QuickSearch