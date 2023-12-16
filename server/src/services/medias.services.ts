import { Request } from 'express'
import sharp from 'sharp'
import { UPLOAD_IMAGE_TEMP_DIR } from '~/constants/dir'
import { handleUploadImage } from '~/utils/file'
import fsPromise from 'fs/promises'
import { isProduction } from '~/constants/config'
import { config } from 'dotenv'
config()

class MediasService {
  async uploadImage(req: Request) {
    const file = await handleUploadImage(req)
    const newName = `${file.newFilename.split('.')[0]}.jpg` // tên file được upload lên folder uploads
    const newPath = UPLOAD_IMAGE_TEMP_DIR + '/' + newName // path tới file lưu tạm trong temp
    await sharp(file.filepath).jpeg().toFile(newPath) // chuyển đổi file chính sang .jpg và lưu ở temp
    await fsPromise.unlink(newPath) // xóa file ở temp
    return isProduction
      ? `${process.env.HOST}/uploads/${newName}`
      : `http://localhost:${process.env.PORT}/uploads/${newName}`
  }
}

const mediasService = new MediasService()
export default mediasService
