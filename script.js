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

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

function adjustSidebar() {
    if (window.innerWidth <= 576) {
        sidebar.classList.add('hide');
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.remove('hide');
        sidebar.classList.add('show');
    }
}

window.addEventListener('load', adjustSidebar);
window.addEventListener('resize', adjustSidebar);

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
});

// Dark Mode Switch
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

// Task Management
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
const todoList = document.querySelector('.todo-list');
const taskInput = document.querySelector('#newTaskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');

function renderTasks() {
    if (!todoList) return;
    
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : 'not-completed';
        li.innerHTML = `
            <div class="task-content">
                <input type="checkbox" ${task.completed ? 'checked' : ''} 
                       onchange="toggleTask(${index})">
                <p>${task.text}</p>
            </div>
            <div class="task-actions">
                <span class="task-date">${task.date}</span>
                <i class="bx bx-dots-vertical-rounded" onclick="deleteTask(${index})"></i>
            </div>
        `;
        todoList.appendChild(li);
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(text) {
    if (!text.trim()) return;
    tasks.unshift({
        text: text,
        completed: false,
        date: new Date().toLocaleDateString()
    });
    renderTasks();
    addNotification('New task added', 'info');
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    addNotification(`Task ${tasks[index].completed ? 'completed' : 'uncompleted'}`, 'success');
}

function deleteTask(index) {
    const taskText = tasks[index].text;
    tasks.splice(index, 1);
    renderTasks();
    addNotification(`Task "${taskText}" deleted`, 'error');
}

if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text) {
            addTask(text);
            taskInput.value = '';
        }
    });
}

// Notification System
let notificationCount = 0;
const notificationList = document.querySelector('.notification-menu ul');
const notificationBadge = document.querySelector('.notification .num');

function addNotification(message, type = 'info') {
    const li = document.createElement('li');
    li.className = `notification-item ${type}`;
    li.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <span class="notification-time">${new Date().toLocaleTimeString()}</span>
        </div>
    `;

    notificationList.insertBefore(li, notificationList.firstChild);
    notificationCount++;
    notificationBadge.textContent = notificationCount;

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

    window.onValue(employeesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (window.previousEmployeeData) {
                const newIds = Object.keys(data);
                const oldIds = Object.keys(window.previousEmployeeData);

                newIds.forEach(id => {
                    if (!oldIds.includes(id)) {
                        addNotification(`New employee added: ${data[id].name}`, 'success');
                    }
                });

                oldIds.forEach(id => {
                    if (!newIds.includes(id)) {
                        addNotification(`Employee removed: ${window.previousEmployeeData[id].name}`, 'error');
                    }
                });
            }
            window.previousEmployeeData = data;
        }
    });

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

// Menu Toggles
document.querySelector('.notification').addEventListener('click', function () {
    document.querySelector('.notification-menu').classList.toggle('show');
    document.querySelector('.profile-menu').classList.remove('show');
});

document.querySelector('.profile').addEventListener('click', function () {
    document.querySelector('.profile-menu').classList.toggle('show');
    document.querySelector('.notification-menu').classList.remove('show');
});

window.addEventListener('click', function (e) {
    if (!e.target.closest('.notification') && !e.target.closest('.profile')) {
        document.querySelector('.notification-menu').classList.remove('show');
        document.querySelector('.profile-menu').classList.remove('show');
    }
});

// Initialize tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    
    // Check user permissions
    const user = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
    if (user.role === 'GUEST') {
        // Disable editing features for guests
        const editButtons = document.querySelectorAll('.edit-btn, .delete-btn, #addTaskBtn');
        editButtons.forEach(btn => {
            btn.style.display = 'none';
        });
    }
});