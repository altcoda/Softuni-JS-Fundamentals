function makeADictionary(arr_of_objs) {

    let objsArr = [];
 
    for (let obj of arr_of_objs) {
        let parsed = JSON.parse(obj);
        let key = (Object.keys(parsed).join(' '));
        let repeat = objsArr.find(x => (Object.keys(x).join(' ')) === key);
        if (objsArr.find(x => (Object.keys(x).join(' ')) === key)) {
            for (let repeated of objsArr) {
                if (Object.keys(repeated).join(' ') === key) {
                    let newText = Object.values(parsed).join(' ')
                    repeated[key] = newText;
                }
            }
        } else {
            objsArr.push(parsed);
        }
    }
 
    objsArr.sort((a, b) => (Object.keys(a).join(' ')).localeCompare(Object.keys(b).join(' ')));
 
    for (let obj of objsArr) {
        let term = Object.keys(obj).join(' ');
        console.log(`Term: ${term} => Definition: ${obj[term]}`);
    }
}
