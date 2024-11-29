// import axios from "axios";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var axios = require("axios");

console.log("Hello " + (process.argv[2] ?? "user undefined") + "\n");

// printArgs(...process.argv);

function printArgs(arg0, arg1, ...rest) {
    try {
        if (!rest.length) throw new Error("No data");
        rest.forEach((arg) => console.log(arg));
    } catch (e) {
        console.error(e);
    }
}

console.log();
getData("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => {
        if(res.data.length > 30) throw new Error("Length out of bound");
        printTitles(res.data);
    })
    .catch((e) => console.error(e));

function getData(path) {
    return axios.get(path);
    // return new Promise((res, rej) => {
    //     let req = new XMLHttpRequest();
    //     req.open("GET", path);
    //     req.onload = () => {
    //         console.log(req.status);
    //         if (req.status == 200) {
    //             // console.log(req);
    //             res(JSON.parse(req.responseText));
    //         } else {
    //             console.log(req.status);

    //             rej("No Data Found");
    //         }
    //     };
    //     req.send();
    // });
}

function printTitles(arrObjs) {
    arrObjs?.forEach((obj) => console.log(obj?.title));
}
