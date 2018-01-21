
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
      console.log(detailButton.getAttribute('data-filename'))
    })
  
  $('.btn-delete')
    .map((index, deleteButton) => {
      deleteButton.addEventListener('click', (event) => {
        const file = event.target.getAttribute('data-filename')
        const typeFile = event.target.getAttribute('data-type')
        const filename = `${file}.${typeFile}`

        const deleteRequest = new Request(`/file/${filename}`, { method: 'DELETE' })
        fetch(deleteRequest)
          .then((res) => res.json())
          .then((res) => {
            console.log('res', res)
          })
          .catch((err) => console.log('err', err))
      })
    })


})(jQuery, window)