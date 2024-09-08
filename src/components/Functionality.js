import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Functionality() {
  return (
    <Box sx={{ paddingTop: '68px', paddingBottom: '68px' }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ paddingLeft: '68px', textAlign: 'left' }}
      >
        Discover the Heart of Our Functionality
      </Typography>

      <Box sx={{ display: 'flex', gap: '10px', paddingLeft: '68px', marginTop: '20px' }}>
        {/* First Card */}
        <Paper
          sx={{ height: '408px', width: '320px', backgroundColor: '#ffff', padding: '16px', position: 'relative' }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontSize: '14px', textAlign: 'left' }}
          >
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ fontSize: '13px', textAlign: 'left', marginTop: '8px' }}
          >
            Immerse your customers in a branded experience by personalizing the colors on your tracking page.
          </Typography>
          <Box sx={{ marginTop: '16px' }}>
            {/* Input fields with color boxes */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <TextField
                label="Accent Color"
                defaultValue="#FF9898"
                variant="outlined"
                sx={{ fontSize: '13px', marginRight: '8px' }}
                InputLabelProps={{ style: { fontSize: '13px' } }}
                inputProps={{ style: { fontSize: '13px' } }}
              />
              <Box
                sx={{
                  width: '64px',
                  height: '32px',
                  borderRadius: '8px 0 0 0',
                  backgroundColor: '#FF9898'
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <TextField
                label="Text Color"
                defaultValue="#571010"
                variant="outlined"
                sx={{ fontSize: '13px', marginRight: '8px' }}
                InputLabelProps={{ style: { fontSize: '13px' } }}
                inputProps={{ style: { fontSize: '13px' } }}
              />
              <Box
                sx={{
                  width: '64px',
                  height: '32px',
                  borderRadius: '8px 0 0 0',
                  backgroundColor: '#571010'
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label="Background Color"
                defaultValue="#FFEAEA"
                variant="outlined"
                sx={{ fontSize: '13px', marginRight: '8px' }}
                InputLabelProps={{ style: { fontSize: '13px' } }}
                inputProps={{ style: { fontSize: '13px' } }}
              />
              <Box
                sx={{
                  width: '64px',
                  height: '32px',
                  borderRadius: '8px 0 0 0',
                  backgroundColor: '#FFEAEA'
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', position: 'absolute', bottom: '16px', left: '16px' }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px' }}
            >
              Preview
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#000000', color: '#FFFFFF', fontSize: '12px' }}
            >
              Apply Color
            </Button>
          </Box>
        </Paper>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Second Card */}
          <Paper
            sx={{ height: '152px', width: '430px', backgroundColor: '#ffff', padding: '16px', position: 'relative' }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: '14px', textAlign: 'left' }}
            >
              Exclusive Onboarding Support for High-Volume Brands
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontSize: '13px', textAlign: 'left', marginTop: '8px' }}
            >
              Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#000000', color: '#FFFFFF', fontSize: '12px', position: 'absolute', bottom: '16px', left: '16px' }}
            >
              Schedule a Call
            </Button>
          </Paper>

          {/* Third Card */}
          <Paper
            sx={{ height: '222px', width: '430px', backgroundColor: '#ffff', padding: '16px', position: 'relative' }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: '14px', textAlign: 'left' }}
            >
              Explore Our Integrated Ecosystem
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontSize: '13px', textAlign: 'left', marginTop: '8px' }}
            >
              Discover a variety of popular integrations tailored for your convenience.
            </Typography>
            <Box sx={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <img src="Paypal.png" alt="Image 1" style={{ width: '34px', height: '34px' }} />
              <img src="image2.png" alt="Image 2" style={{ width: '34px', height: '34px' }} />
              <img src="image3.png" alt="Image 3" style={{ width: '34px', height: '34px' }} />
              <img src="image4.png" alt="Image 4" style={{ width: '34px', height: '34px' }} />
              <img src="image5.png" alt="Image 5" style={{ width: '34px', height: '34px' }} />
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#000000', color: '#FFFFFF', fontSize: '12px', position: 'absolute', bottom: '16px', left: '16px' }}
            >
              Explore Integrations
            </Button>
          </Paper>
        </Box>

        {/* Fourth Card */}
        <Paper
          sx={{ height: '408px', width: '320px', backgroundColor: '#ffff', padding: '16px', position: 'relative' }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontSize: '14px', textAlign: 'left' }}
          >
            Seamlessly Integrate Custom HTML Elements
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ fontSize: '13px', textAlign: 'left', marginTop: '8px' }}
          >
            Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
          </Typography>
          <Box sx={{ marginTop: '16px' }}>
            <TextField
              label="HTML Link"
              defaultValue="value"
              variant="outlined"
              sx={{ width: '300px', height: '128px', fontSize: '13px' }}
              InputLabelProps={{ style: { fontSize: '13px' } }}
              inputProps={{ style: { fontSize: '13px' } }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', position: 'absolute', bottom: '16px', left: '16px' }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px' }}
            >
              Preview
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#000000', color: '#FFFFFF', fontSize: '12px' }}
            >
              Apply Changes
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Functionality;
