const parentDivs2 = document.querySelectorAll('.website');
parentDivs2.forEach(parentDiv2 => {
    const childDiv = document.createElement('div');
    childDiv.className = 'circles';
    parentDiv2.prepend(childDiv);
});

const parentDivs3 = document.querySelectorAll('.circles');
parentDivs3.forEach(parentDiv3 => {

    const childDiv1 = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const childDiv3 = document.createElement('div');

    childDiv1.className = 'circle c1';
    childDiv2.className = 'circle c2';
    childDiv3.className = 'circle c3';

    parentDiv3.appendChild(childDiv1);
    parentDiv3.appendChild(childDiv2);
    parentDiv3.appendChild(childDiv3);
});

const parentDivs4 = document.querySelectorAll('.phone-frame');
parentDivs4.forEach(parentDiv4 => {
    const childDiv1 = document.createElement('div');
    const childDiv2 = document.createElement('div');

    childDiv1.className = 'phone-speaker';
    childDiv2.className = 'phone-button';

    parentDiv4.prepend(childDiv1);
    parentDiv4.appendChild(childDiv2);
});

const parentDivs5 = document.querySelectorAll('.holes');
parentDivs5.forEach(parentDiv5 => {
    const childDiv1 = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const childDiv3 = document.createElement('div');

    childDiv1.className = 'hole1';
    childDiv2.className = 'hole2';
    childDiv3.className = 'hole3';

    parentDiv5.appendChild(childDiv1);
    parentDiv5.appendChild(childDiv2);
    parentDiv5.appendChild(childDiv3);
});
