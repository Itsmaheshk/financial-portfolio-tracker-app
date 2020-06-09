import React, { Component } from 'react';
import axios from 'axios';

class AlphaCall extends Component {

   state = {
      cPrice: null,
      margin: null
   }

        componentDidMount() {
       var symbol = this.props.symbol;
      var date = this.props.date;

      var buyprice = this.props.buyprice;
      var share = this.props.share;

         axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=908SPI8GT8SQQPN8`)
         .then(res => {

            var current = res.data['Time Series (Daily)'][date]['4. close'];

            var margin = ((current - buyprice)*share); // profit and loss logic!
            margin = +margin.toFixed(2);
            
           this.setState({
               cPrice : current,
               margin
            });

            console.log(current + '  ' );
         }).catch(error => {
          alert('API CALL ERROR, Please Try with different "Buy Date" or Wait for sometime and Try again.');
        });
   }
      render() {
      return (
       <>
            <td>{this.state.cPrice}</td>
            <td>{this.state.margin}</td>
         </>
      )
   }
}
export default AlphaCall