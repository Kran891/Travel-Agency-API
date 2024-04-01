import { TEMPLATE_FOOTER } from "./template-footer"
import { TEMPLATE_HEADER } from "./template-header"

const template=(name:string)=>{
    return `
    ${TEMPLATE_HEADER}
    
    ${TEMPLATE_FOOTER}
    `
}
export {template}