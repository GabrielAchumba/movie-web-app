
export const filterList = (rows, filter) => {
    
    var lowerSearch = filter ? filter.toLowerCase() : ""
    
    const filteredRows = rows.filter(
        (row, i) =>{
        
        let s1 = true

        if(lowerSearch != ""){
            s1 = false
            let s1_values = Object.values(row)
            let s1_lower = s1_values.map(x => {
                if(typeof x != "object" && 
                typeof x != "function" && 
                typeof x != "undefined"){
                    return x.toString().toLowerCase();
                }else{
                    return "";
                }
                
            })
            
            for (let val = 0; val<s1_lower.length; val++){
                if (s1_lower[val].includes(lowerSearch)){
                s1 = true
                break
                }
            }
        }else{
            s1 = true
        }
    
        return s1
    
        })
    
    return filteredRows
    }