import { EmailTemplate } from './components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_FPbMuR6z_E1mZbxTDPov9V9HbHkwhFdd3');

export async function POST(request: Request) {
	const contact = await request.json();

	const { data, error } = await resend.emails.send({
		from: 'Cure51 <website@cure51.com>',
		to: ['mohamed.azerkane@cure51.com', 'elmehdi@cure51.com', 'emna@cure51.com'],
		subject: 'contact form',
		react: EmailTemplate({
			firstName: contact.firstName,
			lastName: contact.lastName,
			email: contact.email,
			message: contact.message,
			phoneNumber: contact.phoneNumber
		}),
		text: 'version'
	});

	if (error) {
		return Response.json({ status: 'ko' });
	}
	return Response.json({ status: 'ok' });
}
