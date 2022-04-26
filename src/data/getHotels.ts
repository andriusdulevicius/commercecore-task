export const getHotelsData = async () => {
  try {
    const res = await fetch(`${process.env.PUBLIC_URL}/hotels.json`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
