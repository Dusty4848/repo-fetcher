export const standardOptions = (otherHeaders = {}): { headers: HeadersInit } => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...otherHeaders,
    },
  };
};
