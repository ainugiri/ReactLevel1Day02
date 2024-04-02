import React, {useState} from 'react';
 
export default function StatePlus(){  
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    
    const date = new Date("April 2 2024");
    date.setDate(date.getDate() + count);
    return (
        <div>
            <h2>State Plus</h2>
            <div>
                <button onClick={() => setStep((c)=>c-1)}>-</button>
                <span> value {step} </span>
                <button onClick={() => setStep((c)=>c+1)}>+</button>
            </div>
            <div>
                <button onClick={() => setCount((c)=>c-step)}>-</button>
                <span> count  {count} </span>
                <button onClick={() => setCount((c)=>c+step)}>+</button>
            </div>

            <div>
                <p>
                <span> {count === 0?
                "Today Date is " 
                :count > 0
                ? `${count} days in Future`
                :`{Math.abs(count)} days in ago`} </span>
                <span> {date.toDateString()} </span>
                </p>
                </div>


        </div>
    );
}
 