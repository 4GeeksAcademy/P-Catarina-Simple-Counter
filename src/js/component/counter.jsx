import React, { useEffect, useState } from "react";


const SecondsCounter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        setInterval(() => {
            setCounter((count) => count + 1);
        }, 1000);
    }, []);

    const time = Array.from(String(counter), Number);
    while (time.length < 6) time.unshift(0);    
    const timer = time.map(value => <li class="list-group-item p-5"><h1>{value}</h1></li>);

	return (
        <div className="container-fluid d-flex p-5">
        <ul class="list-group list-group-horizontal m-auto">
        <li class="list-group-item p-5"><h1><i class="far fa-clock"></i></h1></li>
        {timer}
        </ul>
        </div>
	);
};


export default SecondsCounter;