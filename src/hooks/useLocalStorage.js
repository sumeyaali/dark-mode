import React, {useState} from "react";



export const useLocalStorage = (key, initialValue) => {
// State properties
const [storedValue, setStoredvalue] = useState(() => {
// Get from local storage by key 
const item = window.localStorage.getItem(key);

//Parse and return stored json or it undefined return initialValue
return item ? JSON.parse(item) : initialValue;

});

// Functions  

const setValue = value => {
    // Save State
    setStoredvalue(value);
    // Save to local Storage
    window.localStorage.setItem(key, JSON.stringify(value));
    }


//Return storedValue in an array
return [storedValue, setValue];

};
