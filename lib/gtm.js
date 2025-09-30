export const GTM_ID = 'GTM-KN5674ZD';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
