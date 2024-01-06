import { formatter } from "../util/investment";

export default function ResultTable({ userInput}) {
    console.log(userInput)
  let content = <p className="center">No data calculated</p>;
  if (result && result.length > 0) {
    content = (
      <table id="result">
        {console.log("result ", result)}
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((res) => {
            return (
              <tr key={res.year.toString()}>
                <td>{res.year}</td>
                <td>{formatter.format(res.interest)}</td>
                <td>{formatter.format(res.valueEndOfYear)}</td>
                <td>{formatter.format(res.annualInvestment)}</td>
                <td>
                  {formatter.format(res.annualInvestment * (res.year + 1))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  return content;
}
