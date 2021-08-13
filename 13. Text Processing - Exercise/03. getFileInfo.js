function getFileInfo(str) {

    let namePattern = /\\[\w\d\.\-\_]+\./;
    let nameMatch = str.match(namePattern);
    let name = nameMatch != null ? nameMatch.toString().substring(1, nameMatch.toString().length - 1) : '';

    let extPattern = /(?<=[.])([A-Za-z]+)$/gm;
    let extension = str.match(extPattern) != null ? str.match(extPattern) : '';

    console.log(`File name: ${name}`)
    console.log(`File extension: ${extension}`)

}
