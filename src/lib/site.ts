export const brand = 'Ttyl BestAI';
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — ${brand}`;
  return { meta: [
    { title: fullTitle },
    { name: 'description', content: description },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] };
}
export const smsDisclosure = 'Message frequency varies based on your conversations. Msg & data rates may apply. Reply HELP for help. Reply STOP to cancel.';