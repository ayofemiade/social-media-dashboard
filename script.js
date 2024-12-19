document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebarItems = document.querySelectorAll('.sidebar li[data-section]');
    const sections = document.querySelectorAll('main > section');

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            sections.forEach(section => {
                section.classList.remove('active-section');
                section.classList.add('hidden-section');
            });
            document.getElementById(sectionId).classList.remove('hidden-section');
            document.getElementById(sectionId).classList.add('active-section');

            sidebarItems.forEach(si => si.classList.remove('active'));
            this.classList.add('active');

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Simulated activity feed data
    const activities = [
        'John liked your post',
        'Sarah commented on your photo',
        'You have a new follower',
        'Your post was shared 5 times'
    ];

    const activityList = document.getElementById('activity-list');
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activityList.appendChild(li);
    });

    // Simulated post creation
    const postBtn = document.querySelector('.post-btn');
    const postTextarea = document.querySelector('.post-creator textarea');

    postBtn.addEventListener('click', function() {
        const postContent = postTextarea.value.trim();
        if (postContent) {
            alert('Post created: ' + postContent);
            postTextarea.value = '';
        } else {
            alert('Please enter some content for your post.');
        }
    });

    // Simulated friends list
    const friends = [
        { name: 'Alice Johnson', avatar: 'https://via.placeholder.com/40' },
        { name: 'Bob Smith', avatar: 'https://via.placeholder.com/40' },
        { name: 'Charlie Brown', avatar: 'https://via.placeholder.com/40' },
        { name: 'Diana Ross', avatar: 'https://via.placeholder.com/40' }
    ];

    const friendList = document.querySelector('.friend-list');
    friends.forEach(friend => {
        const friendElement = document.createElement('div');
        friendElement.classList.add('friend-item');
        friendElement.innerHTML = `
            <img src="${friend.avatar}" alt="${friend.name}">
            <span>${friend.name}</span>
            <button>Message</button>
        `;
        friendList.appendChild(friendElement);
    });

    // Settings form handling
    const settingsForm = document.getElementById('settings-form');
    settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(settingsForm);
        const settings = Object.fromEntries(formData);
        console.log('Settings saved:', settings);
        alert('Settings saved successfully!');
    });


    
});
