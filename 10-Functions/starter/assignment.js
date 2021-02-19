// 'use strict'

/*
//  #1)
const poll = {
    '0': 'Dart',
    '1': 'C++',
    '2': 'Python',
    '3': 'Javascript',
    ans: [0,0,0,0],
    registerAnswer: function() {
        const option = prompt(`What is your favourite programming language?
            0: ${this[0]} 
            1: ${this[1]}
            2: ${this[2]}
            3: ${this[3]}
            Write option number`);
        console.log(option);
        const opt = Number(option);
        typeof opt === 'number' 
                && opt < this.ans.length 
                && this.ans[opt]++;
        // same as above
        // if (opt < 4 && opt > -1) {
        //     ++this.ans[opt];
        //     displayResults(type);
        // }

        this.displayResults();
        this.displayResults('string')
    },
    displayResults: function(type = 'array') {
        if (type == 'array')
            console.log(this.ans);
        else 
            console.log(this.ans.join(','));
    }

}

function getTheOption() {
    
    console.log(number);
    return function () {
        poll.registerAnswer.bind(poll, number);
    }
}

document.querySelector('.poll')
    .addEventListener('click', poll.registerAnswer.bind(poll));

const otherObjectAnsArr = [8,4,0,0];
poll.displayResults.call({
    ans: otherObjectAnsArr
}, 'string');

*/

// #2)

( function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',
        function() {
            header.style.color = 'blue';
        });
}) ();