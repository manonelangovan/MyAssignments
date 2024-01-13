const browserName = 'Chrome';

function getBrowserVersion(){
    if(browserName==='Chrome'){
        console.log("Browser name is Chrome ");
        var browserVersion='123.12';
    }
    else{
        console.log("Browser version is invalid ");
    }
    console.log(browserVersion);
}

let browserVersion =getBrowserVersion();
console.log(browserVersion);