import logo from "./logo.svg";
import "./App.css";
import InputForm from "./inputForm";
import Page from "./page";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [channelData, setChannelData] = useState([]);
  const [error, setError] = useState("");

  return (
    <Box px={"30"} pt={"30"}>
      <InputForm setChannelData={setChannelData} setError={setError} />
      {error !== "" && <h1>{error}</h1>}
      {channelData.map((data, index) => {
        if (data.error) {
          return <h1 key={index}>{data.error}</h1>;
        } else {
          return <Page data={data} key={index} />;
        }
      })}
    </Box>
  );
}

export default App;
