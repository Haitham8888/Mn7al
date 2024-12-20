// تهيئة الكلاسات
const hiveMonitor = new HiveMonitor();
const weatherService = new WeatherService();

// تشغيل التحديثات الدورية
setInterval(() => hiveMonitor.simulateInternalReadings(), CONFIG.UPDATE_INTERVALS.INTERNAL);
setInterval(() => weatherService.getExternalWeather(), CONFIG.UPDATE_INTERVALS.WEATHER);
setInterval(() => hiveMonitor.updateHiveStats(), CONFIG.UPDATE_INTERVALS.STATS);

// التحديث الأولي
hiveMonitor.simulateInternalReadings();
weatherService.getExternalWeather();
hiveMonitor.updateHiveStats();