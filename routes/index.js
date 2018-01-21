
const express = require('express')
const multer = require('multer')

const HomeController = require('../controllers/HomeController')

const router = express.Router()

const storage = multer.memoryStorage()
const uploadMiddleware = multer({ storage })

router.get('/', async(req, res) => {
  const homeControllers = new HomeController()
  const files = await homeControllers.listFiles(res)
  res.render('home', { files })
})

router.get('/file', async (req, res) => {
  const homeControllers = new HomeController()
  const files = await homeControllers.listFiles()
  res.json({ files })
})

router.get('/file/:filename', (req, res) => {
  if (!req.params.filename) return res.status(400).json({ error: 'Please pass a file name' })
  const homeControllers = new HomeController()
  homeControllers.getInformationAboutFile(req.params.filename, res)
})

router.post('/file', uploadMiddleware.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Please pass a file' })
  const homeControllers = new HomeController()
  homeControllers.uploadSingleFile(req.file, req.body.name, res)
})

router.delete('/file/:filename', (req, res) => {
  if (!req.params.filename) return res.json({ error: 'Please pass a file name' })
  const homeControllers = new HomeController()
  homeControllers.deleteSomeFile(req.params.filename, res)
})

module.exports = router
