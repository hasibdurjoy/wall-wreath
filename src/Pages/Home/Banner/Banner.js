import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://lh3.googleusercontent.com/proxy/x_rEoPCi-LQOcyMPsr09IdoU_cm8oJgS5pPM57vsTrH_8ypkTgGGNqganr110H6khEOZr_lsy-sbw8JqYhjV2MsxX_qGDcmFg2IiLXSm7MMtgqOCQVZB8sAx',
    },
    {
        label: 'Bird',
        imgPath:
            'https://stylegirlfriend.com/wp-content/uploads/2016/07/1ce389d011d6590360142de7c48879e487309d31-1.jpeg',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://b-metro.com/wp-content/uploads/2019/01/Gallery-wall-with-concert-posters-and-more.jpg',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://essentialhome.eu/inspirations/wp-content/uploads/2018/06/living-room-posters.jpg',
    },
];
const Banner = () => {


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: "80%", flexGrow: 1, mx: "auto" }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: "80vh",
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                    mx: "auto"
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
};

export default Banner;