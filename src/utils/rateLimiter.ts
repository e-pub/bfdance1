export const secureApiCall = (url: string, options: RequestInit): Promise<any> => {
  const now = Date.now();
  return now - lastRequestTime < RATE_LIMIT_INTERVAL
    ? Promise.reject("❌ 너무 빠른 요청! 잠시 후 다시 시도하세요.")
    : ((lastRequestTime = now), fetch(url, options).then(res => res.json()));
};

const RATE_LIMIT_INTERVAL = 3000; // ✅ 3초 제한
let lastRequestTime = 0; // ✅ 마지막 요청 시간을 저장할 변수

