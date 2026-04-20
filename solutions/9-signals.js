import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {

  return emails.reduce((acc, email) => {
    const domain = email.split('@')[1];

    if (!freeEmailDomains.includes(domain)){
      return acc;
    }
    if (!acc[domain]) {
      acc[domain] = 0;
    }
    acc[domain] += 1;

    return acc;
  }, {});
};

export default getFreeDomainsCount
// END