type TrackEvent = (
  event_value: string,
  event_type: 'internal_link' | 'external_link',
  url?: string | undefined,
  website_id?: string | undefined
) => void;

export const trackEvent: TrackEvent = (...args) => {
  if (
    process.env.NODE_ENV === 'production' &&
    window.umami &&
    typeof window.umami.trackEvent === 'function'
  ) {
    window.umami.trackEvent(...args);
  }
};
