export default async function getTalks(username, tokens) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api/talks/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        username: `${username}`,
        Authorization: `Bearer ${tokens.access}`,
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Talks data:", result);
      return result;
    } else {
      console.error("Failed to fetch talks:", response.status);
      return [];
    }
  } catch (error) {
    console.error("Error fetching talks:", error);
    return [];
  }
}
