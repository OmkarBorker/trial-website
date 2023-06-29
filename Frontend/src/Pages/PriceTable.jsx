import React, { Component } from "react";
import PriceCard from "../Components/PriceCard";
import "./PriceTable.css";
import { getPriceCards } from "../Services/CardService";

class PriceTable extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.setState({ data: getPriceCards() });
  }

  render() {
    return (
      <div style={{textAlign:"center"}} className="">
        <p class="hover-underline-animation">
          Check Out Our Plans
        </p>
        <br/>
        <br/>
        <div className="all-price-cords">
          {this.state.data.map((card) => (
            <PriceCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default PriceTable;
