"use client";
import { Box, Button, TextField, Typography } from "@mui/material";

const SubscriptionSection = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        my: 16,
        px: 2,
      }}
    >
     
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Stay Connected with Us
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Don’t miss out on exclusive offers and updates. Join our community!
        </Typography>
      </Box>

      
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
        
        }}
      >
        <Box
          component="img"
          src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png"
          alt="Tropical Beach"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: 200, md: "100%" },
            objectFit: "cover",
          }}
        />

     
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Get special offers, and more from Traveler
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Subscribe to see secret deals prices drop the moment you sign up!
          </Typography>
          <Box display="flex" gap={1} width="100%" maxWidth={400}>
            <TextField
              fullWidth
              placeholder="Email Address"
              variant="outlined"
              sx={{ flex: 1 }}
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubscriptionSection;
