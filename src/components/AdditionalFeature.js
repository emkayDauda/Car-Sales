import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const AdditionalFeature = props => {
  console.log(props);
  const { addFeature, feature } = props
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => addFeature(feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  state => state,
  actionCreators,
)(AdditionalFeature)
