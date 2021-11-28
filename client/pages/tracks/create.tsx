import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@material-ui/core";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(step => step+1)
    }
  }
  const back = () => {
    setActiveStep(step => step-1)
  }
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
        <Grid container direction="column" style={{padding: 20}}>
          <TextField
            style={{marginTop: 10}}
            label="Название трека"
          />
          <TextField
            style={{marginTop: 10}}
            label="Имя исполнителя"
          />
          <TextField
            style={{marginTop: 10}}
            label="Слова к треку"
            multiline
            rows={3}
          />
        </Grid>
        }
        {activeStep === 1 &&
          <h1>STEP 2</h1>
        }
        {activeStep === 2 &&
          <h1>STEP 3</h1>
        }
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;