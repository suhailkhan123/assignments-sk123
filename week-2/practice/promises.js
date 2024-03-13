function wait1(t) {
    return new Promise(function(resolve) {
        setTimeout(resolve, t * 1000);
    });
}

function wait2(t) {
    return new Promise(function(resolve) {
        setTimeout(resolve, t * 1000);
    });
}

function wait3(t) {
    return new Promise(function(resolve) {
        setTimeout(resolve, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    let startTime = new Date().getTime();
    const promise1 =  wait1(t1);
    return promise1.then(function() {
        const promise2 =  wait2(t2);
        return promise2.then(function() {
            const promise3 =  wait3(t3);
            return promise3.then(function() {
                let endTime = new Date().getTime();
                return endTime - startTime;
            })
        })
    })
}

async function main(){
    const difference = await calculateTime(1, 2, 3);
    console.log(difference);
}
main();