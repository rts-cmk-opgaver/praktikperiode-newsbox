/**
 * This function coverts a DOM Tree into JavaScript Object. 
 * @param srcDOM: DOM Tree to be converted. 
 */
 function xml2json(srcDOM) {
    let children = [...srcDOM.children];
  
    // base case for recursion. 
    if (!children.length) {
      return srcDOM.innerHTML
    }
  
    // initializing object to be returned. 
    let jsonResult = {};
  
    for (let child of children) {
  
      // checking is child has siblings of same name. 
      let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;
  
      // if child is array, save the values as array, else as strings. 
      if (childIsArray) {
        if (jsonResult[child.nodeName] === undefined) {
          jsonResult[child.nodeName] = [xml2json(child)];
        } else {
          jsonResult[child.nodeName].push(xml2json(child));
        }
      } else {
        jsonResult[child.nodeName] = xml2json(child);
      }
    }
  
    return jsonResult;
  }