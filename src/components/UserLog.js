import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Loading from './Loading';

const Quiz = lazy(() => import('./Quiz'))

const UserLog = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');

  const firstName = useRef(null)
  const lastName = useRef(null)

  useEffect(() => {
    firstName && firstName.current && firstName.current.focus()
  }, [firstName]);

  const onKeyUp = (e, target) => {
    if (e.keyCode === 13) {
      if (target === 'firstName') {
        if (firstName.current.value.trim().length > 2) {
          setError('')
          lastName.current.focus();
        } else {
          setError('Please fill the fields properly')
        }
      }
      else if (target === 'lastName') {
        setError('')
        if (lastName.current.value.trim().length > 3) {
          handleSubmit()
        } else {
          setError('Please fill the fields properly')
        }

      }
    }
  }

  const handleSubmit = () => {
    if (firstName.current.value.trim().length && lastName.current.value.trim().length) {
      setIsLogged(true)
    } else {
      setError('Please fill the fields properly')
    }
  }

  if (isLogged) {
    return (
      <Suspense fallback={<Loading />}>
        <Quiz firstName={firstName?.current?.value} lastName={lastName?.current?.value} logOut={() => setIsLogged(false)} />
      </Suspense>
    )
  }

  return (
    <>
      <form>
        {error && <p>{error}</p>}
        <input
          type='text'
          placeholder='Type your name...'
          ref={firstName}
          onKeyUp={(e) => onKeyUp(e, 'firstName')}
        />
        <input
          type='text'
          placeholder='Type your surname...'
          ref={lastName}
          onKeyUp={(e) => onKeyUp(e, 'lastName')}
        />
      </form>
      <button
        onClick={handleSubmit}
        className='btn-submit'
      >Submit</button>
    </>
  )
}

export default UserLog