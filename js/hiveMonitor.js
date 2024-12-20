class HiveMonitor {
    simulateInternalReadings() {
        const internalTemp = 35 + (Math.random() * 2 - 1);
        const internalHumidity = 60 + (Math.random() * 10 - 5);

        document.getElementById('internal-temp').textContent = internalTemp.toFixed(1);
        document.getElementById('internal-humidity').textContent = `${internalHumidity.toFixed(1)}%`;

        this.updateTemperatureStatus(internalTemp);
    }

    updateTemperatureStatus(temp) {
        const internalStatus = document.getElementById('internal-status');
        if (temp < CONFIG.TEMPERATURE.MIN) {
            internalStatus.className = 'status warning';
            internalStatus.textContent = 'منخفضة';
        } else if (temp > CONFIG.TEMPERATURE.MAX) {
            internalStatus.className = 'status danger';
            internalStatus.textContent = 'مرتفعة';
        } else {
            internalStatus.className = 'status normal';
            internalStatus.textContent = 'مثالية';
        }
    }

    updateHiveStats() {
        const honeyProduction = ['ممتاز', 'جيد', 'متوسط'];
        const queenStatus = ['نشطة', 'قوية', 'تحتاج للمراقبة'];
        
        document.getElementById('honey-production').textContent = 
            honeyProduction[Math.floor(Math.random() * honeyProduction.length)];
        
        document.getElementById('queen-status').textContent = 
            queenStatus[Math.floor(Math.random() * queenStatus.length)];
    }
}