// Import stylesheets
import './style.css';
import { parseDomain } from 'parse-domain';

const domains = [
  'woolworths.com.au',
  'woolworths.com',
  'api.woolworths.com',
  'api.dev.woolworths.com',
  'woolworths.us',
  'twitch.tv',
  'abovemedia.co.uk',
];

function getRootDomain(domain) {
  console.log(`Analizing ${domain}`);
  let rootDomain;
  const parseResult = parseDomain(`www.${domain}`);
  console.log('parseResult', parseResult);
  rootDomain = parseResult.domain;
  for (const topLevelDomain of parseResult.topLevelDomains) {
    rootDomain += `.${topLevelDomain}`;
  }
  return rootDomain;
}

for (const domain of domains) {
  console.log(getRootDomain(domain));
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
