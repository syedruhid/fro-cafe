import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export default function AboutSection() {
  const valuesData = [
    {
      title: "Friendliness",
      description:
        "A smile opens doors and hearts. We treat everyone with respect and warmth, whether guest or colleague. Friendliness is the first step toward true trust.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCHZiwOm-C03ds5VAxy6NbntKrSNSWsf9W4wTFjY-Lt9hoVglXEHogCvUG85qZ3dCfXITxMFxsctNefuubSLkMrAklFHy8Bk9sHWdkHRx1xQGFDTJ6ACXtIMfawxU8rTSyhjBaYuKJr1w3oqxFDkfSvBtYXH8Tu3JNLKgNPyROaL4fNJdTkjCqYiTHNPFXMXTe59XQ7tN8dvlYop8xONGk_YgVboUNvfYs2Klce8Dpbrc1O0Yc-gIxxNlyS_wQf9z5KWnaVcqJER8Sp",
    },
    {
      title: "Reliability",
      description:
        "You can rely on us—that's not an empty promise, but a lived reality. We stick together, meet deadlines, and keep our word. Trust grows when you can rely on one another.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEENBMh1hYUEew2fHLpQKgRc5VeWHiQ-QfHisdVHEkxIG3AqdSN6Vv7pjGyZw-3bE_mtwxElLYaN8K9hlXnhsR6QemUbameqyz6Gh3AR4SxA9lAkwaKCGktWrOWBA8iD2H82L7uzRm6cjmcNrE4Etjx0X6cI4WwGdGmeANhapiopmNgl8VieMj4GYRuDjyyd3ZiCZaFdnSOSep_bRxMO0l4QgArlp36srCUkFVlcCoRh2HW7lUOHoVfMwHmHbVaDLzaGs_PEYDN4h4",
    },
    {
      title: "Community",
      description:
        "We're like a crew on a sailboat. We can't control the weather, but together we set the sails and harness the wind to our advantage. Everyone counts. Together we overcome challenges.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHUWo_QsHhyGi3t-GVG5ihRfQTq005Ce5DLsW_SidJyUWkqFCs6lDwyUqaHKgfXxVZkTbdxt7RizSiYXyvflpbjB9GYn35rR6jnsHQrrIB6Yz0kylOuHPMwsw4M0jeRsw4oCG0NB1S-ewnWtZ8zxQotyNw1Daq5_2aBTfC0PL9rQf3Dtz2Gv3bHvdkaqHSfjvtCbrZUsYPa_up_OHdXL8w-veswU_unIIZh-N_xzOBzDHERziUgtj6WuoxRjvploeyUzQjUyVpYgLt",
    },
    {
      title: "Respect",
      description:
        "Everyone is valued for who they are. Diverse opinions and backgrounds are a strength. Respect creates the space for creativity and community to flourish.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBBNclWDXIgQ6EZzEx0Ix8lh0cxrlSkb2flHL925IQ7YIw_Xqfi7T7yR8IuwIr95liXWvvVfdrkfD7ry--EN5VbsusIQ0d6ui4ENdZf1ITUMeI_4WhTMC-u2Z4GrHzYuFXj_Vdmb0n715Aao55_XVcYa0zL8wBqDTZZ7pM9LLW9EZovZcsgeoKyA-1x3993QHZTGGnluLqSjkhm9qG6jN50d-5ZUlL3N1wcAXtiL-jo8UhsNweg9NkXu5bDpK6a-pomXjmv5IH6wDhq",
    },
  ];

  const isDesktop = window.innerWidth >= 600;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "rgba(163, 177, 138, 0.6)",
        backdropFilter: "blur(12px)",
        pt: 2,
      }}
    >
      {/* Mobile Title */}
      <Typography
        variant="h6"
        fontStyle={"inherit"}
        sx={{
          display: { xs: "block", sm: "none" },
          textAlign: "center",
        }}
      >
        Our Values
      </Typography>

      {/* Desktop Title */}
      <Typography
        variant="h3"
        fontStyle={"inherit"}
        sx={{
          display: { xs: "none", sm: "block" },
          textAlign: "start",
          p: 12,
        }}
      >
        Our Values
      </Typography>

      <Grid
        container={isDesktop}
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          flexDirection: { xs: "column", sm: "row" },
          mt: {xs: 5, md: 0}
        }}
      >
        {valuesData.map(({ title, description, imageUrl }) => (
          <Grid key={title} size={{ xs: 12, sm: 3 }}>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                background: "white",
                p: 3,
                m: 2,
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold" textAlign="center" mb={0}>
                {title}
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                textAlign="center"
                sx={{ lineHeight: 1.4}}
              >
                {description}
              </Typography>
            </Box>

            {/* Desktop Layout - Flip Card */}
            <Box
              className="w-full aspect-[3/4] [perspective:1000px]"
              sx={{
                display: { xs: "none", sm: "block" },
                maxWidth: 340,
                minHeight: 500,
                margin: "auto",
              }}
            >
              <Box className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
                {/* Front - Image */}
                <Box className="absolute inset-0 rounded-lg overflow-hidden shadow-lg [backface-visibility:hidden]">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </Box>

                {/* Back - Text */}
                <Box className="absolute inset-0 rounded-lg bg-white p-4 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center">
                  <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
                  <p className="text-sm text-gray-700 text-center">{description}</p>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

