export const config = { runtime: 'edge' };
// 转发铺王网找店接口
const axios = require('axios');

module.exports = async (req, res) => {
  const { areaId = 440100, page = 1 } = req.query;
  const { data } = await axios.get('https://www.pubangwang.com/api/shop/search', {
    params: { areaId, industry: 0, area: 0, page },
    headers: { 'User-Agent': 'Mozilla/5.0' },
    timeout: 8000,
  });
  res.status(200).json(data);
};
