export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    const username = "bouncefactory_dancestudio"; // 🔥 가져올 계정 ID
    const headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" };

    // 🟢 Instagram 릴스 데이터 가져오기 (오류 처리 포함)
    const fetchInstagramReels = async () => {
      try {
        const response = await fetch(`https://www.instagram.com/${username}/?__a=1&__d=dis`, { headers });

        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        const text = await response.text();
        const jsonStart = text.indexOf('window._sharedData = ') + 21;
        const jsonEnd = text.indexOf(';</script>', jsonStart);
        const jsonData = JSON.parse(text.slice(jsonStart, jsonEnd));

        return jsonData.entry_data?.ProfilePage?.[0]?.graphql?.user?.edge_felix_video_timeline?.edges.map(
          (reel) => ({
            id: reel.node.id,
            caption: reel.node.edge_media_to_caption?.edges?.[0]?.node?.text || "",
            videoUrl: reel.node.video_url, // 🎥 릴스 영상 URL
            thumbnail: reel.node.display_url, // 🖼 릴스 썸네일 이미지
            timestamp: reel.node.taken_at_timestamp,
            permalink: `https://www.instagram.com/p/${reel.node.shortcode}/`,
          })
        ) || [];
      } catch (error) {
        return { error: `Instagram API Fetch Failed: ${error.message}` };
      }
    };

    // 🟢 API 라우트 설정
    const routes = {
      "/api/fetch-reels": async () => {
        const data = await fetchInstagramReels();
        return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" },
        });
      },
    };

    // 🟢 요청 경로 확인 후 실행 (라우트가 없으면 404 반환)
    return routes[path]?.() ?? new Response("Not Found", { status: 404 });
  },
};
