export default {
  async fetch(request) {
    const url = new URL(request.url);

    const routes = {
      "/api/schedule": () =>
        new Response(JSON.stringify({ message: "✅ 스케줄 데이터!" }), {
          headers: { "Content-Type": "application/json" },
        }),
    };

    return routes[url.pathname]?.() ?? new Response("Not Found", { status: 404 });
  },
};
