import gif from './assets/blance.gif'



function Welcome() {
    return (
        <div>
            <div className='box-text-c'>
                <div>
                    <div className='abstract'>
                        <div className='box-text'>
                            <div className='master-class'>
                                <br />
                                <span id='phrase'>Your just trying to
                                    Budget Your Expense
                                    without a CPA</span>
                                <button className='new-catch'><h5>Start Budgeting</h5></button>
                                <br />

                                {/* //-box----------------------------------------------------------------------------- */}

                                <div className='box-holder'>
                                    <div className='box-holder-prime'>
                                        <div className='mini-box-center'>
                                            <p><span className="lable" > Where Did I Buy This?</span>
                                                <br />
                                                Keep track of the locations you’ve purchased your goods from.                                        </p>
                                        </div>
                                        <div className='mini-box-left'>
                                            <p><span className="lable" > How Much I Spend on Shoes?</span>
                                                <br />
                                                Create your own categories and  keep track of your expenses.                                        </p>
                                        </div>
                                        <div className='mini-box-right'>
                                            <p><span className="lable" > How Much Do I Owe ?</span>
                                                <br />
                                                Add your credit balcnce and well show you what your avalible balance is on your card.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='gif'><img src={gif} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Welcome;