
(function ($, window, undefined) {

  'use strict'
  
  $('.btn-details')
    .map((index, detailButton) => {
      detailButton.addEventListener('click', (event) => {
        const file = event.target.getAttribute('data-filename')
        const typeFile = event.target.getAttribute('data-type')
        const filename = `${file}.${typeFile}`

        fetch(`/file/${filename}`)
          .then((res) => res.json())
          .then((getImageDetails) => {
            $('#imageName').text(getImageDetails.filename)
            $('#lastUpdated').val(getImageDetails.mtime)
            $('#lastAccess').val(getImageDetails.ctime)
            $('#size').val(getImageDetails.size)
            $('#detailsModal').modal({ show: true })
            console.log('* Get Image details', getImageDetails)
          })
          .catch((getImageDetailsError) => console.log('* Get image details error', getImageDetailsError))
      })
    })
  
  $('.btn-delete')
    .map((index, deleteButton) => {
      deleteButton.addEventListener('click', (event) => {
        const file = event.target.getAttribute('data-filename')
        const typeFile = event.target.getAttribute('data-type')
        const filename = `${file}.${typeFile}`

        const deleteRequest = new Request(`/file/${filename}`, { method: 'DELETE' })
        fetch(deleteRequest)
          .then((res) => {
            window.location.reload()        
          })
          .catch((err) => console.log('err', err))
      })
    })
  
  $('#upload').on('click', (event) => {
    const formData = new FormData()
    formData.append('file', $('#fileInput')[0].files[0])
    formData.append('name', $('#filename').val())

    const uploadRequest = new Request(`/file`, { method: 'POST', body: formData })
    fetch(uploadRequest)
      .then((res) => {
        window.location.reload()        
      })
      .catch((err) => console.log('err', err))
  })


})(jQuery, window)