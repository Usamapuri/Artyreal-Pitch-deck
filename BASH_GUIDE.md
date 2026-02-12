# Bash Setup Guide for Windows

## 🎉 Good News!

You now have **multiple bash options** available on your Windows system:

1. **Git Bash** (Already installed ✅)
2. **WSL Ubuntu** (Installing in background...)

---

## Option 1: Git Bash (Ready to Use NOW!)

### What is Git Bash?
Git Bash provides a bash emulation environment on Windows. It comes bundled with Git for Windows and includes common Unix tools.

**Version:** GNU bash 5.2.37

### How to Use Git Bash

#### Method 1: Launch Git Bash Application
1. Press `Win + S` and search for "Git Bash"
2. Click to open
3. Now you can use `&&` and all bash commands!

#### Method 2: Use in VS Code/Cursor
1. Open Cursor/VS Code
2. Press `` Ctrl + ` `` to open terminal
3. Click the dropdown arrow next to the `+` icon
4. Select "Git Bash"
5. Set as default if you prefer

#### Method 3: Run from PowerShell
```powershell
& "C:\Program Files\Git\bin\bash.exe"
```

### Test Git Bash
```bash
# Navigate to your project
cd "C:\Users\usama\Dropbox\My PC (Puris)\Downloads\artyreal-pitch-deck"

# Try using && (will work now!)
git status && npm run dev

# Or
npm install && npm run build && npm run preview
```

---

## Option 2: WSL Ubuntu (Full Linux Experience)

### What is WSL?
Windows Subsystem for Linux lets you run a full Linux distribution alongside Windows. Much more powerful than Git Bash.

### Current Status
🔄 **Installing Ubuntu...** (Check status below)

### After Installation Completes

#### First Time Setup
1. Open "Ubuntu" from Start Menu
2. Create a Linux username and password
3. Update packages:
```bash
sudo apt update && sudo apt upgrade -y
```

#### Install Node.js in WSL (Recommended)
```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Restart terminal or run:
source ~/.bashrc

# Install Node.js
nvm install 20
nvm use 20

# Verify
node --version
npm --version
```

#### Access Your Windows Files
Your Windows files are accessible at `/mnt/c/`:
```bash
cd "/mnt/c/Users/usama/Dropbox/My PC (Puris)/Downloads/artyreal-pitch-deck"
```

#### Use WSL in VS Code/Cursor
1. Install "WSL" extension
2. Open Command Palette (`Ctrl+Shift+P`)
3. Type "WSL: Connect to WSL"
4. Your project will now run in the Linux environment!

---

## Comparison: Git Bash vs WSL

| Feature | Git Bash | WSL Ubuntu |
|---------|----------|------------|
| **Speed** | Fast ⚡ | Medium |
| **Compatibility** | Good for basic scripts | Full Linux compatibility |
| **File System** | Windows native | Linux + Windows access |
| **Package Manager** | Limited | Full `apt` support |
| **Docker** | Requires Docker Desktop | Native Docker support |
| **Best For** | Quick git/npm tasks | Full development environment |

---

## Recommended Setup

### For Quick Tasks (Recommended)
Use **Git Bash** - it's already set up and works great for:
- Git commands
- npm/yarn commands
- Basic shell scripts
- Quick file operations

### For Serious Development
Use **WSL Ubuntu** when you need:
- Docker without Docker Desktop
- Linux-specific tools
- Multiple Node versions (nvm)
- Full UNIX environment

---

## Setting Default Terminal in Cursor/VS Code

### Make Git Bash Your Default Terminal

1. Open Settings (`Ctrl + ,`)
2. Search for "terminal default profile windows"
3. Select "Git Bash"

OR add to `settings.json`:
```json
{
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}
```

### Make WSL Your Default Terminal

```json
{
  "terminal.integrated.defaultProfile.windows": "Ubuntu (WSL)"
}
```

---

## Quick Commands Reference

### Git Bash Commands (Available Now!)
```bash
# Chain commands with &&
npm install && npm run dev

# Use standard Unix commands
ls -la
grep -r "searchterm" .
find . -name "*.tsx"

# Git shortcuts
git status && git add . && git commit -m "message" && git push
```

### Check Installation Status
Run in PowerShell:
```powershell
# Check WSL distributions
wsl --list --verbose

# Check if Ubuntu is installed
wsl --distribution Ubuntu --exec bash --version
```

---

## Troubleshooting

### Git Bash Not in Cursor Terminal List
1. Restart Cursor/VS Code completely
2. Ensure Git is installed: `winget list Git.Git`
3. Manually add in settings.json:
```json
{
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "path": "C:\\Program Files\\Git\\bin\\bash.exe",
      "icon": "terminal-bash"
    }
  }
}
```

### WSL Ubuntu Installation Issues
```powershell
# Enable WSL feature (if needed)
wsl --install --no-distribution

# Then install Ubuntu separately
wsl --install Ubuntu

# Or use winget
winget install Canonical.Ubuntu
```

---

## 🚀 Ready to Use!

**Git Bash is ready NOW!** Open it from:
- Start Menu → "Git Bash"
- Cursor Terminal → Select "Git Bash"
- Command line: `bash`

Once WSL Ubuntu finishes installing, you'll have both options available. Start with Git Bash for immediate use!
