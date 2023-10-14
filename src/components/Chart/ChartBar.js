import "./ChartBar.css";

function ChartBar(props) {
    // create bar for each month(label) by filling colour to specific height computed by us

    // default height 0% incase if no expenses in a year so maxVal=0 (cant divide by 0)
    let barFillHeight = "0%";

    // otherwise relative height of each month expense amount with maximum expense amount in any month
    // convert in percent to keep it acc to height of parent container
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    // char-bar_fill fill the colour acc to computed height in a div
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;
