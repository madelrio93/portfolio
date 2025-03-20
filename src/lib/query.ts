export const query = async (url: string) => {
  try {
    const response = await fetch(`http://localhost:1337/api/${url}`);

    if (!response.ok) throw new Error("Failed to fetch data");

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
