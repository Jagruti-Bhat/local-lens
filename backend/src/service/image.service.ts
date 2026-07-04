import axios from "axios";

class ImageService {
  async getDestinationImage(destination: string): Promise<string | null> {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: destination,
            per_page: 1,
            orientation: "landscape",
          },
          headers: {
            Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
          },
        },
      );

      const results = response.data.results;

      if (!results.length) {
        return null;
      }

      const random = results[Math.floor(Math.random() * results.length)];

      return random.urls.regular;
    } catch (err) {
      console.error("Unsplash Error", err);

      return null;
    }
  }
}

export default new ImageService();
