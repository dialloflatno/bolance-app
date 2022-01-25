export default function Setting({ handleSwitch, show, handleToss }) {
  return (
    <>
      <div>
        {show ? (
          <>
            <h5 className="toggle_update">Change Book Title</h5>
            <div>
              {/* <button className="toss" onClick={handleToss}>
                Toss
              </button> */}
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
