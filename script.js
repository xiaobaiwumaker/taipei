// 函數：實時更新時間 (科技感時鐘)
function updateTechTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        // 格式化為：YYYY.MM.DD HH:MM:SS (模擬數位儀表板時間)
        // 使用 toLocaleString 以確保在地化格式
        const dateString = now.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.');
        const timeString = now.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        timeElement.textContent = `系統時間：${dateString} ${timeString}`;
    }
}

// 函數：根據卡片數據設定狀態顏色
function setCardStatusColors() {
    const cards = document.querySelectorAll('.instrument-card');
    cards.forEach(card => {
        const status = card.getAttribute('data-status');
        const statusSpan = card.querySelector('.status-indicator span');

        if (statusSpan) {
            let colorVar;
            // 根據狀態設定顏色變數
            if (status === '正常') {
                colorVar = 'var(--status-normal)';
            } else if (status === '警告') {
                colorVar = 'var(--status-warning)';
            } else if (status === '異常') {
                colorVar = 'var(--status-error)';
            } else {
                colorVar = 'var(--tech-main)'; // 其他狀態使用主色
            }

            // 應用顏色和霓虹效果
            statusSpan.style.color = colorVar;
            statusSpan.style.textShadow = `0 0 10px ${colorVar}`;
            
            // 讓警告和異常狀態的卡片有更強烈的邊框提示
            if (status === '警告' || status === '異常') {
                 card.style.boxShadow = `0 0 20px ${colorVar}, inset 0 0 10px rgba(0, 0, 0, 0.5)`;
                 card.style.border = `1px solid ${colorVar}`;
            }
        }
    });
}

// 初始化執行
document.addEventListener('DOMContentLoaded', () => {
    // 設置初始狀態顏色
    setCardStatusColors();
    
    // 實時更新時間
    updateTechTime();
    // 每秒更新一次
    setInterval(updateTechTime, 1000);
});
