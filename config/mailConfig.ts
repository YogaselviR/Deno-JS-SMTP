import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";
import { mailer } from './mailer.ts';

const client = new SmtpClient();

await client.connectTLS({
    hostname: "smtp.gmail.com",
    port: 465,
    username: mailer.GMAIL_USERNAME,
    password: mailer.GMAIL_PASSWORD
});

const sendMailConfig = async (Options: any) => {
    await client.send({
        from: mailer.GMAIL_USERNAME,
        to: Options.to,
        subject: Options.subject,
        content: Options.content,
    });

    await client.close();

}


export default sendMailConfig;

