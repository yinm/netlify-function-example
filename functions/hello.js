exports.handler = async (event) => {
  const subject = event.queryStringParameter.name || "World";
  return {
    statusCode: 200,
    body: `Hello ${subject}`,
  };
};
