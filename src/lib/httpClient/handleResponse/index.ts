export const handleResponse = async <T extends unknown>(res: Response): Promise<T> => {
  const data = await res.json();

  if (res.ok) {
    return data;
  }

  throw new Error('Not a valid request');
};
