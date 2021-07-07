import { useState } from "react";

const State = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <ul>
                    <dt>UseState is unique to Functional Components</dt>
                    <dd>Class components have a separate means of using and changing state</dd>
                    <dt>useState uses array destructuring</dt>
                    <dd>useState provides a state variable and a setState function</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook that exists inside the React library</dd>
                    <dt>Triggers re-renders</dt>
                    <dd>Like with prop changes, changing the state of a component re-renders the whole component</dd>
                </ul>
            </div>
            <StateExample />
        </div>
    );
};

export default State;

function StateExample() {
    
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <br />
            <br />
            <img
                style ={{ width: '100px', height: '100px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
                onClick ={() => setLikeNum(likeNum + 1)}
            />
            <span>{likeNum}</span>
        </div>
    );
};