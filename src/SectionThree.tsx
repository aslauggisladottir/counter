import React, {useState, useCallback} from 'react';
import {Card, Collapsible, TextContainer, Button} from '@shopify/polaris';

import CheckList from './CheckList';

const ChecklistItems = () => {
  return [
  `Select "My Sales" from the dropdown in JSON URL then select "Save."`,
]
};

function SectionThree() {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);
  const items = ChecklistItems();
  
  return (
    <Card title="Connecting it all together 👈" sectioned>
      <Collapsible
        open={open}
        id="basic-collapsible"
        transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
        expandOnPrint
      >
      <TextContainer>
        <p> We are almost there! Final step is to connect the dots! Get ready for a takeoff 🚀</p>
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


export default SectionThree;