/* Initialization */
import express from 'express'
import { template } from './templates/template-mail';
import { SgMail } from '../config';
import { MessageRouting } from './src/routing';



const app=express()
/* Generate and use your API key */


app.use("/api/messaging",MessageRouting)



const callback = (error:any, data:any, response:any) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
        console.log('Email sent.');
    }
};

app.listen(3000,()=>{
    console.log("Running");
    
})