document.addEventListener('DOMContentLoaded', function() {
    // Engagement Chart
    const engagementCtx = document.getElementById('engagementChart').getContext('2d');
    new Chart(engagementCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Engagement',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#4a90e2',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Follower Growth Chart
    const followerGrowthCtx = document.getElementById('followerGrowthChart').getContext('2d');
    new Chart(followerGrowthCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'New Followers',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: '#4a90e2'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Post Performance Chart
    const postPerformanceCtx = document.getElementById('postPerformanceChart').getContext('2d');
    new Chart(postPerformanceCtx, {
        type: 'radar',
        data: {
            labels: ['Likes', 'Comments', 'Shares', 'Saves', 'Reach'],
            datasets: [{
                label: 'Average Post Performance',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                borderColor: '#4a90e2',
                pointBackgroundColor: '#4a90e2'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 20
                }
            }
        }
    });
});
