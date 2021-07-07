import { useState } from "react";
import PropsTypes from 'prop-types';

const PropsDemo = () => {

    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    };

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('black') : setBackgroundColor('purple');
    };

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    };

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    };

    return(
        <div className ='main'>
            <div className='mainDiv'>
                <div style={styles}>
                <FunctionalComponent string='Use this to change the Color' function={toggleColor} selectedStyle={ color } />
                <FunctionalComponent string='Change the Background Color' function={toggleBackgroundColor} selectedStyle={ backgroundColor }/>
                <FunctionalComponent string='Toggle with the Border Radius' function={toggleBorderRadius} selectedStyle={ borderRadius }/>
                <FunctionalComponent string='Mess with the Border Style' function={toggleBorderStyle} selectedStyle={ borderStyle }/>
                </div>
               
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={ props.selectedStyle } />
        </div>
    );
};

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    );
};

FunctionalComponent.defaultProps = {
    string: 'This is wild',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle : 'what style??'
} //Default props only show if you are not specifying anything. We are so these won't show
//However, they will alert any potential readers as to what must be passed through in order to utilize the props properly

FunctionalComponent.PropsTypes = {
    string: PropsTypes.string.isRequired,
    function: PropsTypes.func.isRequired,
    selectedStyle: PropsTypes.string.isRequired
}
