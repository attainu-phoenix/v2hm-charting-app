import React from 'react';
import {connect} from 'react-redux';

import {storeMapper} from './store.js';


class isChartLoading extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_CHART"
        });
    }

    render() {

        if(this.props.isChartLoading) {
            return <p>Loading Chart...</p>
        } else {
            return (
                <AreaChart />
                
            );
        }
   
    }
}

let Menu = connect(storeMapper)(MenuComponent);

export {Menu};