// Elite JavaScript Functionality for The Billionaire's Dare

// Copy Bitcoin address with enhanced UX
function copyToClipboard() {
    const addressElement = document.getElementById('walletAddress');
    const address = addressElement.textContent.trim();

    if (navigator.clipboard) {
        navigator.clipboard.writeText(address).then(function() {
            showEliteCopySuccess();
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
        showEliteCopySuccess();
    } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
        showCopyError(text);
    }

    document.body.removeChild(textArea);
}

function showEliteCopySuccess() {
    const button = document.querySelector('.elite-copy-btn');
    const originalText = button.textContent;
    button.textContent = '✓ Address Copied!';
    button.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    button.style.transform = 'scale(1.05)';

    // Add success animation
    button.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.05)' },
        { transform: 'scale(1)' }
    ], {
        duration: 300,
        easing: 'ease-in-out'
    });

    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.style.transform = '';
    }, 2500);

    // Show brief success message
    showNotification('Bitcoin address copied! Ready to accelerate.', 'success');
}

function showCopyError(text) {
    showNotification('Copy failed. Please manually copy: ' + text, 'error');
}

function showNotification(message, type) {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '1000',
        fontSize: '14px',
        maxWidth: '300px',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Countdown Timer for Elite Urgency
function startEliteCountdown() {
    const countdownElement = document.getElementById('countdown');

    // Set target time (2 hours 47 minutes from now)
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 2);
    targetTime.setMinutes(targetTime.getMinutes() + 47);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetTime.getTime() - now;

        if (distance < 0) {
            countdownElement.textContent = "WINDOW CLOSED";
            countdownElement.style.color = "#ff4444";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent =
            String(hours).padStart(1, '0') + ":" +
            String(minutes).padStart(2, '0') + ":" +
            String(seconds).padStart(2, '0');

        // Add urgency colors when time is running low
        if (distance < 600000) { // Last 10 minutes
            countdownElement.style.color = "#ff6b35";
            countdownElement.style.animation = "pulse 1s infinite";
        }
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    // Add pulse animation for urgency
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Simple animation for donation encouragement
function showEncouragement() {
    // Just add a subtle animation to the copy button
    setTimeout(() => {
        const button = document.querySelector('.donate-btn');
        if (button) {
            button.style.transform = 'scale(1.02)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        }
    }, 2000);
}

// Social Sharing for Viral Growth
function initSocialSharing() {
    // Add share buttons dynamically
    const shareSection = document.createElement('div');
    shareSection.className = 'elite-share-section';
    shareSection.innerHTML = `
        <h3>Share the Experiment</h3>
        <div class="share-buttons">
            <button onclick="shareOnTwitter()" class="share-btn twitter">🐦 Share on Twitter</button>
            <button onclick="shareOnLinkedIn()" class="share-btn linkedin">💼 Share on LinkedIn</button>
            <button onclick="copyShareLink()" class="share-btn copy">🔗 Copy Link</button>
        </div>
    `;

    // Insert after QR code section
    const qrSection = document.querySelector('.elite-qr-section');
    qrSection.insertAdjacentElement('afterend', shareSection);

    // Style the share section
    const style = document.createElement('style');
    style.textContent = `
        .elite-share-section {
            text-align: center;
            margin: 40px 0;
            padding: 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 15px;
            color: white;
        }

        .share-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 15px;
            flex-wrap: wrap;
        }

        .share-btn {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            background: rgba(255,255,255,0.2);
            color: white;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .share-btn:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Just found a simple way generous people can help make dreams come true with Bitcoin. The Billionaire's Dare - every little bit helps! ☕💭");
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("The Billionaire's Dare - Help Make Dreams Come True");
    const summary = encodeURIComponent("A simple Bitcoin donation page where generous people can help ambitious individuals chase their dreams. No strings attached.");
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
}

function copyShareLink() {
    const url = window.location.href;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Share link copied! Spread the experiment.', 'success');
        });
    } else {
        showNotification('Please copy this URL: ' + url, 'info');
    }
}

// Generate Elite QR Code
function generateEliteQRCode() {
    const address = document.getElementById('walletAddress').textContent.trim();
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    // Clear previous QR code
    qrCodeContainer.innerHTML = '';

    // Create enhanced QR code
    const qrCode = new QRCode(qrCodeContainer, {
        text: `bitcoin:${address}`,
        width: 200,
        height: 200,
        colorDark: "#2c3e50",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Add elite styling
    qrCodeContainer.style.textAlign = 'center';
    qrCodeContainer.style.padding = '20px';
    qrCodeContainer.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    qrCodeContainer.style.borderRadius = '15px';
    qrCodeContainer.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    generateEliteQRCode();
    startEliteCountdown();
    showEncouragement();
    initSocialSharing();

    // Add hover effects to options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
        });

        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Add click tracking for analytics
    document.querySelector('.donate-btn').addEventListener('click', function() {
        console.log('Generous person engaged with Bitcoin address');
    });
});
