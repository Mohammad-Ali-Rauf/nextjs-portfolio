import React from 'react'

const EmailTemplate = ({ email, subject, message }) => {
	return (
		<>
			<div>
                    <b>Someone contacted you from your porfolio.</b>
					<p>From: {email}</p>
					<p>Subject: {subject}</p>
					<p>Message: {message}</p>
			</div>
		</>
	)
}

export default EmailTemplate
