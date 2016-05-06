import express from 'express'
import path from 'path'

export const coverageHandler = express.static(path.join(__dirname, '../../coverage'))
