import { useEffect } from 'react';
import freshpaintInit from "./freshpaint-script"

function useFreshpaintCDN(envId) {
  const freshpaint = freshpaintInit();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://freshpaint-cdn.com/js/95629632-e650-498b-b78d-98afb6fb7d90/freshpaint.js`;
    script.async = false;
    script.onload = () => {
      // Callback function after the script is loaded
      console.log('Freshpaint CDN script loaded successfully');
      // Any function that relies on the script should be called here
    };

    script.onerror = () => {
       console.error('Error loading the remote script');
    };
    
    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return freshpaint;
}

export default useFreshpaintCDN;