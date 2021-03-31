import React, {useState, useCallback} from 'react';
import {Card, Collapsible, TextContainer, Button} from '@shopify/polaris';

import CheckList from './CheckList';

const ChecklistItems = (idNumber: number) => {
  return [
  "Go to my.smiirl.com to create an account",
  "Fill in all the required fields (First, last, email)",
  "Select Signup",
  "Activate your my.smiirl account by clicking “Activate my account” in the confirmation email",
  "Create an account password and select “Save”",
  "If you already have a Smiirl account, you can log in here “link”",
  "Once signed in, go to the section “My Counters” and click on “Install.”",
  `Enter your ID number ${idNumber} (from the back of your counter)`
]
};

function SectionOne({idNumber}: {idNumber: number}) {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);
  const items = ChecklistItems(idNumber);
  
  return (
    <Card title="Let's create a Smiirl account!" sectioned>
      <Collapsible
        open={open}
        id="basic-collapsible"
        transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
        expandOnPrint
      >
      <TextContainer>
        <p> To be able to use the nice device we need to connect it to your Smiirl account. Don't have one? No worries! We'll go through this together 😍 </p>
      </TextContainer>
      <CheckList items={items}/>
    </Collapsible>

      <Card.Section>
        <Button
          onClick={handleToggle}
          ariaExpanded={open}
          ariaControls="basic-collapsible"
        >
          Toggle
        </Button>
      </Card.Section>
    </Card>
    
  );
}


export default SectionOne;