import { useEffect } from 'react';
import { useColorModeValue } from './ui/color-mode';

function ThemeColorMetaTag() {
  const themeColor = useColorModeValue('pink', 'orange'); // adjust to match your theme

  useEffect(() => {
    let metaTag = document.querySelector('meta[name="theme-color"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      (metaTag as any).name = 'theme-color';
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', themeColor);
  }, [themeColor]);

  return null;
}

export default ThemeColorMetaTag;
