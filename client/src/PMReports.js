import { PageItem } from "react-bootstrap";
import { Page, Document } from 'react-pdf'

function PMReports() {
  return (
    <div>
      <table>
        <thead>


          <tr>
            <th> No.1</th>
            <th>date</th>
            <th>Book</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1/2/32</td>
            <td>Food</td>
            <td>21</td>
            <td>211</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PMReports;