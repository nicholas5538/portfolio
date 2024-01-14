import {
  useEffect,
  type RefObject,
  type Dispatch,
  type SetStateAction,
} from 'react';

export default function useOutsideAlerter(
  ref: RefObject<HTMLDivElement>,
  handleClick: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent): void {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        handleClick(false);
      }
      return;
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handleClick]);

  return;
}
