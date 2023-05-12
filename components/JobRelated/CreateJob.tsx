import React, { useContext, useEffect } from 'react';

import { Form1 } from 'components/Form/Form1';
import { Form2 } from 'components/Form/Form2';
import { Form3 } from 'components/Form/Form3';
import { Form4 } from 'components/Form/Form4';
import { Form5 } from 'components/Form/Form5';
import { Form6 } from 'components/Form/Form6';

import { StepContext, IStepContext } from 'components/Step/StepProvider';

interface CreateJobProps {
  setCurrentStepDashBoard: (value: number) => void;
}

export function CreateJob({ setCurrentStepDashBoard }: CreateJobProps) {
  const { currentStep, setCurrentStep } = useContext<IStepContext>(StepContext);

  useEffect(() => {
    setCurrentStepDashBoard(currentStep);
  }, [currentStep]);

  return (
    <div style={{ marginTop: '30px' }}>
      {currentStep === 1 && <Form1 />}
      {currentStep === 2 && <Form2 />}
      {currentStep === 3 && <Form3 />}
      {currentStep === 4 && <Form4 />}
      {currentStep === 5 && <Form5 />}
      {currentStep === 6 && <Form6 />}
    </div>
  );
}