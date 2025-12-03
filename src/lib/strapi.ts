const STRAPI_API_URL = import.meta.env.STRAPI_API_URL;

const getHomePageData = async () => {
  const data = await getStrapiData(
    "home-page?populate[sections][on][layout.hero-section][populate]"
  );

  return data;
};

const getSocialProfilesData = async () => {
  const result = await getStrapiData("social-link");

  if (!result)
    return {
      linkedinUrl: "#",
      githubUrl: "#",
      emailUrl: "#",
    };

  return {
    linkedinUrl: result.data?.linkedinUrl,
    githubUrl: result.data?.githubUrl,
    emailUrl: result.data?.emailUrl,
  };
};

const getStrapiData = async (endpoint: string) => {
  try {
    const response = await fetch(`${STRAPI_API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export { getHomePageData, getSocialProfilesData };
