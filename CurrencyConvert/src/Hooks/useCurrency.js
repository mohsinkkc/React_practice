import { useEffect, useState } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true); // Manage loading state

    useEffect(() => {
        // if (!currency) return; // Ensure currency is provided

        setLoading(true); // Start loading while fetching data

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]); // Set the currency data
                // setLoading(false); // Stop loading once the data is set
            })
            // .catch((err) => {
            //     console.error("Error fetching currency data:", err);
            //     setLoading(false); // Stop loading on error
            // });
    }, [currency]);

    return { data, loading }; // Return data and loading state
}

export default useCurrency;





// import { useEffect, useState } from "react";


// function UseCurrency(currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//             .then((res) => res.json())
//             .then((res) => setData(res[currency]))
//         console.log("Data",data)
//     }, [currency])
//     // console.log(data);

// }

// export default UseCurrency