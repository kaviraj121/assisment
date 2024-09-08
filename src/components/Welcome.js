import React from 'react';
import { Card, CardContent, Typography, Button, Box, Link } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { styled } from '@mui/system';

// Define card styles directly with fixed height
const StyledCard = styled(Card)({
  width: '332px',
  height: '168px', // Fixed height for uniformity
  borderRadius: '8px',
  marginRight: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Space between content and buttons
});

// Styled second card with specific background color
const SecondCard = styled(StyledCard)({
  backgroundColor: '#FFF8DB', // Background color for the second card
});

// Styled third card with specific background color
const ThirdCard = styled(StyledCard)({
  backgroundColor: '#EAF4FF', // Background color for the third card
});

// Container for cards
const CardsContainer = styled('div')({
  position: 'absolute',
  top: '50px', // Reduced top position
  left: '68px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '16px',
  width: 'auto',
});

// Styled Welcome Text Container
const WelcomeContainer = styled('div')({
  width: '292px',
  height: '32px',
  position: 'absolute',
  top: '80px', // Reduced top position to decrease gap
  left: '68px',
  gap: '0px',
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  letterSpacing: '-0.2px',
  textAlign: 'center',
});

const CardContentWrapper = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  height: '100%', // Ensures content takes full height of the card
});

// Styled heading for cards
const StyledHeading = styled(Typography)({
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: 650,
  lineHeight: '20px',
  textAlign: 'left',
  fontVariationSettings: "'slnt' 0",
});

// Styled content for cards
const StyledContent = styled(Typography)({
  fontFamily: 'Inter',
  fontSize: '13px',
  fontWeight: 450,
  lineHeight: '20px',
  textAlign: 'left',
  fontVariationSettings: "'slnt' 0",
});

// Button styles
const CommonButton = styled(Button)({
  height: '28px', // Fixed height
  backgroundColor: 'black', // Black background
  color: 'white', // White text
  padding: '0', // Remove padding
  borderRadius: '16px', // Rounded corners
  textTransform: 'none', // Prevent button text from being uppercase
  fontFamily: 'Inter', // Match the font family
  fontSize: '13px', // Font size for the label
  fontWeight: 450, // Font weight
  lineHeight: '28px', // Adjusted line height to match the button height
  display: 'flex',
  alignItems: 'center', // Ensure vertical centering
  justifyContent: 'center', // Ensure horizontal centering
  width: 'auto', // Adjust width based on content
  minWidth: '139px', // Minimum width to ensure buttons are not too small
  '&:hover': {
    backgroundColor: '#333', // Slightly lighter black on hover
  },
});

// Styled button specifically for the first button in the third card
const WhiteButton = styled(CommonButton)({
  backgroundColor: 'white', // White background
  color: 'black', // Black text
});

function Welcome() {
  return (
    <WelcomeContainer>
      Welcome, John Mathew!!
      <CardsContainer>
        {/* First Card */}
        <StyledCard>
          <CardContentWrapper>
            <StyledHeading>Order Sync Successful!</StyledHeading>
            <StyledContent>
              Your order details from the last 30 days have been successfully synced. Check them out now!
            </StyledContent>
          </CardContentWrapper>
          {/* Move the button to the left and add space below */}
          <Box display="flex" justifyContent="flex-start" padding="8px" marginTop="auto" mb="16px">
            <CommonButton variant="contained">
              Explore Your Orders
            </CommonButton>
          </Box>
        </StyledCard>

        {/* Second Card */}
        <SecondCard>
          <CardContentWrapper>
            {/* Warning icon with heading */}
            <Box display="flex" alignItems="center" gap="8px">
              <WarningAmberIcon color="warning" />
              <StyledHeading>Customize Customer Notification</StyledHeading>
            </Box>
            <StyledContent>
              Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers.
            </StyledContent>
          </CardContentWrapper>
          {/* Move the button to the left and add space below */}
          <Box display="flex" justifyContent="flex-start" padding="8px" marginTop="auto" mb="16px">
            <CommonButton variant="contained">
              Configure Notifications
            </CommonButton>
          </Box>
        </SecondCard>

        {/* Third Card */}
        <ThirdCard>
          <CardContentWrapper>
            {/* ErrorOutline icon with heading */}
            <Box display="flex" alignItems="center" gap="8px">
              <ErrorOutlineIcon color="error" />
              <StyledHeading>Your Tracking Link has been generated</StyledHeading>
            </Box>
            <StyledContent>
              Include the{' '}
              <Link href="#" underline="always">
                Link
              </Link>{' '}
              to Your Store's Navigation Menu.
            </StyledContent>
          </CardContentWrapper>
          <Box display="flex" gap="8px" justifyContent="flex-start" padding="8px" marginTop="auto" mb="16px">
            {/* White background button */}
            <WhiteButton variant="contained">
              Copy Link
            </WhiteButton>
            <CommonButton variant="outlined">
              Go to Navigation Menu
            </CommonButton>
          </Box>
        </ThirdCard>
      </CardsContainer>
    </WelcomeContainer>
  );
}

export default Welcome;
