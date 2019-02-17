setTimeout(()=>{
   let tab = document.getElementById("table");

var array = [["Interest:", "First"],
             ["ROI:","Second"],
             ["Market:","Third"]]
                  
           
           for(var i = 0; i < array.length; i++)
           {
               // create a new row
               
               var newRow = tab.insertRow(tab.length);
               for(var j = 0; j < array[0].length; j++)
               {
                   // create a new cell
                   
                   var cell = newRow.insertCell(j);
                   
                   // add value to the cell
                   cell.innerHTML = array[i][j];
               }
           }

    
})
