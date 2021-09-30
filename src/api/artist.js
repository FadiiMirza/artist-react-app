import Axios from "./axios.configured";

/**
 * Fetch Artists by name
 * @param {name} param0 string
 * @returns Promise
 */
export const fetchArtists = async ({ name }) => {
  try {
    return await Axios.get(`/artists/${name}`);
  } catch (error) {
    throw error;
  }
};

/**
 * Fetch Artists Events by name
 * @param {name} param0 string
 * @returns Promise
 */
export const fethEvents = async ({ name, date }) => {
  try {
    return await Axios.get(`/artists/${name}/events`, {
      params: {
        date,
      },
    });
  } catch (error) {
    throw error;
  }
};
