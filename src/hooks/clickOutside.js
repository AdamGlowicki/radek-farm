import {useEffect} from 'react';

export const useClickOutside = (ref, callback) => {
    const closeByClickOutside = (e) => {
        if (!ref.current || ref.current.contains(e.target)) {
            return
        } else {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeByClickOutside)

        return () => {
            document.removeEventListener('mousedown', closeByClickOutside)
        }
    })
}