// ===== GLOBAL DATA =====
// Course Data for Jan-Apr 2026
const coursesData = [
    {
        id: 1,
        code: "BIT301",
        name: "Internet of Things",
        credits: 3,
        department: "Software Engineering",
        semester: "Jan-Apr 2026",
        schedule: "Monday 9:00-11:00 AM, Wednesday 9:00-11:00 AM",
        instructor: "Dr. Ahmad Farid",
        seats: 40,
        seatsAvailable: 15,
        prerequisite: "BIT201, BIT205",
        prerequisiteName: "Data Structures, Computer Networks",
        status: "available",
        specialization: "Software Engineering"
    },
    {
        id: 2,
        code: "BIT302",
        name: "Information Management",
        credits: 3,
        department: "Software Engineering",
        semester: "Jan-Apr 2026",
        schedule: "Tuesday 10:00-12:00 PM, Thursday 10:00-11:00 AM",
        instructor: "Prof. Sarah Lim",
        seats: 35,
        seatsAvailable: 8,
        prerequisite: "BIT202",
        prerequisiteName: "Database Systems",
        status: "warning",
        specialization: "Software Engineering"
    },
    {
        id: 3,
        code: "BIT303",
        name: "Software Testing",
        credits: 3,
        department: "Software Engineering",
        semester: "Jan-Apr 2026",
        schedule: "Wednesday 11:00-1:00 PM, Friday 11:00-12:00 PM",
        instructor: "Mr. Raj Kumar",
        seats: 45,
        seatsAvailable: 25,
        prerequisite: "BIT204",
        prerequisiteName: "Software Engineering",
        status: "available",
        specialization: "Software Engineering"
    },
    {
        id: 4,
        code: "BIT304",
        name: "Final Year Project 1",
        credits: 4,
        department: "Software Engineering",
        semester: "Jan-Apr 2026",
        schedule: "Monday 12:00-2:00 PM, Thursday 1:00-3:00 PM",
        instructor: "Dr. Chen Wei",
        seats: 30,
        seatsAvailable: 5,
        prerequisite: "Completed 90 credits",
        prerequisiteName: "Completion of Year 3",
        status: "warning",
        specialization: "Software Engineering"
    },
    {
        id: 5,
        code: "MPU2201",
        name: "Falsafah dan Isu Semasa",
        credits: 2,
        department: "General Studies",
        semester: "Jan-Apr 2026",
        schedule: "Tuesday 12:00-1:00 PM",
        instructor: "Cikgu Aminah",
        seats: 50,
        seatsAvailable: 30,
        prerequisite: "None",
        prerequisiteName: "No prerequisites",
        status: "available",
        specialization: "General"
    }
];

// Credit Transfer Data - 44 credits
const transferData = [
    {
        previousSubject: "Introduction to Programming",
        previousCode: "DIP101",
        segiEquivalent: "Programming Fundamentals",
        segiCode: "BIT101",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Database Management",
        previousCode: "DIP102",
        segiEquivalent: "Introduction to Databases",
        segiCode: "BIT102",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Web Technologies",
        previousCode: "DIP103",
        segiEquivalent: "Introduction to Web Technologies",
        segiCode: "BIT103",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Software Development",
        previousCode: "DIP104",
        segiEquivalent: "Software Development Fundamentals",
        segiCode: "BIT104",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Network Basics",
        previousCode: "DIP105",
        segiEquivalent: "Network Fundamentals",
        segiCode: "BIT105",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Computer Architecture",
        previousCode: "DIP106",
        segiEquivalent: "Computer Organization",
        segiCode: "BIT106",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Discrete Mathematics",
        previousCode: "DIP201",
        segiEquivalent: "Discrete Structures",
        segiCode: "MATH201",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Operating Systems",
        previousCode: "DIP202",
        segiEquivalent: "Operating Systems Concepts",
        segiCode: "BIT107",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Data Structures",
        previousCode: "DIP203",
        segiEquivalent: "Data Structures & Algorithms",
        segiCode: "BIT201",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Database Systems",
        previousCode: "DIP204",
        segiEquivalent: "Database Systems",
        segiCode: "BIT202",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Object-Oriented Programming",
        previousCode: "DIP205",
        segiEquivalent: "Object-Oriented Programming",
        segiCode: "BIT108",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "System Analysis & Design",
        previousCode: "DIP206",
        segiEquivalent: "System Analysis & Design",
        segiCode: "BIT109",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "Computer Ethics",
        previousCode: "DIP207",
        segiEquivalent: "IT Professional Ethics",
        segiCode: "BIT110",
        credits: 2,
        status: "transferred"
    },
    {
        previousSubject: "Project Management",
        previousCode: "DIP208",
        segiEquivalent: "IT Project Management",
        segiCode: "BIT111",
        credits: 3,
        status: "transferred"
    },
    {
        previousSubject: "English for IT",
        previousCode: "DIP209",
        segiEquivalent: "Technical Communication",
        segiCode: "MPU2201",
        credits: 2,
        status: "transferred"
    }
];

// AI Assistant Knowledge Base
const aiKnowledgeBase = {
    "credits per semester": "Students can register between 12 to 18 credits per semester. The minimum is 12 credits to maintain full-time status, and maximum is 18 credits without special approval.",
    "maximum credit limit": "The maximum credit limit per semester is 18 credits. For special cases requiring more than 18 credits, students need approval from the faculty dean.",
    "graduation progress": "You have completed 96 out of 120 credits (80% progress). You have 24 credits remaining: 15 credits in Jan-Apr 2026 and 9 credits in May-Aug 2026.",
    "exam schedule": "The exam schedule for Jan-Apr 2026 semester will be released in March 2026. Typically, exams are held in the last two weeks of April.",
    "course registration": "Course registration for Jan-Apr 2026 is now open. You need to register for 5 courses totaling 15 credits to complete your specialization requirements.",
    "credit transfer": "As a DY2 student, you have transferred 44 credits from your previous diploma. This represents 37% of the total 120 credits required for graduation.",
    "timetable": "Your timetable for Jan-Apr 2026 shows 15 contact hours per week across 5 courses. You can view the detailed schedule in the Timetable section.",
    "software engineering specialization": "Your Software Engineering specialization requires completion of 36 specialized credits. You have completed 30 credits and have 6 credits remaining.",
    "final year project": "Final Year Project 1 (4 credits) is scheduled for Jan-Apr 2026. Final Year Project 2 (3 credits) will be in May-Aug 2026 along with Industrial Attachment (6 credits).",
    "industrial attachment": "Industrial Attachment (6 credits) is scheduled for May-Aug 2026. This is a mandatory industry training component for all final year students.",
    "cgpa requirements": "To graduate with honors, you need a minimum CGPA of 3.00. Your current CGPA is 3.40, which is in the excellent range.",
    "graduation date": "Based on your current progress, you are expected to graduate in August 2026 after completing Final Year Project 2 and Industrial Attachment.",
    "ai assistant": "I am your SEGi AI Assistant. I can help you with course registration, credit transfers, timetable queries, exam information, and academic planning.",
    "help": "I can help you with: course registration, credit transfer information, timetable queries, exam schedules, graduation progress, and academic planning. Just ask me anything!"
};

// Selected courses array
let selectedCourses = [];

// ===== AI CHATBOT FUNCTIONS =====
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    chatbotContainer.classList.toggle('active');
}

function askAI(question) {
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `
        <div class="avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="message-content">${question}</div>
    `;
    chatbotMessages.appendChild(userMessage);
    
    // Clear input
    chatbotInput.value = '';
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Simulate AI thinking
    setTimeout(() => {
        // Find best match in knowledge base
        let answer = "I'm not sure about that. Please contact your faculty advisor for specific questions.";
        const lowerQuestion = question.toLowerCase();
        
        for (const [key, value] of Object.entries(aiKnowledgeBase)) {
            if (lowerQuestion.includes(key)) {
                answer = value;
                break;
            }
        }
        
        // Add AI response
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.innerHTML = `
            <div class="avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">${answer}</div>
        `;
        chatbotMessages.appendChild(botMessage);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 1000);
}

// ===== PAGE MANAGEMENT =====
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.querySelector(`.${pageId}-page`).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the corresponding nav link
    const navLink = Array.from(document.querySelectorAll('.nav-link')).find(link => {
        return link.textContent.includes(pageId.charAt(0).toUpperCase() + pageId.slice(1)) || 
               (pageId === 'home' && link.textContent.includes('Home'));
    });
    
    if (navLink) {
        navLink.classList.add('active');
    }
    
    // Load specific page data
    if (pageId === 'registration') {
        loadCourses();
        updateSelectedCourses();
    } else if (pageId === 'dy2') {
        loadTransferTable();
    }
    
    // Close mobile menu if open
    document.getElementById('navMenu').classList.remove('active');
    
    return false;
}

// ===== COURSE REGISTRATION =====
function loadCourses() {
    const coursesList = document.getElementById('coursesList');
    coursesList.innerHTML = '';
    
    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        let statusClass = 'status-available';
        let statusText = 'Available';
        
        if (course.seatsAvailable === 0) {
            statusClass = 'status-full';
            statusText = 'Full';
        } else if (course.seatsAvailable <= 5) {
            statusClass = 'status-warning';
            statusText = 'Low Seats';
        }
        
        const isSelected = selectedCourses.some(c => c.id === course.id);
        const isDisabled = course.seatsAvailable === 0 || isSelected;
        
        courseCard.innerHTML = `
            <div class="course-header">
                <div class="course-title">
                    <h4>${course.name}</h4>
                    <div class="course-code">${course.code} • ${course.credits} Credits</div>
                    <div style="font-size: 0.875rem; color: var(--info); margin-top: 0.25rem;">
                        <i class="fas fa-code"></i> ${course.specialization}
                    </div>
                </div>
                <div class="course-status ${statusClass}">${statusText}</div>
            </div>
            
            <div class="course-details">
                <div class="course-detail">
                    <div class="detail-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--dark-gray);">Schedule</div>
                        <div style="font-weight: 500;">${course.schedule}</div>
                    </div>
                </div>
                
                <div class="course-detail">
                    <div class="detail-icon">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--dark-gray);">Instructor</div>
                        <div style="font-weight: 500;">${course.instructor}</div>
                    </div>
                </div>
                
                <div class="course-detail">
                    <div class="detail-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--dark-gray);">Semester</div>
                        <div style="font-weight: 500;">${course.semester}</div>
                    </div>
                </div>
                
                <div class="course-detail">
                    <div class="detail-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--dark-gray);">Seats</div>
                        <div style="font-weight: 500;">${course.seatsAvailable}/${course.seats}</div>
                    </div>
                </div>
            </div>
            
            <div class="course-footer">
                <div class="prerequisite">
                    <strong>Prerequisite:</strong> ${course.prerequisiteName} (${course.prerequisite})
                </div>
                <button class="btn-select" onclick="selectCourse(${course.id})" ${isDisabled ? 'disabled' : ''}>
                    ${isSelected ? 'Selected' : 'Select'}
                </button>
            </div>
        `;
        
        coursesList.appendChild(courseCard);
    });
}

function selectCourse(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (course && !selectedCourses.some(c => c.id === courseId)) {
        selectedCourses.push(course);
        updateSelectedCourses();
        loadCourses(); // Refresh course list to update button states
    }
}

function removeCourse(courseId) {
    selectedCourses = selectedCourses.filter(c => c.id !== courseId);
    updateSelectedCourses();
    loadCourses(); // Refresh course list to update button states
}

function updateSelectedCourses() {
    const selectedList = document.getElementById('selectedCoursesList');
    const selectedCount = document.getElementById('selectedCount');
    const totalCourses = document.getElementById('totalCourses');
    const totalCredits = document.getElementById('totalCredits');
    
    // Update counts
    selectedCount.textContent = `(${selectedCourses.length})`;
    totalCourses.textContent = selectedCourses.length;
    
    // Calculate total credits
    const credits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = credits;
    
    // Update selected courses list
    if (selectedCourses.length === 0) {
        selectedList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--dark-gray);">
                <i class="fas fa-clipboard-list" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <p>No courses selected yet. Browse available courses above.</p>
            </div>
        `;
    } else {
        selectedList.innerHTML = '';
        selectedCourses.forEach(course => {
            const item = document.createElement('div');
            item.className = 'selected-item';
            item.innerHTML = `
                <div class="selected-info">
                    <h5>${course.name}</h5>
                    <p>${course.code} • ${course.credits} Credits • ${course.instructor}</p>
                </div>
                <button class="btn-remove" onclick="removeCourse(${course.id})">
                    <i class="fas fa-times"></i>
                </button>
            `;
            selectedList.appendChild(item);
        });
    }
    
    // Update register button
    const registerBtn = document.getElementById('registerBtn');
    if (selectedCourses.length === 0) {
        registerBtn.disabled = true;
        registerBtn.style.opacity = '0.6';
        registerBtn.style.cursor = 'not-allowed';
        registerBtn.onclick = null;
    } else {
        registerBtn.disabled = false;
        registerBtn.style.opacity = '1';
        registerBtn.style.cursor = 'pointer';
        registerBtn.onclick = () => {
            const credits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
            showNotification(`Successfully registered for ${selectedCourses.length} courses with total ${credits} credits for Jan-Apr 2026 semester!`, 'success');
            
            // Update course history
            const registeredCourses = document.getElementById('registeredCourses');
            registeredCourses.innerHTML = '';
            selectedCourses.forEach(course => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerHTML = `
                    <div class="history-info">
                        <h5>${course.name}</h5>
                        <p>${course.code} • ${course.credits} Credits • ${course.instructor}</p>
                    </div>
                    <span class="history-grade" style="background: rgba(23, 162, 184, 0.1); color: var(--info); border: 1px solid rgba(23, 162, 184, 0.2);">
                        Registered
                    </span>
                `;
                registeredCourses.appendChild(historyItem);
            });
            
            // Clear selected courses
            selectedCourses = [];
            updateSelectedCourses();
            loadCourses();
        };
    }
}

// ===== COURSE HISTORY TABS =====
function showHistoryTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.history-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide content
    document.getElementById('registeredCourses').style.display = tab === 'registered' ? 'grid' : 'none';
    document.getElementById('completedCourses').style.display = tab === 'completed' ? 'grid' : 'none';
}

// ===== DY2 CREDIT TRANSFER =====
function loadTransferTable() {
    const table = document.getElementById('transferTable');
    table.innerHTML = '';
    
    transferData.forEach(item => {
        const row = document.createElement('tr');
        
        let statusClass = 'status-transfer';
        let statusText = 'Transferred';
        
        row.innerHTML = `
            <td>${item.previousSubject}</td>
            <td>${item.previousCode}</td>
            <td>${item.segiEquivalent}</td>
            <td>${item.segiCode}</td>
            <td>${item.credits}</td>
            <td class="${statusClass}">${statusText}</td>
        `;
        
        table.appendChild(row);
    });
}

// ===== STUDENT COMPARISON TABS =====
function showComparisonTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.comparison-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide content
    document.getElementById('dy2StudentDetails').style.display = tab === 'dy2' ? 'block' : 'none';
    document.getElementById('regularStudentDetails').style.display = tab === 'regular' ? 'block' : 'none';
    document.getElementById('regularProgress').style.display = tab === 'regular' ? 'block' : 'none';
}

// ===== MOBILE NAVIGATION =====
document.getElementById('mobileToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

function toggleUserMenu() {
    // For demo purposes, just show an alert
    showNotification('User menu would open here. Options: Profile, Settings, Logout', 'info');
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--info)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 2000;
        animation: slideInRight 0.3s ease-out;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Load initial data
    loadCourses();
    loadTransferTable();
    
    // Set up navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.textContent.trim().toLowerCase().replace(' ', '');
            showPage(page);
        });
    });
    
    // Set up quick action buttons
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.textContent.trim().toLowerCase().replace(' ', '');
            if (page === 'aiassistant') {
                toggleChatbot();
            } else {
                showPage(page);
            }
        });
    });
    
    // Set up admin menu items
    document.querySelectorAll('.admin-menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.admin-menu-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // In a real application, this would load different admin sections
            if (this.textContent.includes('Login')) {
                document.querySelector('.admin-content h3').textContent = 'Admin Login / Sign Up';
            }
        });
    });
    
    // Set up search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredCourses = coursesData.filter(course => 
                course.name.toLowerCase().includes(searchTerm) || 
                course.code.toLowerCase().includes(searchTerm)
            );
            
            // In a real application, this would filter the course list
            console.log('Searching for:', searchTerm);
        });
    }
    
    // Set up history tabs
    document.querySelectorAll('.history-tab').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.textContent.toLowerCase().includes('current') ? 'registered' : 'completed';
            showHistoryTab(tabId);
        });
    });
    
    // Set up comparison tabs
    document.querySelectorAll('.comparison-tab').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.textContent.toLowerCase().includes('dy2') ? 'dy2' : 'regular';
            showComparisonTab(tabId);
        });
    });
    
    // Set up AI chatbot
    document.getElementById('chatbotToggle').addEventListener('click', toggleChatbot);
    document.getElementById('chatbotClose').addEventListener('click', toggleChatbot);
    document.getElementById('chatbotSend').addEventListener('click', function() {
        const input = document.getElementById('chatbotInput');
        if (input.value.trim()) {
            askAI(input.value.trim());
        }
    });
    document.getElementById('chatbotInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const input = document.getElementById('chatbotInput');
            if (input.value.trim()) {
                askAI(input.value.trim());
            }
        }
    });
    
    // Set up quick question buttons in chatbot
    document.querySelectorAll('.quick-question').forEach(button => {
        button.addEventListener('click', function() {
            const question = this.textContent.trim();
            askAI(question);
        });
    });
});