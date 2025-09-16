# 🎰Slot Machine Game

A simple command-line slot machine game built with Node.js.  
This project simulates depositing money, betting on lines, spinning reels, and checking winnings.

---

## 🚀Features
- Deposit money into your balance  
- Choose how many lines to bet on (1–3)  
- Set your bet per line with validation against your balance  
- Spin a 3x3 slot machine with customizable symbols  
- Win multipliers based on symbol values  
- Displays winnings and updated balance after every spin  
- Option to play again until your balance runs out  

---

## 🛠️Tech Stack
- Language: JavaScript (Node.js)  
- Dependency: [prompt-sync](https://www.npmjs.com/package/prompt-sync)  

---

## 📦Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sebzcode/SlotMachineGame.git
   cd SlotMachineGame

2. Install dependencies:
    ```bash
   npm install prompt-sync

4. Rune the game:
   ```bash
   node project.js

---

## 🎮How to Play

1. Enter a deposit amount (must be greater than 0).  
2. Choose the number of lines to bet on (1–3).  
3. Enter your bet per line (must be within your balance).  
4. The reels spin automatically.  
5. If all symbols in a row match, you win based on symbol values:  
   - A = 5x  
   - B = 4x  
   - C = 3x  
   - D = 2x  
6. Winnings are added to your balance.  
7. Continue playing until your balance is 0 or you choose to quit.  

---

## 🔮Future Improvements

- Add more rows/columns (customizable slot size)  
- Introduce diagonal wins  
- Add bonus rounds and jackpots  
- Create a GUI version using Electron or React  

---

## 🧑‍💻Author 

Built by sebs  
