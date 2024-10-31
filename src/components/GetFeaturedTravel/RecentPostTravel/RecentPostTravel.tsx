"use client";
import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import RecentPostCard from "./components/RecentPostCard/RecentPostCard";

interface Trip {
  id: string;
  title: string;
  description: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  activities: string[];
  itinerary: string[];
  photos: string[];
  travelType: string;
  status: boolean;
  userId: string;
}

const RecentPostTravel = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrips = async () => {
    try {
      const res = await fetch(
        "https://tour-buddy-server.vercel.app/api/trips/all-trips?limit=3"
      );
      const data = await res.json();
      setTrips(data.data);
    } catch (error) {
      console.error("Failed to fetch trips:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <Box 
    sx={{ 
      
      textAlign: "center" }}>
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h3"
          color="primary.main"
          component="h1"
          gutterBottom
        >
          Discover Your Next Adventure
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Unveil the latest travel experiences and stories from around the
          world.
        </Typography>
      </Box>

      <Box >
        {isLoading ? (
          <Stack spacing={1}>
            <Skeleton variant="rectangular" height={300} />
            <Skeleton animation="wave" height={300} />
            <Skeleton animation={false} height={300} />
          </Stack>
        ) : (
          <Box sx={{
            marginLeft:{ xs: "0px", sm: "0px", md: "100px" },
            marginRight:{ xs: "0px", sm: "0px", md: "100px" },
            padding:"6px"
          }}>
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              {trips?.map((trip) => (
                <Grid item xs={12} sm={6} md={4} key={trip?.id}>
                  <RecentPostCard trip={trip} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RecentPostTravel;
