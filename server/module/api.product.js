import path from 'path'

export const apiProductHandler = (req, res) => res.sendFile(path.join(__dirname, './products.json'))
