

export const convertFileToLink = (file: File):Promise<string> =>{
    return new Promise((resolve,reject)=>{
        var reader = new FileReader();

        reader.onload = function (evt) {
            resolve(evt.target?.result as string);
        }
        reader.onerror = function (evt) {
            reject(new Error('Error converting file to link')); 
    };
        reader.readAsDataURL(file);

    });
    }