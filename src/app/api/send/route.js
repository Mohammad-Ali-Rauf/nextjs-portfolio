import EmailTemplate from '@/app/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req, res) {
	const { email, subject, message } = await req.json()
	try {
		const { data, error } = await resend.emails.send({
			from: email,
			to: ['m.aliadnanrauf@gmail.com'],
			subject: subject,
			react: EmailTemplate({ email, subject, message }),
			text: message,
		})

		if (error) {
			return NextResponse.json({ error })
		}

		return NextResponse.json({ data })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
