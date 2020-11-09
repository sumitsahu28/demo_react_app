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
    checkStateExists = (states) => {
      let exists = true;
        states.forEach(state => {
          state.cities.forEach(element => {
              if(element.checked === true)
              {exists = false;}
          });
        });
        return exists;
    }
    render() {
      var stateCheck = this.checkStateExists(this.props.provinces);
        return (
            <div className="left common">
              <div>
                {stateCheck && <span>No Value Selected</span>}
              </div>
            {this.props.provinces.map((state, index) => {
              if(this.checkedExists(state)) {
              return (<div key={index}>
                <h5>{state.state}</h5>
      
                <div className="block">
                  {state.cities.map((city, innerIndex) => {
                      if(city.checked) {
                      return <div className="selectedstyle" key={innerIndex}>{city.city}<span className="spanstyle" onClick={()=>{this.props.setUnSelected(index, innerIndex, city.checked)}} >  x</span></div>
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