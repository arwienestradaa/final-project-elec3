// Exchange Rate API (exchangerate-api.com)
const API_KEY = '337c77396c16e1262aa0c1a8';
const API_BASE = 'https://v6.exchangerate-api.com/v6/' + API_KEY;

// ============ TAB SWITCHING ============
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + '-tab').classList.add('active');
    event.target.classList.add('active');
}

// ============ CURRENCY CONVERTER ============
async function convertCurrency() {
    const fromAmount = document.getElementById('fromAmount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (!fromAmount || fromAmount <= 0) {
        showConverterError('Please enter a valid amount');
        return;
    }
    
    showConverterLoading(true);
    clearConverterError();
    
    try {
        const url = `${API_BASE}/latest/${fromCurrency}`;
        console.log('Converting:', url);
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch exchange rate');
        
        const data = await response.json();
        console.log('Conversion data:', data);
        
        if (data.result !== 'success') {
            throw new Error('API Error: ' + (data['error-type'] || 'Unknown error'));
        }
        
        const exchangeRate = data.conversion_rates[toCurrency];
        if (!exchangeRate) {
            throw new Error('Currency not found');
        }
        
        const result = parseFloat(fromAmount) * exchangeRate;
        document.getElementById('toAmount').value = result.toFixed(2);
        
        const rate = exchangeRate.toFixed(4);
        document.getElementById('conversionRate').innerHTML = 
            `<strong>1 ${fromCurrency} = ${rate} ${toCurrency}</strong>`;
    } catch (error) {
        showConverterError(`Error: ${error.message}`);
        console.error('Conversion error:', error);
    } finally {
        showConverterLoading(false);
    }
}

function swapCurrencies() {
    const from = document.getElementById('fromCurrency');
    const to = document.getElementById('toCurrency');
    [from.value, to.value] = [to.value, from.value];
    
    // Clear result when swapping
    document.getElementById('toAmount').value = '';
    document.getElementById('conversionRate').innerHTML = '';
}

function showConverterLoading(show) {
    document.getElementById('converterLoading').style.display = show ? 'block' : 'none';
}

function showConverterError(message) {
    const error = document.getElementById('converterError');
    error.textContent = message;
    error.style.display = 'block';
}

function clearConverterError() {
    document.getElementById('converterError').style.display = 'none';
}

// ============ COMPARE RATES ============
async function fetchRates() {
    const baseCurrency = document.getElementById('baseCurrency').value;
    
    showCompareLoading(true);
    clearCompareError();
    document.getElementById('ratesGrid').innerHTML = '';
    
    try {
        const url = `${API_BASE}/latest/${baseCurrency}`;
        console.log('Fetching rates:', url);
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch rates');
        
        const data = await response.json();
        console.log('Rates data:', data);
        
        if (data.result !== 'success') {
            throw new Error('API Error: ' + (data['error-type'] || 'Unknown error'));
        }
        
        const rates = data.conversion_rates;
        if (!rates) throw new Error('No rates found in response');
        
        const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'MXN', 
                           'PHP', 'SGD', 'HKD', 'KRW', 'THB', 'MYR', 'IDR', 'VND', 'BRL', 'ARS', 
                           'RUB', 'ZAR', 'TRY', 'SAR', 'AED', 'NZD', 'SEK', 'NOK', 'DKK', 'PLN'];
        
        let html = '';
        currencies.forEach(currency => {
            if (currency !== baseCurrency && rates[currency]) {
                const rate = parseFloat(rates[currency]).toFixed(4);
                html += `
                    <div class="rate-card">
                        <div class="rate-pair">${baseCurrency} → ${currency}</div>
                        <div class="rate-value">${rate}</div>
                    </div>
                `;
            }
        });
        
        if (!html) {
            showCompareError('No rates available for the selected currency');
            return;
        }
        
        document.getElementById('ratesGrid').innerHTML = html;
    } catch (error) {
        showCompareError(`Error: ${error.message}`);
        console.error('Rates error:', error);
    } finally {
        showCompareLoading(false);
    }
}

function showCompareLoading(show) {
    document.getElementById('compareLoading').style.display = show ? 'block' : 'none';
}

function showCompareError(message) {
    const error = document.getElementById('compareError');
    error.textContent = message;
    error.style.display = 'block';
}

function clearCompareError() {
    document.getElementById('compareError').style.display = 'none';
}

// ============ CURRENCY TRENDS ============
let trendsChart = null;

async function fetchTrends() {
    const currency1 = document.getElementById('trendsCurrency1').value;
    const currency2 = document.getElementById('trendsCurrency2').value;
    
    if (currency1 === currency2) {
        showTrendsError('Please select different currencies');
        return;
    }
    
    showTrendsLoading(true);
    clearTrendsError();
    
    try {
        // Note: exchangerate-api.com free plan doesn't support historical data
        // This shows a simulated trend with current rates
        const url = `${API_BASE}/latest/${currency1}`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('Failed to fetch rates');
        
        const data = await response.json();
        if (data.result !== 'success') {
            throw new Error('API Error: ' + (data['error-type'] || 'Unknown error'));
        }
        
        const currentRate = data.conversion_rates[currency2];
        const dates = [];
        const rates = [];
        
        // Generate simulated 30-day trend (±2% variation around current rate)
        for (let i = 29; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            dates.push(dateStr);
            
            // Simulate realistic fluctuation
            const variation = (Math.random() - 0.5) * 0.04; // ±2% variation
            const simulatedRate = currentRate * (1 + variation);
            rates.push(simulatedRate.toFixed(4));
        }
        
        document.getElementById('trendsError').innerHTML = 
            '<strong>Note:</strong> Showing simulated trends. Historical data requires exchangerate-api.com paid plan.';
        document.getElementById('trendsError').style.display = 'block';
        
        console.log('Trends data:', { dates, rates });
        drawTrendsChart(dates, rates, currency1, currency2);
    } catch (error) {
        showTrendsError(`Error: ${error.message}`);
        console.error('Trends error:', error);
    } finally {
        showTrendsLoading(false);
    }
}

function drawTrendsChart(dates, rates, currency1, currency2) {
    const canvas = document.getElementById('trendsChart');
    
    // Destroy old chart if exists
    if (trendsChart) {
        trendsChart.destroy();
    }
    
    // Format dates for display (show every 5th date)
    const displayDates = dates.map((d, i) => i % 5 === 0 ? d : '');
    
    // Get theme for colors
    const theme = document.body.getAttribute('data-theme') || 'dark';
    const isDark = theme !== 'light';
    const textColor = isDark ? '#fff' : '#1a1f2e';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    
    trendsChart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: displayDates,
            datasets: [{
                label: `${currency1}/${currency2}`,
                data: rates,
                borderColor: '#00d9ff',
                backgroundColor: 'rgba(0, 217, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 3,
                pointBackgroundColor: '#00d9ff',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        font: { size: 14 }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: gridColor },
                    ticks: { color: textColor }
                },
                y: {
                    grid: { color: gridColor },
                    ticks: { color: textColor }
                }
            }
        }
    });
}

function showTrendsLoading(show) {
    document.getElementById('trendsLoading').style.display = show ? 'block' : 'none';
}

function showTrendsError(message) {
    const error = document.getElementById('trendsError');
    error.textContent = message;
    error.style.display = 'block';
}

function clearTrendsError() {
    document.getElementById('trendsError').style.display = 'none';
}

// ============ THEME TOGGLE ============
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update toggle button icon
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
    
    // Update chart colors if chart exists
    updateChartColors(newTheme);
}

function updateChartColors(theme) {
    if (trendsChart) {
        const isDark = theme !== 'light';
        const textColor = isDark ? '#fff' : '#1a1f2e';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        
        trendsChart.options.plugins.legend.labels.color = textColor;
        trendsChart.options.scales.x.grid.color = gridColor;
        trendsChart.options.scales.x.ticks.color = textColor;
        trendsChart.options.scales.y.grid.color = gridColor;
        trendsChart.options.scales.y.ticks.color = textColor;
        trendsChart.update();
    }
}

// ============ PAGE LOAD ============
window.addEventListener('DOMContentLoaded', () => {
    console.log('Currency Converter loaded');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    
    // Load initial rates for comparison
    document.getElementById('baseCurrency').value = 'USD';
});
