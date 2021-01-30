// ************ Promises ****************
// Podem ter 3 status: Pending, FullFilled, Reject

const doSomethingPromise = () =>
new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => 
new Promise((resolve, reject) => {
    //throw new Error('Ops');
    setTimeout(function() {
        // did other thing
        resolve('Second data');
    }, 1000);
});

// Promises em paralelo 

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});

/*Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
});*/

/*doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error)); */



//----------------------------------------------------------------------------
// ************ Call Backs ***************

/*function doSomething(callback) {
    setTimeout(function() {  
    //did something
    callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        // didother thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');

        try {
            doOtherThing(function(data2) {
                var processedData2 = data2.split('');

            try {
                setTimeout(function() {
                    console.log(processedData, processedData2);
                }, 1000);
            } catch(err) {
               // handle error 
            }
        });
        } catch (err) {
            // handle error
        }
    });
    } catch(err) {
        // handle error
    }
}

doAll();*/
