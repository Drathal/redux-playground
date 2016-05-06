import path from 'path'

export const indexPageHandler = (req, res) => res.sendFile(path.join(__dirname, './index.html'))
