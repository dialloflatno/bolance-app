export default function Setting({setUpdate,whileUpdatingName, handleSwitch, show, handleToss }) {
  return (
    <>
      <div>
        {show ? (
          <>
              <label>
                <form id="titlePATCH" onSubmit={whileUpdatingName}>
                  <input
                    placeholder="new title"
                    type="text"
                    value={null}
                    onChange={(e) => setUpdate(() => e.target.value)}
                  />
                </form>
              </label>
            <h5 className="toggle_update">Change Book Title</h5>
            <div>
              <button className="toss" onClick={handleToss}>
                Toss
              </button>
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
