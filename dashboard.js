// dashboard.js

function getDashboardStats(userRole) {
  if (userRole === 'admin') {
    return {
      users: 120,
      activeSessions: 35,
      systemHealth: 'Good',
    };
  } else if (userRole === 'user') {
    return {
      welcome: 'Welcome back!',
      recentActivity: ['Order #1245', 'Profile Update'],
    };
  } else {
    return { error: 'Unauthorized access' };
  }
}

// Export the function for testing
module.exports = getDashboardStats;
