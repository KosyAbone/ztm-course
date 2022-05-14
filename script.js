const fs = require('fs')
// No 1

// fs.readFile('./santa.txt', (err, data) => {
//     console.time('Total time')
//     if(err) console.log('There is an error ' + err)
//     let floor = 0;
//     for(let i of String(data)){
//         i === '(' ? floor++ : floor--;
//     }
//     console.log(floor);
//     console.timeEnd('Total time')
// })

//No 2
fs.readFile('./santa.txt', (err, data) => {
    console.time()
    if(err) console.log('There is an error ' + err)
    let floor = 0;
    const content = String(data)

    for(let i = 0; i < content.length; i++){  
        content[i] === '(' ? floor++ : floor--;
        if(floor === -1) {
            console.log("position " + (i + 1));
            break;
        }
    }
    
    console.timeEnd()
})