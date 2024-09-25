// import React from "react";
// import { Grid, Typography } from "@mui/material";

// const Home = ({ data }) => {
//   return (
//     <Grid
//       container
//       bgcolor="#e1c699"
//       sx={{ borderRadius: 10, padding: { xs: 5, sm: 7, lg: 10 }, my: 5 }}
//     >
//       {data.label ? (
//         <Grid item xs={12} mb={2}>
//           <Typography color="#c79842" variant="h4" fontWeight={650}>
//             {data.label}
//           </Typography>
//         </Grid>
//       ) : null}
//       <Grid item xs={12}>
//         <Typography color="black" variant="h4">
//           {data.name}
//         </Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <Typography color="black">{data.detailDes}</Typography>
//       </Grid>
//       {data.ArabicLabel ? (
//         <Grid item xs={12}>
//           <Typography color="black">{data.ArabicLabel}</Typography>
//         </Grid>
//       ) : null}
//     </Grid>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { Grid, Typography, Fade } from "@mui/material";

const Home = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Grid
      container
      bgcolor="#e1c699"
      sx={{ borderRadius: 10, padding: { xs: 5, sm: 7, lg: 10 }, my: 5 }}
    >
      {data && ( // Check if data is defined
        <>
          <Fade in={isVisible} timeout={1000}>
            <Grid item xs={12} mb={2}>
              {data.label ? (
                <Typography color="#c79842" variant="h4" fontWeight={650}>
                  {data.label}
                </Typography>
              ) : null}
            </Grid>
          </Fade>

          <Fade in={isVisible} timeout={1200}>
            <Grid item xs={12}>
              <Typography color="black" variant="h4">
                {data.name}
              </Typography>
            </Grid>
          </Fade>

          <Fade in={isVisible} timeout={1400}>
            <Grid item xs={12}>
              <Typography color="black">{data.detailDes}</Typography>
            </Grid>
          </Fade>

          {data.ArabicLabel && ( // Only render if defined
            <Fade in={isVisible} timeout={1600}>
              <Grid item xs={12}>
                <Typography color="black">{data.ArabicLabel}</Typography>
              </Grid>
            </Fade>
          )}
        </>
      )}
    </Grid>
  );
};

export default Home;
