import * as React from 'react';
import './selectedList.css';

export default class SelectedList extends React.Component {
    
    checkedExists = (state) => {
        let exists = false;
        state.cities.forEach(element => {
            if(element.checked === true)
            {exists = true;}
        });
        return exists;
    }
    render() {
        return (
            <div>
              Selected List
            {this.props.provinces.map((state, index) => {
                if(this.checkedExists(state)) {

              return (<div key={index}>
                <h2>{state.state}</h2>
      
                <div>
                  {state.cities.map((city, innerIndex) => {
                      if(city.checked) {
                      return <div key={innerIndex}>{city.city}<span onClick={()=>{this.props.setUnSelected(index, innerIndex, city.checked)}} >  X</span></div>
                      } else {
                          return "";
                      }
                })}
                </div>
              </div>
            )} else {
                return ""
            }})}
          </div>
        );
    }
}