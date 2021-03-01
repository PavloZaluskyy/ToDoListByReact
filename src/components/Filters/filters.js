import React  from "react";
import PropTypes from 'prop-types';

import "./filter.css";

const FILTERS_BTN = [
    {
      text: 'All',
      id: 'all',
    },
    {
      text: 'Active',
      id: 'active',
    },
    {
      text: 'Completed',
      id: 'completed'
    }
  ];

class Filters extends React.Component {

    constructor(props){
      super(props);

    }
    
    render(){
        const { amounts, activeFilter, changeFilter } = this.props;
        return (
            <div className="footer">
                <span className="amount">{`${amounts} Tasks left`}</span>
                <div className="btn-group">
                {FILTERS_BTN.map(({ text, id }) => (
                    <button
                    onClick={()=>changeFilter(id)}
                    key={id}
                    className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
                    >{text}</button>
                ))}
                </div>
            </div>
        )
        
    }
}

Filters.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
    changeFilter: PropTypes.func
}
  
Filters.defaultProps = {
    amount: 0,
    activeFilter: 'all',
    changeFilter: ()=>{}
}

export default Filters;