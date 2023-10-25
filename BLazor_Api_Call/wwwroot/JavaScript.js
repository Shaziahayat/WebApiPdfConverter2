window.blazorDownloadFile = (bytesBase64, fileName) => {
    // Convert base64 data to a blob
    const byteCharacters = atob(bytesBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a link to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || 'downloaded.pdf'; // Use 'downloaded.pdf' if fileName is not provided
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};
