function Goal() {
    return ( 
        <div>
            <div>
                <div>icon</div>
                <div>
                    <p>1<sub>/week</sub></p>
                    <p>details</p>
                </div>
            </div>
                <div>
                    <p>4 of 5</p>
                    {/* It's the complete bar with gray bg */}
                    <div>
                        {/* It's the progress bar */}
                        <div></div>
                    </div>
                </div>
                <button>Complete!</button>
            <div>

            </div>
        </div>
     );
}

export default Goal;