
class Utils {

    static arrayElement = (arrElement) => {
        var str1 = JSON.stringify(arrElement);

        for (var i = 0; i < this.length; i++) {
            var element = this[i];
            var str2 = JSON.stringify(element);
            if (str1 === str2) {
                return true;
            }
        }
    
        return false;
    }
}

export default Utils