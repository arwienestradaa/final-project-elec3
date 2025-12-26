# 🌟 Web Development Projects Collection

A collection of 4 interactive web applications built with vanilla JavaScript, HTML5, and CSS3. This repository showcases fundamental web development skills including API integration, DOM manipulation, responsive design, and modern UI/UX principles.

---

## 📂 Project Structure

```
final-project-elec3/
│
├── calcu/              # Calculator Application
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── stopwatch/          # Stopwatch Timer
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── weather-app/        # Weather Forecast App
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── xeno-canto/         # Currency Converter
    ├── index.html
    ├── script.js
    ├── style.css
    └── README.md
```

---

## 🚀 Projects Overview

### 1. 🧮 Calculator Application
**Location:** `calcu/`

A fully functional calculator with a modern gradient UI supporting basic arithmetic operations.

**Features:**
- Basic operations: Addition, Subtraction, Multiplication, Division
- Percentage calculations
- Clear and Delete functions
- Responsive button grid layout
- Purple gradient theme with hover effects

**Technologies:**
- HTML5, CSS3 (Grid Layout), Vanilla JavaScript
- No external libraries

**How to Run:**
1. Navigate to the `calcu/` folder
2. Open `index.html` in your browser
3. Start calculating!

---

### 2. ⏱️ Stopwatch Timer
**Location:** `stopwatch/`

A precision stopwatch with millisecond accuracy featuring a clean, modern interface.

**Features:**
- Start/Pause/Reset functionality
- Millisecond precision display (00:00:00.00)
- Reset button disabled while timer is running (safety feature)
- Emoji-enhanced buttons (▶️ ⏸️ ↻)
- Color-coded controls (Green start, Orange pause, Red reset)
- Gradient card design

**Technologies:**
- HTML5, CSS3 (Animations), Vanilla JavaScript
- setInterval API for precise timing

**How to Run:**
1. Navigate to the `stopwatch/` folder
2. Open `index.html` in your browser
3. Click Start to begin timing

---

### 3. 🌤️ Weather Forecast Application
**Location:** `weather-app/`

A comprehensive weather application providing current weather conditions and 5-day forecasts with theme customization.

**Features:**
- **Current Weather Display** - Temperature, conditions, feels like, humidity, wind speed, pressure
- **5-Day Forecast** - Daily weather predictions with icons
- **Light/Dark Mode Toggle** - Persistent theme preference
- **City Search** - Find weather for any city worldwide
- **Weather Icons** - Visual representation from OpenWeatherMap
- **Responsive Design** - Works on all devices

**API Used:**
- **OpenWeatherMap API**
- **Base URL:** `https://api.openweathermap.org/data/2.5/`
- **Endpoints:**
  - `/weather` - Current weather data
  - `/forecast` - 5-day forecast data
- **Authentication:** API Key required

**Setup:**
1. Get a free API key from https://openweathermap.org/api
2. Open `script.js` and replace the API key on line 1:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Open `index.html` in your browser

**Technologies:**
- HTML5, CSS3 Variables, Vanilla JavaScript
- Fetch API for HTTP requests
- LocalStorage for theme persistence

---

### 4. 💱 Currency Converter
**Location:** `exchange-rate-api/`

A professional currency conversion tool with real-time exchange rates, comparison features, and trend visualization.

**Features:**
- **Real-time Currency Conversion** - Convert between 30+ currencies
- **Exchange Rate Comparison** - View multiple rates simultaneously
- **30-Day Trends** - Interactive Chart.js visualization
- **Light/Dark Mode** - Theme toggle with localStorage
- **Currency Swap** - Quick reverse conversion
- **Responsive Grid Layout** - Optimized for all screens

**Supported Currencies (30+):**
USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, MXN, PHP, SGD, HKD, KRW, THB, MYR, IDR, VND, BRL, ARS, RUB, ZAR, TRY, SAR, AED, NZD, SEK, NOK, DKK, PLN

**API Used:**
- **ExchangeRate-API**
- **Base URL:** `https://v6.exchangerate-api.com/v6/`
- **Endpoint:** `/latest/{base_currency}`
- **Authentication:** API Key required
- **Documentation:** https://www.exchangerate-api.com/docs

**Setup:**
1. Sign up for a free API key at https://www.exchangerate-api.com/
2. Open `script.js` and replace the API key on line 2:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Open `index.html` in your browser

**Technologies:**
- HTML5, CSS3 Variables, Vanilla JavaScript
- Chart.js for data visualization
- Fetch API for currency data
- LocalStorage for theme persistence

**Detailed Documentation:**
See `exchange-rate-api/README.md` for comprehensive documentation.

---

## 🛠️ Technologies Used Across All Projects

### **Frontend**
- HTML5 - Semantic markup
- CSS3 - Grid, Flexbox, Variables, Gradients, Animations
- JavaScript (ES6+) - Async/await, Fetch API, DOM manipulation

### **APIs**
- OpenWeatherMap API (Weather App)
- ExchangeRate-API (Currency Converter)

### **Libraries**
- Chart.js (Currency Converter - Trends visualization)

### **Browser APIs**
- LocalStorage (Theme persistence)
- Fetch API (HTTP requests)

---

## 📋 Common Features

✅ **Responsive Design** - All projects work on desktop, tablet, and mobile  
✅ **Modern UI** - Gradient backgrounds, smooth animations, hover effects  
✅ **No Frameworks** - Pure vanilla JavaScript (except Chart.js for one feature)  
✅ **Clean Code** - Well-organized, commented, and maintainable  
✅ **Error Handling** - Graceful error messages for API failures  
✅ **Cross-Browser Compatible** - Works on Chrome, Firefox, Safari, Edge

---

## 🚀 Quick Start Guide

### **Prerequisites:**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code, Sublime, etc.) - optional
- Internet connection (for API-based projects)

### **Running Any Project:**
1. Clone or download this repository
   ```bash
   git clone https://github.com/arwien-estrada/final-project-elec3.git
   cd final-project-elec3
   ```

2. Navigate to the project folder:
   ```bash
   cd calcu/        # or stopwatch/ or weather-app/ or exchange-rate-api/
   ```

3. Open `index.html` in your browser:
   - Double-click the file, OR
   - Right-click → Open With → Browser, OR
   - Use a local server (optional)

4. For API-based projects (Weather App, Currency Converter):
   - Get API keys (see individual project instructions above)
   - Configure API keys in respective `script.js` files
   - Reload the page

**No build tools, no npm install, no server required!** 🎉

---

## 👨‍💻 Developer Information

### **Solo Developer**

**Name:** [Arwien R. Estrada]  
**Role:** Web Developer

### **Project Responsibilities:**

#### **Calculator & Stopwatch**
- Implemented mathematical operations and timing logic
- Created interactive UI with state management
- Designed responsive layouts with gradient themes

#### **Weather Application**
- Integrated OpenWeatherMap API for weather data
- Built current weather and 5-day forecast features
- Implemented light/dark mode with theme persistence
- Designed responsive card-based layout

#### **Currency Converter**
- Integrated ExchangeRate-API for real-time rates
- Developed conversion, comparison, and trend features
- Implemented Chart.js for data visualization
- Created theme toggle system with localStorage

#### **Overall Project Management**
- Version control using Git
- Code organization and documentation
- Responsive design implementation
- Cross-browser testing and debugging

---

## 🎯 Learning Outcomes

This project collection demonstrates proficiency in:

✅ **Core Web Technologies** - HTML5, CSS3, JavaScript ES6+  
✅ **API Integration** - RESTful APIs, Fetch, Error handling  
✅ **Responsive Design** - Mobile-first approach, CSS Grid/Flexbox  
✅ **UI/UX Design** - Modern interfaces, animations, accessibility  
✅ **State Management** - LocalStorage, theme persistence  
✅ **Data Visualization** - Chart.js integration  
✅ **Code Organization** - Clean, maintainable, documented code  
✅ **Problem Solving** - Logic implementation, debugging

---

## 🔮 Future Enhancements

### Calculator
- Scientific calculator mode
- Calculation history
- Keyboard support

### Stopwatch
- Lap time recording
- Export times to CSV
- Multiple timers

### Weather App
- Hourly forecast
- Weather alerts
- Geolocation support
- Multiple locations

### Currency Converter
- Cryptocurrency support
- Historical data (with premium API)
- Conversion history
- Favorite currency pairs
- Offline mode

---

## 🐛 Known Issues & Limitations

### Weather App
- API key must be replaced with your own
- Free API tier has rate limits

### Currency Converter
- Historical data simulated (free API doesn't support historical endpoints)
- Trends show simulated fluctuations based on current rates

---

## 📄 License

This project is open-source and available for educational purposes.

---

## 🙏 Acknowledgments

- **OpenWeatherMap** for weather data API
- **ExchangeRate-API** for currency data
- **Chart.js** for visualization library
- **VS Code & GitHub Copilot** for development assistance

---

## 📞 Contact

For questions or feedback about these projects:

**Developer:** [Arwien R. Estrada]  
**Email:** [arwien358@gmail.com]  

---

**© 2025 Web Development Projects Collection. All rights reserved.**
