import React from 'react';
import Skills from './Skills';

const Form = () => {
    return (
        <div name="form" style={{'display':'flex', 'flexDirection':'row', 'marginTop':'0px'}}>
            <div>
                <table>
                    <th><td>My Skills:</td></th>
                    <tr>
                        <ul>
                            <li><Skills name="Django" /></li>
                            <li><Skills name="Python" /></li>
                            <li><Skills name="Java" /></li>
                        </ul>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <th>My hobbies:</th>
                    <tr>
                        <ul>
                            <li><Skills name="Singing" /></li>
                            <li><Skills name="Reading" /></li>
                            <li><Skills name="Drawing" /></li>
                        </ul>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Form;