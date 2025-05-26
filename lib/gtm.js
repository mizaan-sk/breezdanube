export const GTM_ID = 'GTM-P684SB29';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
