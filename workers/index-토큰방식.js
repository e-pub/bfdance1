export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const now = Date.now();
    const lastRun = await env.RATE_LIMIT_KV.get("last_run_timestamp");

    // ✅ 60일(5184000000ms)마다 실행되도록 변환
    const timestamps = [lastRun, now - 5184000000].filter(Boolean);
    const latestRun = Math.max(...timestamps);

    await env.RATE_LIMIT_KV.put("last_run_timestamp", now.toString());

    const fetchInstagramReels = async () =>
      fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${env.INSTAGRAM_ACCESS_TOKEN}`,
        { headers: { "Content-Type": "application/json" } }
      )
        .then((res) => res.json())
        .catch(() => ({ error: "Failed to fetch Instagram data" }));

    const routes = {
      "/api/fetch-reels": () =>
        fetchInstagramReels().then(
          (data) =>
            new Response(JSON.stringify(data), {
              headers: { "Content-Type": "application/json" },
            })
        ),
      "/api/last-run": () =>
        new Response(
          `마지막 실행 시간: ${new Date(latestRun).toLocaleString()}`,
          { headers: { "Content-Type": "text/plain" } }
        ),
    };

    return routes[path]?.() ?? new Response("Not Found", { status: 404 });
  },
};
