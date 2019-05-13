// https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90
// 接口前缀
const rootPath = 'https://news-at.zhihu.com/api/4';

const api = {
  // 获取最新消息
  newList: `${rootPath}/news/latest`,
  // 获取文章内容 id
  news:`${rootPath}/news/`,
  // 获取过往日期 20131119
  newsBefore: `${rootPath}/news/before/`,
  // 获取文章额外信息 后面跟id
  newsExtera: `${rootPath}/story-extra/`,
  // 获取文章评论 长评论id/long-comments  短评论id/short-comments
  newsComment:`${rootPath}/story/`,
  // 主题日报列表
  themes: `${rootPath}/themes`,
  // 主题日报内容查看  /主题日报中的id
  viewThemes: `${rootPath}/themes`

}

export default api