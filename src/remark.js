(function() {
"use strict";
// element
var context, h1, sectionList, remarkArea,

    // val
    remarkHash = {}, index = 0,
    // function
    findContext, findSection, createRemark;

findContext = function() {
    return document.getElementById('Cnt-Main-Article-QQ');
};

findSection = function(context) {
    var sections = context.querySelectorAll('p'),
        i = 0,
        section,
        sectionList = [];

    for (; section = sections[i]; i++) {

        if (section.childNodes) {
            sectionList.push(section);
            createRemark(section);
        }
    }

    return sectionList;
};

createRemark = function(ele) {
    var remark = document.createElement('remark'),
        id = 'remarkId_' + index ++;

    remark.innerText = '+';
    remark.style.left = 0;
    remark.style.top = ele.offsetTop + 'px';

    remarkHash[id] = {
        section: ele,
        remark: remark
    };
    remarkArea.appendChild(remark);
};

context = findContext();
h1 = document.getElementsByTagName('h1');
remarkArea = document.createElement('remarks');

remarkArea.style.left = context.offsetLeft + context.offsetWidth + 'px';
remarkArea.style.top = context.offsetTop + 'px';
remarkArea.style.height = context.offsetHeight + 'px';

findSection(context);
console.log('1111111111111111111111');
document.body.appendChild(remarkArea);
}());
