const API_URL = `http://localhost:${
  process.env.NEXT_PUBLIC_BACKEND_PORT || 5001
}/api/v1/user`;

// Get all posts
export const getAllPosts = async () => {
  try {
    const res = await fetch(`${API_URL}/all_posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get single post
export const getSinglePost = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/all_posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
