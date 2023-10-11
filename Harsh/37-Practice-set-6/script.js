// Q1 -> 

const scriptLoader = async (src) =>{
    return new Promise((resolve, reject) => {
        const script = document.createElement(`script`);
        console.log(src)
        script.src = src;
        document.body.append(script);
        script.onload = resolve(console.log("Script Loaded successfully!"))
    });

}

scriptLoader("script-2.js")


