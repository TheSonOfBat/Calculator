export default function Calculator(props){
    let toggleStyle = props.position==="1"?{backgroundColor: '#e16a62', left: '0%', transform: 'translate(50%, -50%)'}:props.position==="2"?{backgroundColor:'#f88b3e', left: '50%', transform: 'translate(-50%, -50%)'}:{backgroundColor: '#92fff9', left: '100%', transform: 'translate(-150%, -50%)'};
        
    return(
        <div className="App" style={props.themeObj[props.position]['App']}>
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
                                    <div className="themeSelector--input" style={props.themeObj[props.position]['themeSelectorInput']}>
                                        <div className="themeSelector--ball" id="ball" style={toggleStyle} onClick={props.togglePosition} ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="calculator--main">
                            <div className="calculator--face" id="face"  style={props.themeObj[props.position]['calculatorFace']}>{props.face}</div>
                            <div className="calculator--keypad" style={props.themeObj[props.position]['calculatorKeypad']}>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">7</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">8</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">9</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">DEL</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">4</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">5</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">6</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">+</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">1</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">2</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">3</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">-</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">.</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">0</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">/</div>
                                <div onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverLeave} style={props.themeObj[props.position]['key']} onClick={props.onClick} className="key">x</div>
                            </div>
                            <div onClick={props.onClick} className="key">RESET</div>
                            <div onClick={props.onClick} className="key">=</div>
                        </div>
                </div>
        </div>
        
    );
}