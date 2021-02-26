const fetch = require("node-fetch").default;

exports.handler = async () => {
  const endpoint = "https://opendata.resas-portal.go.jp";

  try {
    const res = await fetch(`${endpoint}/api/v1/prefectures`, {
      headers: { "X-API-KEY": process.env.RESAS_API_KEY },
    });

    if (!res.ok) {
      throw new Error(
        `通信時にエラーが発生しました。エラーコード: ${res.status}`
      );
    } else {
      const json = await res.json();

      return {
        statusCode: 200,
        body: JSON.stringify(json),
      };
    }
  } catch (e) {
    console.error(e);

    return {
      statusCode: e.statusCode,
      body: e,
    };
  }
};
