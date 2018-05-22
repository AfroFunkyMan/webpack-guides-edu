import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    console.log(Data);

    element.appendChild(myIcon);
}

document.body.appendChild(component());