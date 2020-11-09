import * as React from 'react';
import './list.css';
import { Checkbox } from 'semantic-ui-react';

export default class List extends React.Component {
   

    render() {
        return (
            <div className="right common">
            {this.props.provinces.map((state, index) => (
              <div key={index}>
                <h2>{state.state}</h2>
      
                <div>
                  {state.cities.map((city, innerIndex) => (
                    <Checkbox checked={city.checked} label={city.city} key={innerIndex} onClick={()=>{this.props.setSelected(index, innerIndex, city.checked)}} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        );
    }
}