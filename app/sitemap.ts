import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.kilimanjarotravel.com';

export default function sitemap(): MetadataRoute.Sitemap {
return [
{
url: baseUrl,
lastModified: new Date(),
},
{
url: `${baseUrl}/about`,
lastModified: new Date(),
},
{
url: `${baseUrl}/safaris`,
lastModified: new Date(),
},
{
url: `${baseUrl}/kilimanjaro-treks`,
lastModified: new Date(),
},
{
url: `${baseUrl}/mountain-adventures`,
lastModified: new Date(),
},
{
url: `${baseUrl}/cultural-tours`,
lastModified: new Date(),
},
{
url: `${baseUrl}/day-trips`,
lastModified: new Date(),
},
{
url: `${baseUrl}/zanzibar`,
lastModified: new Date(),
},
{
url: `${baseUrl}/testimonials`,
lastModified: new Date(),
},
{
url: `${baseUrl}/faq`,
lastModified: new Date(),
},
{
url: `${baseUrl}/car-hire`,
lastModified: new Date(),
},
{
url: `${baseUrl}/contact`,
lastModified: new Date(),
},
{
url: `${baseUrl}/booking`,
lastModified: new Date(),
},
{
url: `${baseUrl}/privacy`,
lastModified: new Date(),
},
{
url: `${baseUrl}/terms`,
lastModified: new Date(),
},
];
}