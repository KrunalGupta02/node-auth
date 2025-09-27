import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        })
        console.log("Email send successfully", response)
    } catch (error) {
        console.log(error, 'Error in email sending', error)
        throw new Error(`Error sending verification email ${error}`)
    }

}

export const sendWelcomeEmail = async (email, userName) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "23f04cd7-2a71-457b-8ecd-582951682482",
            template_variables: {
                "name": userName,
                "company_info_name": "Auth Company"
            }
        })
        console.log("Welcome email send successfully", response);
    } catch (error) {
        console.log("Error in Welcome email", error);
        throw new Error(`Error sending Welcome email ${error}`)
    }
}