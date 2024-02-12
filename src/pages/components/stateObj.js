import { useState } from 'react';

export default function PersonData() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [age, setAge] = useState(0);
    const [person, setPerson] = useState({fullName: '', age: 0})

    //this is a hook for the person object
    function handleClick() {
        let name = fName + ' ' + lName;
        setPerson({fullName: name, age: age});
    }

    /* This is a form to pass stuff into the person setter*/
    return(
       <>
            <textarea value={fName} onChange={e => setFName(e.target.value)} />
            <textarea value={lName} onChange={e => setLName(e.target.value)} />
            <textarea value={age} onChange={e => setAge(e.target.value)} />
            <button onClick={handleClick}> Save </button>
            {person.fullName && <p> Person: {person.fullName} is {person.age} years old </p>}
       </>
    )
}