export const getHotelsData = async () => {
  const res = await fetch(`${process.env.PUBLIC_URL}/hotels.json`);
  const data = await res.json();
  return data;
};
