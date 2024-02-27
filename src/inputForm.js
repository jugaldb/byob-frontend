import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export default function InputForm({ setChannelData, setError }) {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setChannelData([]);
    setError("");
    setLoading(true);
    e.preventDefault();
    var channels = searchInput.split(",").map((channel) => {
      return channel.trim();
    });
    console.log(channels.length);
    if (channels.length === 1) {
      var query = channels[0];
      var URL =
        process.env.REACT_APP_BASE_URL + "/youtube/getOne?channelLink=" + query;

      try {
        const res = await axios.get(URL);
        setChannelData([res.data.data]);
      } catch (error) {
        setError(error.response.data.message);
      }
    } else {
      var URL = process.env.REACT_APP_BASE_URL + "/youtube/getBatch";
      try {
        const res = await axios.post(URL, {
          channels,
        });
        var respArray = [];
        res.data.data.forEach((channel) => {
          console.log(channel);
          if (channel.VideoMetrics) {
            respArray.push(channel.VideoMetrics);
          } else if (channel.Error !== "") {
            respArray.push({
              error: "Error: channel not found: " + channel.Query,
              query: channel.Query,
            });
          }
        });
        setChannelData(respArray);
      } catch (error) {
        setError(error.response.data.message);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Heading as="h3" size="lg">
        Enter your channel name(s) or link(s)
      </Heading>
      <Input
        placeholder="Enter comma separated channel names or links"
        my={"10px"}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Button colorScheme="blue" onClick={handleSubmit} isLoading={loading}>
        Get Info!
      </Button>
    </>
  );
}
