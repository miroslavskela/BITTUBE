
   
class Utils{

static checkArray = (array, arrElement) => {
    var str1 = JSON.stringify(arrElement);
    for(let i = 0; i < array.length; i++){
        var element = array[i]; 
        var str2 = JSON.stringify(element);
        if (str1 === str2) {
            return true;
        }
    }

    return false;
}

}

export default Utils
    
