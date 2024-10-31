import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  trip: any;
};

const RecentPostCard = ({ trip }: TProps) => {
  const truncatedDescription = trip.description.slice(0, 65) + ".....";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "80%", md: "345px" },
        margin: { xs: "15px auto", sm: "15px" },
        boxShadow: 3,
        borderRadius: "15px",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Image
          src={trip.photos[2]}
          alt="card"
          width={500}
          height={100}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <Chip
          label="Hot"
          color="error"
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            paddingX: "10px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            boxShadow: 2,
          }}
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
          {trip?.destination}
          <LocationOnIcon
            fontSize="small"
            sx={{
              color: "primary.main",
              marginLeft: "5px",
              verticalAlign: "middle",
            }}
          />
        </Typography>
        <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
          <Grid item>
            <Typography variant="body1">{truncatedDescription}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            <span style={{ color: "#00796b", fontWeight: "bold" }}>
              Start Date:
            </span>{" "}
            {trip.startDate}
          </Typography>
          <Typography variant="body2">
            <span style={{ color: "#d32f2f", fontWeight: "bold" }}>
              End Date:
            </span>{" "}
            {trip.endDate}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ mt: 1, color: "purple", fontWeight: 500 }}
        >
          Travel Type: {trip.travelType}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          sx={{
            borderTop: "1px solid #ddd",
            pt: 2,
          }}
        >
          <Link href={`/${trip.id}`} passHref>
            <Button variant="contained" color="primary">
              Details
            </Button>
          </Link>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ color: "#ff5722" }} // Custom color for price
          >
            ${trip.budget}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecentPostCard;
