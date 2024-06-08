import { useState } from "react";
import "./App.css";
import InputBox from "./components/Input";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const BackgroundImage = "https://img.freepik.com/premium-vector/global-currency-background_115579-405.jpg"
  return (
    <div
      className="w-full p-6 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >

      <div className="w-full">
        <h1 className="text-center my-7 font-bold text-white text-4xl">Currency Converter</h1>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" 
              
              amount = {amount}
              currencyOptions={options}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={currency => setFrom(currency)}
              selectCurrecy={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" 
              
              amount = {convertedAmount}
              currencyOptions={options}
              onCurrencyChange={currency => setTo(currency)}
              selectCurrecy={to}
              amoundDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase() + " to " + to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
