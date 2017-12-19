import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";


export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} margin={5} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{(Math.round(props.data.reduce((prev, curr) => prev + curr)/props.data.length))-273} {props.unit}</div>
    </div>
  );
}