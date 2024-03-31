const template=(name:string)=>{
    return `
    <h3>Hi ${name}</h3>
    <h2>Your booking details are here</h2>
    <p>Date of Journey:${(new Date()).toISOString()}</p>
    `
}
export {template}