// Promisification : Transformation of a function that accepts a callBack into a function that returns a promise.

//Without Promise (old School Js)
// function loadScript(src, callBack) {
//     const script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callBack(null, script);
//     script.onerror = (err) => callBack(err);

//     document.head.appendChild(script);
// }

// loadScript('test.js', (err, script) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Script Loaded");
//     }
// });

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) return reject(err); // Change 'error' to 'err'
                return resolve(result);
            });
        });
    };
}

// usage:
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script); // Change 'callBack' to 'callback'
    script.onerror = (err) => callback(err); // Change 'callBack' to 'callback'

    document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript);

loadScriptNew('test.js')
    .then(() => console.log('Done'))
    .catch(err => console.log('Error ho gya', err)); // Added 'err' for error logging
