setTimeout(()=>{
   let tab = document.getElementById("table");
    
    var int = 4.55;
    int += "%";
    var roi_one = 9.83;
    roi_one += "%"
    var roi_two = 12.4;
    roi_two += "%"
    var market = "UP";
    var invt = "Rent";
    
    var array = [["Interest:", int],
             ["ROI-5yr:",roi_one],
             ["ROI-10yr:",roi_two],
                ["Market", market],
                 ["Investment",invt]
                ]
                  
           
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
