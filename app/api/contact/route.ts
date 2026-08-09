export async function POST(request: Request) {
try {
const body = await request.json();

const name = body.name;
const email = body.email;
const country = body.country;
const service = body.service;
const message = body.message;

if (!name || !email || !country || !service || !message) {
return Response.json(
{ error: 'Please fill in all fields.' },
{ status: 400 }
);
}

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
return Response.json(
{ error: 'Email service is not configured.' },
{ status: 500 }
);
}

const emailText =
'Hello Kilimanjaro Travel,\n\n' +
'You have received a new travel enquiry.\n\n' +
'Name: ' + name + '\n' +
'Email: ' + email + '\n' +
'Country: ' + country + '\n' +
'Service: ' + service + '\n\n' +
'Message:\n' +
message;

const response = await fetch(
'https://api.resend.com/emails',
{
method: 'POST',
headers: {
'Content-Type': 'application/json',
Authorization: 'Bearer ' + apiKey,
},
body: JSON.stringify({
from: 'Kilimanjaro Travel <onboarding@resend.dev>',
to: ['kilimanjarotravel.tz@gmail.com'],
reply_to: email,
subject: 'New Travel Enquiry - ' + service,
text: emailText,
}),
}
);

if (!response.ok) {
const error = await response.text();

console.error('Resend error:', error);

return Response.json(
{ error: 'Failed to send email.' },
{ status: 500 }
);
}

return Response.json(
{ success: true },
{ status: 200 }
);
} catch (error) {
console.error('Contact API error:', error);

return Response.json(
{ error: 'Something went wrong.' },
{ status: 500 }
);
}
}