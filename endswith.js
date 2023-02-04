function  isJavaScriptFile(string){
    if(string.endsWith('.js')){
        return true;
    } else{
        return false;
    }
}

let string = 'index.js.html'
console.log(isJavaScriptFile(string));