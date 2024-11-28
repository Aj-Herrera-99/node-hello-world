import axios from "axios";

console.log("Hello " + (process.argv[2] ?? "user undefined") + "\n");

printArgs(...process.argv);

function printArgs(arg0, arg1, ...rest) {
    try {
        if (!rest.length) throw new Error("No data");
        rest.forEach((arg) => console.log(arg));
    } catch (e) {
        console.error(e);
    }
}

console.log();
const myData = getData("https://jsonplaceholder.typicode.com/posts?", {
    params: {
        _limit: 5,
    },
});

myData.then((data) => printTitles(data)).catch((e) => console.log(e));

async function getData(path, params) {
    try {
        const res = await axios.get(path, params);
        const myData = res.data;
        if (!myData.length) throw new Error("No data found");
        return myData;
    } catch (e) {
        console.error(e);
    }
}

function printTitles(arrObjs) {
    arrObjs?.forEach((obj) => console.log(obj?.title));
}
