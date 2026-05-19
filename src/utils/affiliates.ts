export const getRealAffiliateLink = (name: string, fallback: string): string => {
  if (!fallback || fallback.includes('ejemplo.com') || fallback.includes('example.com')) {
    const cleanName = name.toLowerCase().trim();
    
    // Core Neobanks & Wallets
    if (cleanName.includes('wise')) return 'https://wise.com';
    if (cleanName.includes('revolut')) return 'https://revolut.com';
    if (cleanName.includes('n26')) return 'https://n26.com';
    if (cleanName.includes('payoneer')) return 'https://payoneer.com';
    if (cleanName.includes('bunq')) return 'https://bunq.com';
    
    // USA Banks
    if (cleanName.includes('chime')) return 'https://chime.com';
    if (cleanName.includes('sofi')) return 'https://sofi.com';
    if (cleanName.includes('varo')) return 'https://varomoney.com';
    if (cleanName.includes('ally')) return 'https://ally.com';
    if (cleanName.includes('mercury')) return 'https://mercury.com';
    if (cleanName.includes('novo')) return 'https://novo.co';
    if (cleanName.includes('lili')) return 'https://lili.co';
    if (cleanName.includes('axos')) return 'https://axosbank.com';
    
    // Credit Cards
    if (cleanName.includes('chase')) return 'https://chase.com';
    if (cleanName.includes('capital one')) return 'https://capitalone.com';
    if (cleanName.includes('amex') || cleanName.includes('american express')) return 'https://americanexpress.com';
    if (cleanName.includes('citi')) return 'https://citi.com';
    if (cleanName.includes('apple')) return 'https://apple.com';
    if (cleanName.includes('discover')) return 'https://discover.com';
    
    // Loans & Finance
    if (cleanName.includes('lendingclub')) return 'https://lendingclub.com';
    if (cleanName.includes('marcus')) return 'https://marcus.com';
    if (cleanName.includes('upstart')) return 'https://upstart.com';
    if (cleanName.includes('avant')) return 'https://avant.com';
    if (cleanName.includes('best egg')) return 'https://bestegg.com';
    
    // Payment Gateways
    if (cleanName.includes('stripe')) return 'https://stripe.com';
    if (cleanName.includes('adyen')) return 'https://adyen.com';
    if (cleanName.includes('square')) return 'https://squareup.com';
    if (cleanName.includes('shopify')) return 'https://shopify.com';
    if (cleanName.includes('braintree')) return 'https://braintreepayments.com';
    if (cleanName.includes('authorize.net')) return 'https://authorize.net';
    if (cleanName.includes('klarna')) return 'https://klarna.com';
    if (cleanName.includes('affirm')) return 'https://affirm.com';
    if (cleanName.includes('plaid')) return 'https://plaid.com';
    if (cleanName.includes('paypal')) return 'https://paypal.com';
    if (cleanName.includes('neteller')) return 'https://neteller.com';
    if (cleanName.includes('skrill')) return 'https://skrill.com';
    if (cleanName.includes('payeer')) return 'https://payeer.com';
    if (cleanName.includes('webmoney')) return 'https://webmoney.ru';

    // Brokers & Crypto
    if (cleanName.includes('binance')) return 'https://www.binance.com/activity/referral-entry/CPA?ref=CPA_0029XHRETF';
    if (cleanName.includes('coinbase')) return 'https://coinbase.com';
    if (cleanName.includes('uphold')) return 'https://uphold.com';
    if (cleanName.includes('webull')) return 'https://webull.com';
    if (cleanName.includes('charles schwab')) return 'https://schwab.com';
    if (cleanName.includes('fidelity')) return 'https://fidelity.com';
    if (cleanName.includes('etoro')) return 'https://etoro.com';
    if (cleanName.includes('nexo')) return 'https://nexo.com';
    if (cleanName.includes('kucoin')) return 'https://kucoin.com';
    
    // Fallback direct URL construction
    return `https://${cleanName.replace(/[^a-z0-9]/g, '')}.com`;
  }
  return fallback;
};
