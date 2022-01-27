export default function Setting({setUpdate,whileUpdatingName, handleSwitch , showOn ,handleSwitchOff, handleToss }) {








  return (
    <>
      <div>
        {showOn ? (
          <>
          <div className ='setting-container'>
          <div className = 'setting'>
            <button className ="closeout" onClick={handleSwitchOff}  >x</button>
                <strong>Book Settings</strong>
                <form id="titlePATCH" onSubmit={whileUpdatingName}>
                  <input
                    placeholder="new title"
                    type="text"
                    value={null}
                    onChange={(e) => setUpdate(() => e.target.value)}
                  />
                </form>
            <div>
              <button className="toss" onClick={handleToss}>
                Toss
              </button>
            </div>
            </div>
            </div>
          </>
        ) : (
          <button className="setting-tab" onClick={handleSwitch}>
            ⚙
          </button>
        )}
      </div>
    </>
  );
}

// onClick={() => showOff(false)}