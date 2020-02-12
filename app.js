document.addEventListener('DOMContentLoaded', function () {

    function messageOut(text) {
        console.log(text);
    }

    function getWords() {
        messageOut('instantly.');
        setTimeout(() => { messageOut('three') }, 3000);
        setTimeout(() => { messageOut('two') }, 2000);
        setTimeout(() => { messageOut('one') }, 1000);
    }

    function done() {
        console.log(`Job's done!`);
    }

    function countdown(num, callback) {
        setTimeout(() => {
            if (num > 0) {
                messageOut(num);
                countdown(num - 1, callback);
            } else {
                callback();
            }
        }, 1000);
    }
    //messageOut('out like a light.');

    //setTimeout(() => { messageOut('still here.') }, 2000);

    //getWords();

    //countdown(5, done);

    let lunchTime = false;

    class customError extends Error {
        constructor(message) {
          super(message); // (1)
          this.name = "customError"; // (2)
        }
      }
    const orderMeSomeFood = () => {
        new Promise((resolve, reject) => {
            if (lunchTime) {
                let meal = {
                    lunch: 'bbq sandwich',
                    drink: 'sweet tea'
                }
                Promise.resolve('success').then((result) => { 
                    console.log(`${result}!  food is ${meal.lunch} and ${meal.drink}`) 
                });
            }
            else {

                Promise.reject(new customError('you gonna starve!')).catch((e) => {
                    //let oops = new customError(`${e}! not time for food yet`);
                    console.log(e.message);
                });
            }

        });
    };

    orderMeSomeFood();

});
