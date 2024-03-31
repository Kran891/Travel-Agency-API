import { template } from "../templates/template-mail";
import { Message } from "./api-models";

const emailData =(data:Message) =>({
    Recipients: [
        {
            Email: data.email,
            Fields: {
                name: data.name
            }
        }
    ],
    Content: {
        Body: [
            {
                ContentType: "HTML",
                Charset: "utf-8",
                Content: template(data.type.toString())
            },
            {
                ContentType: "PlainText",
                Charset: "utf-8",
                Content: template("Kranthi")
            }
        ],
        From: "kranthi.gavireddy.code@gmail.com",
        Subject: `Travel Agency API-${data.type}`
    }
});
export {emailData}