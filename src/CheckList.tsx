import React from 'react';

import { List } from '@shopify/polaris';

function CheckList({items}: {items: string[]}) {
  
  return (
    <List type="number">
      {items.map(item => 
          <List.Item key={item} >
            <div className="form-group">
              <label htmlFor="inputName" className="col-md-1 control-label"></label>  
                <div className="col-md-5">
                  <div className="checkbox">
                    <input type="checkbox" name="packersOff" id="packers" value="1"/>
                    <label htmlFor="packers" className="strikethrough"> {item} </label>
                </div>
              </div>
            </div>
          </List.Item>
      )}
    </List>
  );
}

export default CheckList;