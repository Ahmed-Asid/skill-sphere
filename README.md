# 🚀 SkillSphere

SkillSphere is a modern online learning platform built with Next.js App Router.  
It features dynamic course browsing, authentication, protected routes, responsive UI, animated interactions, and server-side rendering.

---

# ✨ Features

- 🔐 Authentication system
- 🛡️ Protected routes with middleware
- 📚 Dynamic course listing
- 🔍 Instant course search
- 🎞️ SwiperJS carousel for popular courses
- ✨ Smooth animations with Tailwind & Animate.css
- 📱 Fully responsive design
- ⚡ Server Components & App Router
- 🚨 Custom Error & Not Found pages
- 🌈 Modern SaaS-inspired UI

---

## 🛠️ Technologies Used

-   **Frontend**: Next.js 15, Tailwind CSS, DaisyUI
-   **Icons**: Lucide React, React Icons
-   **Motion & Animation**: SwiperJS, Animate.css
-   **Authentication**: Better Auth
-   **Database**: MongoDB
-   **State & Feedback**: React Hooks, React-Toastify
-   **Fonts**: Google Fonts (Anta)

---

# 📂 Project Structure
│
├── 
│
```bash
app/
│
├── (main)
│   ├── all-courses/
│   ├── course-details/
│   ├── profile/
│
├── (auth)
│   ├── sign-in/
│   ├── sign-up/
│
├── components/
│   ├── homepage/
│   ├── shared/
│
├── error.jsx
├── not-found.jsx
├── loading.jsx
├── proxy.js
├── layout.js
│
public/
│
├── data/
│   └── data.json
```

---

# 🔐 Authentication Flow

- Public users can browse courses
- Protected routes redirect unauthenticated users
- Middleware stores redirect path
- After login, users return to intended page

Example:

```bash
/sign-in?redirect=/course-details/1
```

---

# 🎠 Swiper Carousel

Popular courses use:

- Infinite loop
-  Autoplay
- Responsive breakpoints
- Mobile-friendly touch gestures

---

# 🔍 Search Functionality

Implemented using:

- Server Components
- `searchParams`
- URL-based filtering

Example:

```bash
/courses?search=javascript
```

---

# 🚨 Error Handling

Custom pages included:

- `not-found.jsx` → 404 pages
- `error.jsx` → runtime errors
- `loading.jsx` → suspense loading states

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <your-repo-url>
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 👨‍💻 Author

- Built by Ahmed