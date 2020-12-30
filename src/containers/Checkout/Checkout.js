import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContectData from "./ContectData/ContectData";
//import * as actions from '../../store/actions/index';

class Checkout extends Component {
  
  componentWillMount () {
     // this.props.onInitPurchase();
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contect-data");
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchaseRedirect = this.props.purchased ? <Redirect to="/" /> : null
      summary = (
        <div> 
          {purchaseRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/contect-data"}
            component={ContectData}
          />
        </div>
      );
    }

    return summary ;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased : state.order.purchased
  };
};



export default connect(mapStateToProps)(Checkout);
