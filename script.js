const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

// Sidebar toggle işlemi
menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// Sayfa yüklendiğinde ve boyut değişimlerinde sidebar durumunu ayarlama
function adjustSidebar() {
    if (window.innerWidth <= 576) {
        sidebar.classList.add('hide');  // 576px ve altı için sidebar gizli
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.remove('hide');  // 576px'den büyükse sidebar görünür
        sidebar.classList.add('show');
    }
}

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde sidebar durumunu ayarlama
window.addEventListener('load', adjustSidebar);
window.addEventListener('resize', adjustSidebar);

// Arama butonunu toggle etme
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 768) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})

// Dark Mode Switch
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})

// Notification System
let notificationCount = 0;
const notificationList = document.querySelector('.notification-menu ul');
const notificationBadge = document.querySelector('.notification .num');

function addNotification(message, type = 'info') {
    // Create notification element
    const li = document.createElement('li');
    li.className = `notification-item ${type}`;
    li.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <span class="notification-time">${new Date().toLocaleTimeString()}</span>
        </div>
    `;

    // Add to notification list
    notificationList.insertBefore(li, notificationList.firstChild);

    // Update notification count
    notificationCount++;
    notificationBadge.textContent = notificationCount;

    // Auto remove after 5 seconds
    setTimeout(() => {
        li.classList.add('fade-out');
        setTimeout(() => {
            li.remove();
            notificationCount--;
            notificationBadge.textContent = notificationCount;
        }, 300);
    }, 5000);
}

// Firebase Realtime Notifications
if (window.firebaseDatabase) {
    const employeesRef = window.firebaseRef(window.firebaseDatabase, 'employees');
    const attendanceRef = window.firebaseRef(window.firebaseDatabase, 'attendance');

    // Listen for employee changes
    window.onValue(employeesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Compare with previous data to determine changes
            if (window.previousEmployeeData) {
                const newIds = Object.keys(data);
                const oldIds = Object.keys(window.previousEmployeeData);

                // Check for new employees
                newIds.forEach(id => {
                    if (!oldIds.includes(id)) {
                        addNotification(`New employee added: ${data[id].name}`, 'success');
                    }
                });

                // Check for deleted employees
                oldIds.forEach(id => {
                    if (!newIds.includes(id)) {
                        addNotification(`Employee removed: ${window.previousEmployeeData[id].name}`, 'error');
                    }
                });
            }
            window.previousEmployeeData = data;
        }
    });

    // Listen for attendance marks
    window.onValue(attendanceRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const entries = Object.entries(data);
            const latestEntry = entries[entries.length - 1];
            
            if (latestEntry && (!window.lastAttendanceId || window.lastAttendanceId !== latestEntry[0])) {
                window.lastAttendanceId = latestEntry[0];
                addNotification(`Attendance marked: ${latestEntry[1].name}`, 'info');
            }
        }
    });
}

// Notification Menu Toggle
document.querySelector('.notification').addEventListener('click', function () {
    document.querySelector('.notification-menu').classList.toggle('show');
    document.querySelector('.profile-menu').classList.remove('show'); // Close profile menu if open
});

// Profile Menu Toggle
document.querySelector('.profile').addEventListener('click', function () {
    document.querySelector('.profile-menu').classList.toggle('show');
    document.querySelector('.notification-menu').classList.remove('show'); // Close notification menu if open
});

// Close menus if clicked outside
window.addEventListener('click', function (e) {
    if (!e.target.closest('.notification') && !e.target.closest('.profile')) {
        document.querySelector('.notification-menu').classList.remove('show');
        document.querySelector('.profile-menu').classList.remove('show');
    }
});

// Menülerin açılıp kapanması için fonksiyon
function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    var allMenus = document.querySelectorAll('.menu');

    // Diğer tüm menüleri kapat
    allMenus.forEach(function(m) {
        if (m !== menu) {
            m.style.display = 'none';
        }
    });

    // Tıklanan menü varsa aç, yoksa kapat
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Başlangıçta tüm menüleri kapalı tut
document.addEventListener("DOMContentLoaded", function() {
    var allMenus = document.querySelectorAll('.menu');
    allMenus.forEach(function(menu) {
        menu.style.display = 'none';
    });
});