// 🔹 Utility: show/hide elements
function showElement(el) {
  if (el) el.classList.remove("hidden");
}
function hideElement(el) {
  if (el) el.classList.add("hidden");
}

// 🔹 Utility: show notification
function showNotification(message, type = "error") {
  const notif = document.createElement("div");
  notif.className = `fixed top-4 right-4 px-4 py-2 rounded shadow-lg text-white transition-opacity duration-300 ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  }`;
  notif.innerText = message;
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.style.opacity = "0";
    setTimeout(() => notif.remove(), 300);
  }, 2500);
}

// ===============================
// Wait until DOM is ready
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const loginModal = document.getElementById("loginModal");
  const loginForm = document.getElementById("loginForm");
  const dashboardSection = document.getElementById("dashboardSection");
  const addUserModal = document.getElementById("addUserModal");
  const addUserForm = document.getElementById("addUserForm");
  const loginBtn = document.getElementById("loginBtn");
  const cancelLogin = document.getElementById("cancelLogin");
  const logoutBtn = document.getElementById("logoutBtn");
  const userWelcome = document.getElementById("userWelcome");
  const homeSection = document.getElementById("publicSection");

  // 🔹 Show login modal when login button clicked
  if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", () => {
      showElement(loginModal);
    });
  }

  // 🔹 Cancel login modal
  if (cancelLogin && loginModal) {
    cancelLogin.addEventListener("click", () => {
      hideElement(loginModal);
    });
  }

  // 🔹 LOGOUT HANDLER
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");

      // Clear any saved user data
      localStorage.removeItem("loggedInUser");

      // Clear input fields
      if (usernameInput) usernameInput.value = "";
      if (passwordInput) passwordInput.value = "";

      // Reset view to homepage
      showElement(homeSection);
      hideElement(dashboardSection);
      showElement(loginBtn);
      hideElement(logoutBtn);

      hideElement(userWelcome);
      showNotification("You have been logged out.", "success");
    });
  }

  // 🔹 LOGIN FORM HANDLER
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();

      // 🔹 ADMIN LOGIN
if (user === "admin" && pass === "password") {
  hideElement(loginModal);
  hideElement(homeSection);
  showElement(dashboardSection);
  showElement(logoutBtn);
  hideElement(loginBtn);

  dashboardSection.innerHTML = `
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-indigo-700 mb-4">Admin Dashboard</h2>
      <p class="text-gray-600">Manage users, orders, and reports.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
        <h3 class="text-xl font-semibold mb-2 text-indigo-600">Users</h3>
        <p class="text-gray-600">Manage registered users and their roles.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
        <h3 class="text-xl font-semibold mb-2 text-indigo-600">Orders</h3>
        <p class="text-gray-600">Track printing orders and their status.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
        <h3 class="text-xl font-semibold mb-2 text-indigo-600">Reports</h3>
        <p class="text-gray-600">Generate daily and monthly performance reports.</p>
      </div>
    </div>
    <div class="flex justify-center">
      <button id="openAddUser" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow">
        ➕ Add User
      </button>
    </div>
  `;

  showNotification("Welcome, Admin!", "success");
}


      // 🔹 USER LOGIN
else if (user === "user" && pass === "123456") {
  hideElement(loginModal);
  hideElement(homeSection);
  showElement(dashboardSection);
  showElement(logoutBtn);
  hideElement(loginBtn);

  dashboardSection.innerHTML = `
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-indigo-700 mb-4">User Dashboard</h2>
      <p class="text-gray-600">View your printing orders and updates here.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
        <h3 class="text-xl font-semibold mb-2 text-indigo-600">My Orders</h3>
        <p class="text-gray-600">View and track your current printing orders.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
        <h3 class="text-xl font-semibold mb-2 text-indigo-600">Support</h3>
        <p class="text-gray-600">Need help? Contact our support team.</p>
      </div>
    </div>
  `;

  showNotification("Welcome, User!", "success");
}


      // 🔹 INVALID LOGIN
      else {
        showNotification("Invalid credentials!", "error");
      }
    });
  }
});



  // 🔹 Cancel login modal
  if (cancelLogin && loginModal) {
    cancelLogin.addEventListener("click", () => {
      hideElement(loginModal);
    });
  }

  // 🔹 Login form submit
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();

      // 🔹 ADMIN LOGIN
      if (user === "admin" && pass === "password") {
        hideElement(loginModal);
        hideElement(homeSection);
        showElement(dashboardSection);
        showElement(logoutBtn);
        hideElement(loginBtn);

        userWelcome.innerText = "Welcome back, Admin!";
        showElement(userWelcome);

        dashboardSection.innerHTML = `
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-indigo-700 mb-4">Admin Dashboard</h2>
            <p class="text-gray-600">Manage users, orders, and reports.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
              <h3 class="text-xl font-semibold mb-2 text-indigo-600">Users</h3>
              <p class="text-gray-600">Manage registered users and their roles.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
              <h3 class="text-xl font-semibold mb-2 text-indigo-600">Orders</h3>
              <p class="text-gray-600">Track printing orders and their status.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
              <h3 class="text-xl font-semibold mb-2 text-indigo-600">Reports</h3>
              <p class="text-gray-600">Generate daily and monthly performance reports.</p>
            </div>
          </div>
          <div class="flex justify-center">
            <button id="openAddUser" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow">
              ➕ Add User
            </button>
          </div>
        `;
        showNotification("Welcome, Admin!", "success");
      }

      // 🔹 USER LOGIN
      else if (user === "user" && pass === "123456") {
        hideElement(loginModal);
        hideElement(homeSection);
        showElement(dashboardSection);
        showElement(logoutBtn);
        hideElement(loginBtn);

        userWelcome.innerText = "Welcome back, User!";
        showElement(userWelcome);

        dashboardSection.innerHTML = `
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-indigo-700 mb-4">User Dashboard</h2>
            <p class="text-gray-600">View your printing orders and updates here.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
              <h3 class="text-xl font-semibold mb-2 text-indigo-600">My Orders</h3>
              <p class="text-gray-600">View and track your current printing orders.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition">
              <h3 class="text-xl font-semibold mb-2 text-indigo-600">Support</h3>
              <p class="text-gray-600">Need help? Contact our support team.</p>
            </div>
          </div>
        `;
        showNotification("Welcome, User!", "success");
      }

      // 🔹 INVALID LOGIN
      else {
        showNotification("Invalid credentials!", "error");
      }
    });
  }

  // 🔹 Logout logic
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      hideElement(dashboardSection);
      showElement(homeSection);

      hideElement(logoutBtn);
      showElement(loginBtn);
      hideElement(userWelcome);

      showNotification("You have logged out!", "success");
    });
  }

  // 🔹 Add User Modal Logic
  if (addUserForm) {
    addUserForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const newUsername = document.getElementById("newUsername").value.trim();
      const newEmail = document.getElementById("newEmail").value.trim();

      if (newUsername && newEmail) {
        hideElement(addUserModal);
        showNotification(`User ${newUsername} added successfully!`, "success");
        addUserForm.reset();
      } else {
        showNotification("Please fill in all fields.", "error");
      }
    });
  }

  // 🔹 Dashboard card click example
  document.querySelectorAll("#dashboardSection .bg-white").forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.innerText || "Card";
      showNotification(`${title} clicked!`, "success");
    });
  });

  // 🔹 ESC key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideElement(loginModal);
      hideElement(addUserModal);
    }
  });


