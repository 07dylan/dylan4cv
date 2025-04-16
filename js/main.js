document.addEventListener('DOMContentLoaded', function() {
    // 隐藏加载动画
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('fade-out');
    }, 1500);
    
    // 导航切换
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.section');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有活动状态
            navTabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // 添加当前活动状态
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // 更新时间戳
    function updateTimestamp() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formattedDate = now.toLocaleString('zh-CN', options)
            .replace(/\//g, '-');
        document.getElementById('current-time').textContent = formattedDate;
    }
    
    updateTimestamp();
    setInterval(updateTimestamp, 1000);
    
    // 添加卡片悬停效果
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // 鼠标在卡片内的X位置
            const y = e.clientY - rect.top;  // 鼠标在卡片内的Y位置
            
            // 计算旋转角度
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 30 * -1;
            const rotateY = (x - centerX) / 30;
            
            // 应用变换
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // 重置变换
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}); 