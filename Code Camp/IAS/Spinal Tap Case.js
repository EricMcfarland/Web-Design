//All uppercase needs to be lowercase
//Unless the first character it needs to be preceeded by -
//Non alpha characters need to be removed
//


function spinalCase(str){
    re = /[A-Z]/g;
    // console.log(re);
    console.log(str);
    str = str.replace(re, function(matched){
        console.log(matched);
        console.log(typeof matched);
        return " "+matched.toLowerCase()
    });
    console.log(str);

    str=str.replace(/[^a-z][-]\s/g, "-");
    console.log(str);
    return str
}

spinalCase("Teletubbies say Eh-oh");