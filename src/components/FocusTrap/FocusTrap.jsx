import React, { useEffect, useCallback } from 'react';
import { FOCUSABLE_SELECTOR } from '../../constants/constants';

export default function FocusTrap({ children, isActive = true }) {
  const topTabTrap = React.useRef();
  const bottomTabTrap = React.useRef();
  const container = React.useRef();

  const trapFocus = useCallback(
    (event) => {
      // Only trap focus in modal form
      if (!isActive) return;

      let elements;
      if (event.target === topTabTrap.current) {
        elements = getFocusableElements();

        if (elements.length > 0) {
          const lastElement = elements[elements.length - 1];
          lastElement.focus();
        }
      }

      if (event.target === bottomTabTrap.current) {
        elements = getFocusableElements();

        if (elements.length > 0) {
          const firstElement = elements[0];
          firstElement.focus();
        }
      }
    },
    [isActive, topTabTrap, bottomTabTrap, container]
  );

  const getFocusableElements = useCallback(() => {
    if (!container.current) return [];

    return Array.from(container.current.querySelectorAll(FOCUSABLE_SELECTOR))
      .filter((element) => element !== topTabTrap.current)
      .filter((element) => element !== bottomTabTrap.current);
  }, [topTabTrap, bottomTabTrap, container]);

  useEffect(() => {
    document.addEventListener('focusin', trapFocus);
    return () => document.removeEventListener('focusin', trapFocus);
  }, []);

  return (
    <div ref={container} className='focus-trap'>
      {isActive && <span ref={topTabTrap} tabIndex='0' />}
      {children}
      {isActive && <span ref={bottomTabTrap} tabIndex='0' />}
    </div>
  );
}
