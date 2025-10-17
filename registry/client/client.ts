import { SubstackClient } from 'substack-api';

const client = new SubstackClient({
  apiKey: process.env.SUBSTACK_API_KEY ?? '',
  hostname: 'substack.com'
});

export default client;