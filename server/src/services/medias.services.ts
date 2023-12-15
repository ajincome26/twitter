import { Request } from 'express'
import { handleUploadImage } from '~/utils/file'

class MediasService {
  async uploadImage(req: Request) {
    const data = await handleUploadImage(req)
  }
}

const mediasService = new MediasService()
export default mediasService
