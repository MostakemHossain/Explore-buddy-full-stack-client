import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const OfferCards = () => {
  const cards = [
    {
      backgroundImage:
        "url(https://img.freepik.com/premium-photo/full-shot-travel-concept-with-landmarks_1174912-5236.jpg?semt=ais_hybrid)",
      overlayColor: "rgba(0, 82, 204, 0.7)",
      title: "Special Offer",
      subtitle: "Adventure Awaits",
      discount: "50% OFF",
      description: "Select hotel deals to kickstart your adventure",
      buttonText: "Learn More",
    },
    {
      backgroundImage:
        "url(https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg)",
      overlayColor: "rgba(255, 214, 0, 0.7)",
      title: "Get 20% OFF!",
      subtitle: "Travel the World",
      discount: "Let’s explore the world.",
      description: "Book your next dream destination at a discount",
      buttonText: "Book Now",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <Box className="flex flex-col gap-10 sm:flex-row sm:gap-8 p-4">
        {cards.map((card, index) => (
          <Box
            key={index}
            className="rounded-lg shadow-md relative p-6 flex flex-col justify-between overflow-hidden"
            style={{
              backgroundImage: card.backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
          >
            <Box
              className="absolute inset-0"
              style={{
                backgroundColor: card.overlayColor,
                opacity: 0.7,
                zIndex: 1,
              }}
            ></Box>

            <Box sx={{ padding: "50px" }} className="relative z-10">
              <Typography variant="h5" className="font-bold mb-1">
                {card.title}
              </Typography>
              <Typography variant="subtitle1" className="mb-2">
                {card.subtitle}
              </Typography>
              <Typography variant="h3" className="font-extrabold mb-2">
                {card.discount}
              </Typography>
              {card.description && (
                <Typography variant="body1" className="mb-4">
                  {card.description}
                </Typography>
              )}
              <Link href={"/tour-page"}>
                <Button
                  variant="contained"
                  className="mt-auto w-full bg-white text-black hover:bg-gray-200"
                  style={{ zIndex: 10 }}
                >
                  {card.buttonText}
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default OfferCards;
