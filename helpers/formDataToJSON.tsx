export const formDataToJSON = (form) => {
    let formData = new FormData(form)
    let obj = {}
    formData.forEach((value, key)=>{
        obj[key] = value
    })
    let jsonString = JSON.stringify(obj)
    return jsonString
}