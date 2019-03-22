const rootPath = 'http://novel.juhe.im';
const apiObject = {
  sort: `${rootPath}/categories`, //获取带书籍数量的父分类
  sortChildren: `${rootPath}/sub-categories`, //获取带子分类的分类
  sortInfo: `${rootPath}/category-info`, //获取分类详情 {gender, type, major(主分类), minor(子分类), start, limit}
  bookInfo: `${rootPath}/book-info`, //获取书籍详情 params:{id: book id}
  bookSources: `${rootPath}/book-sources`, //获取书籍源 query:{view: summary,book: {bookid}}
  bookChapterso: `${rootPath}/book-chapters`, //获取书籍列表 params:{id: book id}
  authorBook: `${rootPath}/author-books` //获取作者下的书籍 query:{author: 作者名}
}

export default apiObject