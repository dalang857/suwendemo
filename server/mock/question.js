const Mock = require('mockjs')
const getQuestionList = require('./data/getquestionlist')
const Random = Mock.Random

module.exports = [
  {
    url: '/api/question/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle()
        }
      }
    }
  },
  {
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  {
    //获取列表
    url: '/api/question',
    method: 'get',
    response(ctx) {
      const { url = '', query } = ctx
      const isDeleted = url.indexOf('isDeleted=true') >= 0
      const isStar = url.indexOf('isStar=true') >= 0
      const pageSize = parseInt(query.pageSize || 3)
      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isStar, isDeleted }),
          total: 100
        }
      }
    }
  },
  {
    url: '/api/question/:id',
    method: 'patch',
    response() {
      return {
        errno: 0
      }
    }
  },
  {
    url: '/api/question/duplicate/:id',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  {
    url: '/api/question',
    method: 'delete',
    response() {
      return {
        errno: 0
      }
    }
  }
]
