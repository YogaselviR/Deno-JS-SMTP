import sendMailConfig  from '../config/mailConfig.ts';

export default {
    sendMail: async({ request, response }: { request: any; response: any }) => {
        try {
            const reqData = await request.body();
            if (!request.hasBody) {
              response.status = 400,
                response.body = {
                  msg: "Data required",
                };
              return;
            }
            const val = await reqData.value;
            await sendMailConfig(val);
            response.status = 200,
            response.body = {
                msg: "Mail Sent successfully",
            };
        } catch (err) {
            response.status = 400,
                response.body = {
                msg: `1st Error: ${err}`,
            };
        }
    }
}