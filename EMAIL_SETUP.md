# Email Setup for Contact Form

This guide explains how to set up email notifications for the contact form submissions.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
CONTACT_EMAIL=jainfoamf@gmail.com
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this 16-character password as `SMTP_PASS`

3. **Environment Variables**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_16_char_app_password
   CONTACT_EMAIL=jainfoamf@gmail.com
   ```

## Alternative Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@yahoo.com
SMTP_PASS=your_app_password
```

### Custom SMTP
```env
SMTP_HOST=your_smtp_server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_username
SMTP_PASS=your_password
```

## Testing

1. Set up your environment variables
2. Restart the development server
3. Submit a test inquiry through the contact form
4. Check the server logs for email sending confirmation
5. Verify that an email is received at `CONTACT_EMAIL`

## Troubleshooting

- **Authentication Failed**: Double-check your SMTP credentials
- **Connection Timeout**: Verify SMTP host and port settings
- **Emails Not Received**: Check spam folder, verify `CONTACT_EMAIL`
- **Gmail Issues**: Ensure you're using an App Password, not your regular password

## Security Notes

- Never commit `.env` files to version control
- Use App Passwords for Gmail instead of your main password
- Consider using dedicated email services like SendGrid for production
- The email service sends HTML emails with professional formatting