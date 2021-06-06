import officeSpace from "../images/falcon_office.jpg";
import luxurySpace from "../images/falcon_luxury.jpg";
import economicalSpace from "../images/falcon_light.jpg";
import skyScrapper from "../images/falcon_skyscrapper.jpg";
import landingImage from "../images/falcon_landing-3.jpg";

export const LandingData = [
  {
    title: "Office Spaces",
    description: "Excellent Office Spaces for Your Business",
    image: officeSpace,
    isReverse: false,
  },
  {
    title: "Italian Luxury Bunglows",
    description: "Marvellous Luxury Bunglows",
    image: luxurySpace,
    isReverse: true,
  },
  {
    title: "Lavish Sky Scrapper",
    description: "Superb Sky Scappers for City View",
    image: skyScrapper,
    isReverse: false,
  },
  {
    title: "I-towers Apartments",
    description: "Affordable Apartments away from City",
    image: economicalSpace,
    isReverse: true,
  },
];

export const LandingIntro = {
  header: "FALCON Builders",
  tagline: "Developing the best for decades",
  imagePath: landingImage,
};
