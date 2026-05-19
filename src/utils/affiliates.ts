export const getDomainByName = (name: string): string => {
  const cleanName = name.toLowerCase().trim();
  
  // Core Neobanks & Wallets
  if (cleanName.includes('wise')) return 'wise.com';
  if (cleanName.includes('revolut')) return 'revolut.com';
  if (cleanName.includes('n26')) return 'n26.com';
  if (cleanName.includes('payoneer')) return 'payoneer.com';
  if (cleanName.includes('bunq')) return 'bunq.com';
  
  // USA Banks
  if (cleanName.includes('chime')) return 'chime.com';
  if (cleanName.includes('sofi')) return 'sofi.com';
  if (cleanName.includes('varo')) return 'varomoney.com';
  if (cleanName.includes('ally')) return 'ally.com';
  if (cleanName.includes('mercury')) return 'mercury.com';
  if (cleanName.includes('novo')) return 'novo.co';
  if (cleanName.includes('lili')) return 'lili.co';
  if (cleanName.includes('axos')) return 'axosbank.com';
  
  // Credit Cards
  if (cleanName.includes('chase')) return 'chase.com';
  if (cleanName.includes('capital one')) return 'capitalone.com';
  if (cleanName.includes('amex') || cleanName.includes('american express')) return 'americanexpress.com';
  if (cleanName.includes('citi')) return 'citi.com';
  if (cleanName.includes('apple')) return 'apple.com';
  if (cleanName.includes('discover')) return 'discover.com';
  
  // Loans & Finance
  if (cleanName.includes('lendingclub')) return 'lendingclub.com';
  if (cleanName.includes('marcus')) return 'marcus.com';
  if (cleanName.includes('upstart')) return 'upstart.com';
  if (cleanName.includes('avant')) return 'avant.com';
  if (cleanName.includes('best egg')) return 'bestegg.com';
  
  // Payment Gateways
  if (cleanName.includes('stripe')) return 'stripe.com';
  if (cleanName.includes('adyen')) return 'adyen.com';
  if (cleanName.includes('square')) return 'squareup.com';
  if (cleanName.includes('shopify')) return 'shopify.com';
  if (cleanName.includes('braintree')) return 'braintreepayments.com';
  if (cleanName.includes('authorize.net')) return 'authorize.net';
  if (cleanName.includes('klarna')) return 'klarna.com';
  if (cleanName.includes('affirm')) return 'affirm.com';
  if (cleanName.includes('plaid')) return 'plaid.com';
  if (cleanName.includes('paypal')) return 'paypal.com';
  if (cleanName.includes('neteller')) return 'neteller.com';
  if (cleanName.includes('skrill')) return 'skrill.com';
  if (cleanName.includes('payeer')) return 'payeer.com';
  if (cleanName.includes('webmoney')) return 'webmoney.ru';

  // Brokers & Crypto
  if (cleanName.includes('binance')) return 'binance.com';
  if (cleanName.includes('coinbase')) return 'coinbase.com';
  if (cleanName.includes('uphold')) return 'uphold.com';
  if (cleanName.includes('webull')) return 'webull.com';
  if (cleanName.includes('charles schwab')) return 'schwab.com';
  if (cleanName.includes('fidelity')) return 'fidelity.com';
  if (cleanName.includes('etoro')) return 'etoro.com';
  if (cleanName.includes('nexo')) return 'nexo.com';
  if (cleanName.includes('kucoin')) return 'kucoin.com';
  
  // Fallback direct URL construction
  return `${cleanName.replace(/[^a-z0-9]/g, '')}.com`;
};

export const getRealAffiliateLink = (name: string, fallback: string): string => {
  if (!fallback || fallback.includes('ejemplo.com') || fallback.includes('example.com')) {
    const cleanName = name.toLowerCase().trim();
    if (cleanName.includes('binance')) {
      return 'https://www.binance.com/activity/referral-entry/CPA?ref=CPA_0029XHRETF';
    }
    return `https://${getDomainByName(name)}`;
  }
  return fallback;
};

