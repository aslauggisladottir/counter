import React, {useState, useCallback} from 'react';
import {Card, Collapsible, TextContainer, Button, List, Link} from '@shopify/polaris';

function SectionTwo({storeUrl}: {storeUrl: string}) {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);
  
  return (
    <Card title="Let's get those numbers" sectioned>
      <Collapsible
        open={open}
        id="basic-collapsible"
        transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
        expandOnPrint
      >
      <TextContainer>
        <p> Want to see the sales flowing in? First we need to add the Smiirl app to your store, so the counter can access your sales numbers! </p>
      </TextContainer>
      <List type="number">
        <List.Item >
          <div className="form-group">
            <label htmlFor="inputName" className="col-md-1 control-label"></label>  
              <div className="col-md-5">
                <div className="checkbox">
                  <input type="checkbox" name="packersOff" id="packers" value="1"/>
                  <label htmlFor="packers" className="strikethrough"> 
                  <Link url={`https://smiirl-shopify.herokuapp.com/?shop=${storeUrl}`} external>
                    Click here to add the app to your store
                  </Link>
                  </label>
              </div>
            </div>
          </div>
        </List.Item>
    </List>
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


export default SectionTwo;