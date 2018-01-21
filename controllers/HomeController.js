
const {
  readdir,
  unlink,
  stat,
  writeFile
} = require('fs')
const { promisify } = require('util')

const readdirPromised = promisify(readdir)
const statsPromised = promisify(stat)
const unlinkPromised = promisify(unlink)
const writeFilePromised = promisify(writeFile)

class HomeController {

  constructor () {
    const execDirectory = process.cwd()
    this.uploadPath = `${execDirectory}/public/uploads`
  }

  async uploadSingleFile ({ originalname, buffer }, name = new Date().getTime(), response) {
    const extension = originalname.split('.')[1]
    const finalName = `${name}.${extension}`

    await writeFilePromised(`${this.uploadPath}/${finalName}`, buffer)
    response.json()
  }

  async listFiles () {
    const filenames = await readdirPromised(this.uploadPath)

    return filenames.map((file, index) => ({
      name: file.split('.')[0],
      type: file.split('.')[1],
      index
    }))
  }

  async getInformationAboutFile (filename, response) {
    const statsResult = await statsPromised(`${this.uploadPath}/${filename}`)
    response.json(Object.assign({}, statsResult, { filename }))
  }

  async deleteSomeFile (filename, response) {
    const unlinkResult = await unlink(`${this.uploadPath}/${filename}`)
    response.json(Object.assign({}, unlinkResult, { filename }))
  }
}

module.exports = HomeController