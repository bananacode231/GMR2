function copyToClipboard() {
    const addressElement = document.getElementById('walletAddress');
    const address = addressElement.textContent.trim();

    if (navigator.clipboard) {
        navigator.clipboard.writeText(address).then(function() {
            showCopySuccess();
        }, function(err) {
            console.error('Could not copy text: ', err);
            fallbackCopyTextToClipboard(address);
        });
    } else {
        fallbackCopyTextToClipboard(address);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
        alert('Copy failed. Please manually copy the address: ' + text);
    }

    document.body.removeChild(textArea);
}

function showCopySuccess() {
    const button = document.querySelector('.copy-btn');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.backgroundColor = '#4CAF50';

    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
    }, 2000);
}

// Generate QR Code for Bitcoin address
document.addEventListener('DOMContentLoaded', function() {
    generateQRCode();
});

function generateQRCode() {
    const address = document.getElementById('walletAddress').textContent.trim();
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    // Clear previous QR code
    qrCodeContainer.innerHTML = '';

    // Create QR code using the library
    const qrCode = new QRCode(qrCodeContainer, {
        text: `bitcoin:${address}`,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
    });

    // Optional: Add some styling to the QR code container
    qrCodeContainer.style.textAlign = 'center';
    qrCodeContainer.style.marginTop = '10px';
}
