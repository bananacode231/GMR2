# GetMeRich - Bitcoin Donation Website

A simple, beautiful website to display your Bitcoin wallet address for donations with the message "Just seeing if anyone rich wants to change my life".

## 🌟 Features

- **Beautiful Design**: Modern gradient layout with responsive design
- **Real Bitcoin Wallet**: Generated using proper cryptographic methods
- **QR Code**: Scannable QR code for easy mobile wallet payments
- **Copy Button**: One-click copying of Bitcoin address
- **Mobile Friendly**: Works great on all devices

## 🚀 Quick Deploy to GitHub Pages (FREE)

### Option 1: Automated (Recommended)
```bash
python3 deploy-github.py
```

### Option 2: Manual Steps

1. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `getmerich`
   - Make it public
   - Don't initialize with README

2. **Upload Files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: GetMeRich Bitcoin donation website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/getmerich.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab (near the top)
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and click "Save"

4. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/getmerich
   ```

## 📁 Project Structure

```
/Users/chris/Desktop/SaaS/
├── index.html          # Main website page
├── styles.css          # Beautiful styling
├── script.js           # Interactive features
├── wallet.json         # Your wallet info (KEEP SECURE!)
├── generate_wallet.py  # Wallet generation script
├── serve.py           # Local development server
└── README.md          # This file
```

## ⚠️ Security Notes

- **Keep `wallet.json` secure** - it contains your private key
- **Never share your private key** with anyone
- The Bitcoin address `17h6dvbnyRWxM5ML4Cn2iHKh12GEhXrzdt` is public and safe to share
- Consider using a hardware wallet for large amounts

## 🔧 Local Development

To run locally:
```bash
python3 serve.py
```
Then visit `http://localhost:8000`

## 🛠️ Customization

- **Change Bitcoin Address**: Run `python3 generate_wallet.py` to create a new wallet
- **Modify Styling**: Edit `styles.css`
- **Update Content**: Edit `index.html`
- **Add Features**: Modify `script.js`

## 📱 Mobile Wallets

The QR code is compatible with popular Bitcoin wallets:
- Electrum
- Mycelium
- Blockchain.com Wallet
- BRD Wallet
- Edge Wallet
- And many more!

## 💰 About Bitcoin

Your address: `17h6dvbnyRWxM5ML4Cn2iHKh12GEhXrzdt`

This is a real Bitcoin address ready to receive donations. Bitcoin transactions are:
- **Fast**: Usually confirmed within 10-60 minutes
- **Global**: Send/receive from anywhere in the world
- **Low fees**: Much cheaper than traditional banking
- **Irreversible**: Once sent, transactions cannot be reversed

---

**Made with ❤️ for the GetMeRich project**
