import React from "react";
import "./ScoreTable.css";
function ScoreTable() {
  const front = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const back = [0, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const frontTotal = front.reduce((a, b) => a + b);
  const backTotal = back.reduce((a, b) => a + b);
  return (
    <div>
      {/* <h1>
        {front.map((number) => {
          return <h3>{number}</h3>;
        })}
      </h1> */}
      <div>Table</div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Hole 1 </th>
              <th> Hole 2 </th>
              <th> Hole 3 </th>
              <th> Hole 4 </th>
              <th> Hole 5 </th>
              <th> Hole 6 </th>
              <th> Hole 7 </th>
              <th> Hole 8 </th>
              <th> Hole 9 </th>
              <th> Front 9 Total</th>
              <th> Hole 10 </th>
              <th> Hole 11 </th>
              <th> Hole 12 </th>
              <th> Hole 13 </th>
              <th> Hole 14 </th>
              <th> Hole 15 </th>
              <th> Hole 16 </th>
              <th> Hole 17 </th>
              <th> Hole 18 </th>
              <th> Front 9 Total </th>
              <th> Back 9 Total</th>
              <th> Round Total </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jon</td>
              <td>{front[1]}</td>
              <td>{front[2]}</td>
              <td>{front[3]}</td>
              <td>{front[4]}</td>
              <td>{front[5]}</td>
              <td>{front[6]}</td>
              <td>{front[7]}</td>
              <td>{front[8]}</td>
              <td>{front[9]}</td>
              <td>{frontTotal}</td>
              <td>{back[1]}</td>
              <td>{back[2]}</td>
              <td>{back[3]}</td>
              <td>{back[4]}</td>
              <td>{back[5]}</td>
              <td>{back[6]}</td>
              <td>{back[7]}</td>
              <td>{back[8]}</td>
              <td>{back[9]}</td>
              <td>{frontTotal}</td>
              <td>{backTotal}</td>
              <td>{frontTotal + backTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScoreTable;
