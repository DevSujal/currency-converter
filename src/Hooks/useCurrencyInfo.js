import { useEffect, useState } from "react";

// custon hook
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  // console.log(currency);
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.log(err));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
