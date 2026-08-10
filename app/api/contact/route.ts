export async function POST(request: Request) {
try {
const body = await request.json();

const {
name,
email,
country,
service,
adults,
children,
childrenAges,
arrivalDate,
departureDate,
travelStyle,
message,
} = body;

if (!name || !email || !country || !service || !message) {
return Response.json(
{
error: 'Please fill in all required fields.',
},
{ status: 400 }
);
}

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
return Response.json(
{
error: 'Email service is not configured.',
},
{ status: 500 }
);
}

const emailText = `
Hello Kilimanjaro Travel,

You have received a new booking request.

Name: ${name}
Email: ${email}
Country: ${country}
Service: ${service}

Adults: ${adults || 'Not specified'}
Children: ${children || '0'}
Children's Ages: ${childrenAges || 'Not specified'}

Arrival Date: ${arrivalDate || 'Not specified'}
Departure Date: ${departureDate || 'Not specified'}

Travel Style: ${travelStyle || 'Not specified'}

Trip Details:
${message}
`;

const response = await fetch(
'https://api.resend.com/emails',
{
method: 'POST',
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${apiKey}`,
},
body: JSON.stringify({
from: 'Kilimanjaro Travel <onboarding@resend.dev>',
to: ['kilimanjarotravel.tz@gmail.com'],
reply_to: email,
subject: `New Booking Request - ${service}`,
text: emailText,
}),
}
);

if (!response.ok) {
const error = await response.text();

console.error('Resend error:', error);

return Response.json(
{
error: 'Failed to send booking email.',
},
{ status: 500 }
);
}

return Response.json(
{
success: true,
},
{ status: 200 }
);

} catch (error) {
console.error('Booking API error:', error);

return Response.json(
{
error: 'Something went wrong while sending the booking.',
},
{ status: 500 }
);
}
}