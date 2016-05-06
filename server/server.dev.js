import path from 'path'
import express from 'express'
import { hotServer, proxyHandler } from './module/hot'
import { coverageHandler } from './module/coverage'
import { apiProductHandler } from './module/api.product'
import { indexPageHandler } from './module/indexPage'

const port = 3000
const app = new express()

app.use('/build/', proxyHandler)
app.use('/coverage', coverageHandler)
app.use('/api/product', apiProductHandler)
app.get('*', indexPageHandler)

app.listen(port, () => {
    hotServer()
    console.info('Dev Server: http://localhost:%s/ ', port)
})
