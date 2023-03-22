export default function Calculator(props){
    let toggleStyle = props.position==="1"?{backgroundColor: '#e16a62', left: '0%', transform: 'translate(50%, -50%)'}:props.position==="2"?{backgroundColor:'#f88b3e', left: '50%', transform: 'translate(-50%, -50%)'}:{backgroundColor: '#92fff9', left: '100%', transform: 'translate(-150%, -50%)'};
    let themeObj = {
        "1":{
            App: {backgroundColor: "#3b4664", color: 'white'},
            themeSelectorInput: {backgroundColor: '#252c46'},
            calculatorFace: {backgroundColor: '#181f32'},
            calculatorKeypad: {backgroundColor: '#252d44'},
            key: {backgroundColor: '#e5e4e0', color: '#5b5d66'}
        },

        "2":{
            App: {backgroundColor: "#e6e6e6", color: '#3b3a34'},
            themeSelectorInput: {backgroundColor: '#d4cdcd'},
            calculatorFace: {backgroundColor: '#eeeeee'},
            calculatorKeypad: {backgroundColor: '#d3cdcd'},
            key: {backgroundColor: '#e5e4e0', color: '#5b5d66'}
        },
        
        "3":{
            App: {backgroundColor: "#17062a", color: '#ffe53b'},
            themeSelectorInput: {backgroundColor: '#1e0837'},
            calculatorFace: {backgroundColor: '#1e0836'},
            calculatorKeypad: {backgroundColor: '#1e0836'},
            key: {backgroundColor: '#331b4d', color: '#ffe53b'}
        }
    }
    
    return(
        <div className="App" style={themeObj[props.position]['App']}>
            <div className="calculator--container">
                        <div className="calculator--top">
                            <div className="top--logo">Ryan's Calc</div>
                            <div className="themeSelector--container">
                                <span>THEME</span>
                                <div className="themeSelector">
                                    <div className="themeSelector--options">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                    </div>
                                    <div className="themeSelector--input" style={themeObj[props.position]['themeSelectorInput']}>
                                        <div className="themeSelector--ball" id="ball" style={toggleStyle} onClick={props.togglePosition} ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="calculator--main">
                            <div className="calculator--face" id="face"  style={themeObj[props.position]['calculatorFace']}>{props.face}</div>
                            <div className="calculator--keypad" style={themeObj[props.position]['calculatorKeypad']}>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">7</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">8</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">9</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key del">DEL</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">4</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">5</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">6</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">+</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">1</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">2</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">3</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">-</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">.</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">0</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">/</div>
                                <div style={themeObj[props.position]['key']} onClick={props.onClick} className="key">x</div>
                            </div>
                            <div className="key">RESET</div>
                            <div className="key">=</div>
                        </div>
                </div>
        </div>
        
    );
}