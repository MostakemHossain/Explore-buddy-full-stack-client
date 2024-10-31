"use client";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { isLoggedIn } from "@/services/auth.services";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  const loggedIn = isLoggedIn();
  const { data, isLoading } = useGetMyProfileQuery({}, { skip: !loggedIn });

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Tours", path: "/tour-page" },
    { title: "Contact Us", path: "/contact-us" },
    ...(loggedIn ? [{ title: "Dashboard", path: "/dashboard" }] : []),
  ];

  if (!mounted) {
    return null;
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Box
        sx={{
          ml: {
            sx: 4,
            lg: 10,
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            sx={{ flexGrow: 1, color: "black", textDecoration: "none" }}
          >
            <Box component={"span"} color={"primary.main"}>
              E
            </Box>
            xplore{" "}
            <Box component={"span"} color={"primary.main"}>
              B
            </Box>
            uddy
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                  onKeyDown={handleDrawerToggle}
                >
                  <List>
                    {navLinks.map((link) => (
                      <ListItem
                        button
                        key={link.path}
                        component={Link}
                        href={link.path}
                        sx={{
                          backgroundColor:
                            pathname === link.path
                              ? "primary.light"
                              : "inherit",
                          color:
                            pathname === link.path ? "white" : "text.primary",
                          "&:hover": {
                            backgroundColor:
                              pathname === link.path
                                ? "primary.light"
                                : "grey.100",
                          },
                        }}
                      >
                        <ListItemText primary={link.title} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              {navLinks.map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  href={link.path}
                  sx={{
                    textDecoration: "none",
                    color: pathname === link.path ? "white" : "text.primary",
                    backgroundColor:
                      pathname === link.path ? "#FF5721" : "inherit",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor:
                        pathname === link.path ? "#D32F2F" : "grey.100",
                    },
                  }}
                >
                  {link.title}
                </Typography>
              ))}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AuthButton />
                {data?.role && (
                  <Stack
                    direction={"row"}
                    gap={3}
                    sx={{
                      marginLeft: "40px",
                      marginRight: "30px",
                    }}
                  >
                    <Link
                      href={`/dashboard/${data.role.toLowerCase()}/profile`}
                    >
                      <Avatar alt={data?.name} src={data?.profilePhoto} />
                    </Link>
                  </Stack>
                )}
              </Box>
            </Stack>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
