import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
}

const SmoothScrollLink: React.FC<Props> = ({ children, href }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = ref.current?.getAttribute('href') || '';
    const targetElement = document.querySelector(targetId) as HTMLElement;
    if (targetElement) {
      const navbarHeight = (document.querySelector('.navbar') as HTMLElement)?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a ref={ref} href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
