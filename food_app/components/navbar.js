function navbar(){
    return `
                <h3>
                    <a href="./index.html">Home</a>
                </h3>
                <div id="options">

                    <h3>
                        <a href="./ByName.html">Receipe By Name</a>
                    </h3>
                    <h3>
                        <a href="./ByDay.html">Receipe By Day</a>
                    </h3>
                    <h3>
                        <a href="Random.html">Show Random Receipes</a>
                    </h3>
                
                </div>
    
    
           `
      }

      function search(){
        return `
               
        <input type="text" id="inputid" placeholder="Enter Receipes Name">
        <button id="btn">Search</button>
               `
    }
       export {navbar,search} ;
    //export default navbar;