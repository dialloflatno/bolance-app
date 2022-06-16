import { useEffect, useState } from 'react'

export default function Budget({ budget, mySum, title, category }) {

  const bookTotal = mySum(category.map((x) => x.expenses.map((xe) => xe.cost)))
  const [alarm, setAlarm] = useState(false)

  useEffect(() => {
    if (bookTotal > budget) {
      return setAlarm((alarm) => !alarm)
    }
  }, [])

  return (
    <>
      <div>
        <div className="budgetNotif">
          <div>
            {alarm ? (
              <>
                <h5>
                  {/* <div className="notify">!</div> */}
                  {title} ${budget} <br/>{
                    <progress min="0" max="100" value="63" />
                }
                </h5>
              </>
            ) : (
              <h5>
                {title}:{budget}
              </h5>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
