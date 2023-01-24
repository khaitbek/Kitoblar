export function convertObjectToFormData(obj: object) {
    const newFormData = new FormData();
    Object.entries(obj).forEach(param => {
        if (param[0] === "image") {
            newFormData.append(param[0], param[1][0]);
            console.log(param[0], param[1][0]);

        } else {
            newFormData.append(param[0], param[1]);
            console.log(param);
        }

    });
    Object.entries(newFormData).forEach(data => {
        console.log(data);

    })
    return newFormData
}

export function convertObjectToFormDataSafe(obj: object) {
    const newFormData = new FormData();
    Object.entries(obj).forEach(param => {

        newFormData.append(param[0], param[1]);
        console.log(param);

    });
    Object.entries(newFormData).forEach(data => {
        console.log(data);

    })
    return newFormData
}