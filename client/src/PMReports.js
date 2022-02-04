import { PageItem } from 'react-bootstrap'
import { Page, Document } from 'react-pdf'

function PMReports() {
  return (
    <div>
      <table>
        <thead>
          <h1>Ledger</h1>
          <tr>
            <th> No.1</th>
            <th>date</th>
            <th>Book</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
          <tr>
            <td>1</td>
            <td>1/2/32</td>
            <td>Food</td>
            <td>21</td>
            <td>211</td>
          </tr>
      </table>

      <table>
        <thead>
          <thead>
            <h1>Income Statment</h1>
            <tr>
              <table>
              <thead>
              <th> Reveune</th>
              <tbody>
                <tr>
                  <td>Sales Reveune</td>
                  <td>Other Reveune</td>
                  <td>Total Reveune</td>
                </tr>
              </tbody>
              </thead>
              </table>
              <table>
                <thead>
              <th>Gross Profits</th>
              <th>Cost Of Goods Sold</th>
                <tr>
                  <td>$1,900</td>
                  <td>$2000</td>
                </tr>
              </thead>
              </table>
              <table>
                <tr>

              <th>Expenses</th>
              </tr>
                <tc>
                  <td>Accounting</td>
                  <td>Advertising</td>
                  <td>Amortiazation</td>
                  <td>Bad Debt</td>
                  <td>Depreciation</td>
                  <td>Depreciation</td>
                  <td>Add By User</td>
                  <td>Total Expenses</td>
                </tc>
</table>
            </tr>
          </thead>
          <tbody>
        
          </tbody>
        </thead>
      </table>
    </div>
  )
}

export default PMReports
