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
