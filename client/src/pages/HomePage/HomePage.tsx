import { Link } from 'react-router-dom'

const getGoogleAuthUrl = () => {
  const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_REDIRECT_URI } = import.meta.env
  const url = `https://accounts.google.com/o/oauth2/v2/auth`
  const query = {
    client_id: VITE_GOOGLE_CLIENT_ID,
    redirect_uri: VITE_GOOGLE_REDIRECT_URI,
    response_type: 'code',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'].join(
      ' '
    ),
    prompt: 'consent',
    access_type: 'offline' // Sẽ lấy thêm được refresh_token nữa
  }
  const queryString = new URLSearchParams(query).toString()
  return `${url}?${queryString}`
}
const googleOAuthUrl = getGoogleAuthUrl()

const HomePage = () => {
  const isLoggedIn = localStorage.getItem('access_token')
  const loggout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
  return (
    <div className='text-center mt-5'>
      <h1 className='text-red-500 text-lg mb-5'>HomePage</h1>
      {isLoggedIn ? (
        <div className='flex flex-col gap-2'>
          <span>You are logged in</span>
          <button onClick={loggout}>Log out</button>
        </div>
      ) : (
        <Link to={googleOAuthUrl} className='px-3 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600'>
          Login with Google
        </Link>
      )}
    </div>
  )
}

export default HomePage
