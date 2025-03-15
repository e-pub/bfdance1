export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === "/api/schedule") {
      return new Response(JSON.stringify({ message: "✅ 스케줄 데이터!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    
    return new Response("❌ 경로를 찾을 수 없습니다.", { status: 404 });
  }
};
