import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    // since we are plotting for each month acc to its expese amount in relation with max expense amount in any month
    // so we find max of all values in data points

    // so convert obj{label, value} to [values] using map
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );

    // find max of all values
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
}

export default Chart;
