import express from 'express'
import { proxyHandler } from './module/hot'
import { coverageHandler } from './module/coverage'
import { apiProductHandler } from './module/api.product'
import { indexPageHandler } from './module/indexPage'

const config = require('../webpack.config')
const port = 3000
const app = new express()

app.use(config.output.publicPath, proxyHandler)
app.use('/coverage', coverageHandler)
app.use('/api/product', apiProductHandler)
app.get('*', indexPageHandler)

app.listen(port, () => {
    console.info('Dev Server: http://localhost:%s/ ', port)
})
