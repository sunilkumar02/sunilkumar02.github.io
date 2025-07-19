// utils/navigation.ts
export function handleNavigationOrDownload(url: string, type: 'download' | 'navigate' = 'navigate') {
  if (!url) return;

  if (type === 'download') {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = ''; // can be customized to a filename
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  } else {
    window.open(url, '_blank'); // open in new tab
  }
}