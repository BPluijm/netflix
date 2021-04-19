import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';


function App() {

    // const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    const options = {
        method: 'GET',
        url: 'https://unogsng.p.rapidapi.com/countries',
        headers: {
            'x-rapidapi-key': '5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9',
            'x-rapidapi-host': 'unogsng.p.rapidapi.com'
        }
    }

   useEffect(() => {
    setError('');
    toggleLoading(true);

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    toggleLoading(false);
  },[]);


    return (
        <ul>
            {error && <p>{error}</p>}
            {loading && <p>Data wordt geladen...</p>}
        </ul>
    );

}

export default App;


// useEffect(() => {
//     async function fetchData() {
//         setError('');
//         toggleLoading(true);
//
//         try {
//             axios.request(options).then(function (response) {
//                 console.log(response.data);
//             }).catch(function (error) {
//                 console.error(error);
//             });
//             const response = await axios.get(  `https://unogsng.p.rapidapi.com/countries/`);
//             setCountries(response.data);
//         } catch(e) {
//             setError(`Er is iets mis gegaan bij het ophalen van de data 😢`);
//             console.error(e);
//         }
//         toggleLoading(false);
//     }
//
//   fetchData();
// },[]);
//
//     return (
//         <ul>
//             {error && <p>{error}</p>}
//             {loading && <p>Data wordt geladen...</p>}
//
//             {countries && countries.map((country) => {
//                 return <li key={country.name}>{country.name}</li>
//             })}
//         </ul>
//     );
// }
//
// export default App;