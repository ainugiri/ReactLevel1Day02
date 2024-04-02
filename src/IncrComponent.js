import React, {useState} from 'react';
function IncrComponent(){
    const dbvalue = 120;
    const [noOfLike, setNoOfLike] = useState(dbvalue); 
        
    return(
        <div>
            <button onClick = {() => setNoOfLike(noOfLike + 1)}>👍 </button>
            <button onClick = {() => setNoOfLike(noOfLike - 1)}>👎 </button>
            <p>{noOfLike}</p>
        </div>
    );
}
export default IncrComponent;
