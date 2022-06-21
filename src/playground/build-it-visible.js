class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleViz = this.toggleViz.bind(this);
        this.state = {
            detailsOn: false, 
        }
    };

    toggleViz() { 
        this.setState((prevState) => {
            return {
                detailsOn: !prevState.detailsOn,
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1> 
                <button onClick={this.toggleViz}>{this.state.detailsOn ? 'Hide Details' : 'Show Details'}</button>
                {this.state.detailsOn && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// let detailsOn = false;

// const toggleViz = () => {
//     detailsOn = !detailsOn;
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1> 
//             <button onClick={toggleViz}>{detailsOn ? 'Hide Details' : 'Show Details'}</button>
//             {detailsOn && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();