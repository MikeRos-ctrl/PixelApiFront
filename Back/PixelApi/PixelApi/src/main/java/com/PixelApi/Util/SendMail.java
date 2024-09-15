package com.PixelApi.Util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class SendMail {

	@Autowired
	private JavaMailSender mailSender;

	public void sendMail(String email, String code, char type) {
		
		try {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

			String htmlMsg = null;
			helper.setFrom("pixelteam@thepixelapi.com");
			helper.setTo(email);
					
			if(type == 'A') {
				helper.setSubject("Confirm your email");

				htmlMsg = "<html>\r\n" + "<head>\r\n" + "    <title>Confirm Your Account</title>\r\n" + "</head>\r\n"
						+ "<body style=\"font-family: Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0;\">\r\n"
						+ "    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\">\r\n"
						+ "        <tr>\r\n"
						+ "            <td style=\"background-color: #333399; color: #ffffff; padding: 20px; text-align: center; font-size: 24px;\">\r\n"
						+ "                Confirm your email\r\n" + "            </td>\r\n" + "        </tr>\r\n"
						+ "        <tr>\r\n"
						+ "            <td style=\"padding: 30px; font-size: 16px; line-height: 1.6; color: #333333;\">\r\n"
						+ "                <p>Hi there</p>\r\n"
						+ "                <p>Thank you for registering with us. We're excited to have you on board!</p>\r\n"
						+ "                <p>Please copy this code below to activate your account:</p>\r\n"
						+ "                <p style=\"display: inline-block; margin: 20px auto; padding: 15px 20px; background-color: #993366; color: #ffffff; text-align: center; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;\">"+ code + "</p>\r\n"
						+ "                <p>If you have any questions or need assistance, feel free to contact our support team</p>\r\n"
						+ "                <p>See you soon!</p>\r\n" + "            </td>\r\n" + "        </tr>\r\n"
						+ "        <tr>\r\n"
						+ "            <td style=\"background-color: #f1f1f1; color: #666666; padding: 20px; text-align: center; font-size: 12px;\">\r\n"
						+ "                <p>If you did not register for this service, please ignore this email.</p>\r\n"
						+ "            </td>\r\n" + "        </tr>\r\n" + "    </table>\r\n" + "</body>\r\n" + "</html>";
			}else {
				helper.setSubject("Recover your password");
				htmlMsg = "<html>\r\n" + "<head>\r\n" + "    <title>Recover your password</title>\r\n" + "</head>\r\n"
						+ "<body style=\"font-family: Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0;\">\r\n"
						+ "    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\">\r\n"
						+ "        <tr>\r\n"
						+ "            <td style=\"background-color: #333399; color: #ffffff; padding: 20px; text-align: center; font-size: 24px;\">\r\n"
						+ "                Recover your password\r\n" + "            </td>\r\n" + "        </tr>\r\n"
						+ "        <tr>\r\n"
						+ "            <td style=\"padding: 30px; font-size: 16px; line-height: 1.6; color: #333333;\">\r\n"
						+ "                <p>Insert the code below to change your password</p>\r\n"
						+ "                <p style=\"display: inline-block; margin: 20px auto; padding: 15px 20px; background-color: #993366; color: #ffffff; text-align: center; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;\">"+ code + "</p>\r\n"
						+ "                <p>If you have any questions or need assistance, feel free to contact our support team</p>\r\n"
						+ "                <p>Thanks!</p>\r\n" + "            </td>\r\n" + "        </tr>\r\n"
						+ "        <tr>\r\n"
						+ "            <td style=\"background-color: #f1f1f1; color: #666666; padding: 20px; text-align: center; font-size: 12px;\">\r\n"
						+ "                <p>If you did not register for this service, please ignore this email.</p>\r\n"
						+ "            </td>\r\n" + "        </tr>\r\n" + "    </table>\r\n" + "</body>\r\n" + "</html>";
			}
			helper.setText(htmlMsg, true);
			mailSender.send(message);
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}