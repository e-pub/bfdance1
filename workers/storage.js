export default {
  async fetch(request) {
    const checkStorageUsage = async () => {
      const response = await fetch("https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/r2/buckets/YOUR_BUCKET_NAME", {
        headers: { "Authorization": `Bearer YOUR_API_KEY` },
      });
      return response.json();
    };

    const deleteOldestReel = async () => {
      const response = await fetch("https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/r2/objects/YOUR_BUCKET_NAME", {
        method: "DELETE",
        headers: { "Authorization": `Bearer YOUR_API_KEY` },
      });
      return response.ok ? { message: "Oldest reel deleted" } : { error: "Failed to delete" };
    };

    const routes = {
      "/api/check-storage": async () =>
        checkStorageUsage().then((data) =>
          new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
        ),

      "/api/delete-oldest": async () =>
        deleteOldestReel().then((data) =>
          new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
        ),
    };

    return routes[path]?.() ?? new Response("Not Found", { status: 404 });
  },
};
