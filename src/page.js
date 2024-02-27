import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Box,
  Heading,
  Image,
  AspectRatio,
  Grid,
  SimpleGrid,
  StatHelpText,
} from "@chakra-ui/react";

const dummyData = {
  SubscriberCount: 2470000,
  TotalViews: 1598590771,
  TotalVideos: 3140,
  Country: "IN",
  AvgViewsPerVideo: 509105.34108280257,
  Keywords: [
    "building",
    "new",
    "subscribe",
    "official",
    "channel",
    "shark",
    "tank",
    "india",
    "stay",
    "tuned",
    "amazing",
    "content",
    "coming",
  ],
  ChannelCreated: "2022-06-07T12:48:49.17823Z",
  ChannelName: "Shark Tank India",
  ProfileImageURL:
    "https://yt3.ggpht.com/nfrP94TD-7CC2pSqLXjeluf0SRIloELxGvCf9nL4DeJqBeonHcgwm0IePafovV8MzCWeQ9qhpA=s800-c-k-c0x00ffffff-no-rj",
  BannerImageURL:
    "https://yt3.googleusercontent.com/bpAUKEnNPCck3ZW5msjc-LJIvqx1w4uGAJNumz0r-7Fk3QajW0rYuc_SKtm1YMtUZmcuuY4d",
  LatestVideo: "https://www.youtube.com/embed/BGCL21fU4ZM",
};

export default function Page({ data = dummyData }) {
  return (
    <Box>
      <Heading as="h3" size="lg">
        {data.ChannelName}
      </Heading>
      <Heading as="h2" size="md">
        Created on: {new Date(data.ChannelCreated).toLocaleString()}
      </Heading>
      <Image src={data.BannerImageURL} alt={data.ChannelName} width={"100%"} />
      <SimpleGrid columns={2}>
        <Image src={data.ProfileImageURL} alt={data.ChannelName} width={300} />
        <Box>
          <Heading as="h2" size="md">
            Latest Video
          </Heading>
          <AspectRatio maxW="200px" ratio={1}>
            <iframe title="naruto" src={data.LatestVideo} allowFullScreen />
          </AspectRatio>
        </Box>
      </SimpleGrid>

      <SimpleGrid minChildWidth="120px" spacing={"20px"}>
        <Stat>
          <StatLabel>Total Subscriber</StatLabel>
          <StatNumber>{formatNumber(data.SubscriberCount)}</StatNumber>
          <StatHelpText>23%</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total Channel views</StatLabel>
          <StatNumber>{formatNumber(data.TotalViews)}</StatNumber>
          <StatHelpText>23%</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total videos</StatLabel>
          <StatNumber>{formatNumber(data.TotalVideos)}</StatNumber>
          <StatHelpText>23%</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Country</StatLabel>
          <StatNumber>{data.Country !== "" ? data.Country : "US"}</StatNumber>
          <StatHelpText>9.05%</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Average Views per video</StatLabel>
          <StatNumber>{formatNumber(data.AvgViewsPerVideo)}</StatNumber>
          <StatHelpText>23%</StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
}

function formatNumber(number) {
  // Use the toLocaleString method to add suffixes to the number
  return number.toLocaleString("en-US", {
    // add suffixes for thousands, millions, and billions
    // the maximum number of decimal places to use
    maximumFractionDigits: 2,
    // specify the abbreviations to use for the suffixes
    notation: "compact",
    compactDisplay: "short",
  });
}
