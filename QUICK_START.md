# 🚀 Quick Start Guide - Interview AI

## ⚡ 5-Minute Setup

### **Step 1: Install Dependencies**
```bash
# Backend
cd Backend && npm install

# Frontend (new terminal)
cd Frontend && npm install
```

### **Step 2: Setup Environment Files**

**Backend/.env**
```env
MONGO_URI=mongodb://localhost:27017/interview_db
JWT_SECRET=your_secret_key_here
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

**Frontend/.env**
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### **Step 3: Start Services**

```bash
# Terminal 1: Start Backend
cd Backend && npm run dev

# Terminal 2: Start Frontend
cd Frontend && npm run dev

# Terminal 3 (optional): Open MongoDB Compass
# Connection: mongodb://localhost:27017
```

### **Step 4: Access Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000/api

---

## 📋 Using the Application

### **First Time User**
1. **Register** at `/register`
   - Username: testuser
   - Email: test@example.com
   - Password: secure123

2. **Login** at `/login`
   - Email: test@example.com
   - Password: secure123

3. **Generate Interview Report**
   - Go to Home page
   - Fill in resume, self description, job description
   - Click "Generate Report"
   - View results in Interview page

---

## 🛠️ Common Commands

```bash
# Backend Development
npm run dev          # Start with Nodemon
npm install          # Install dependencies
npm audit fix        # Fix vulnerabilities

# Frontend Development
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

---

## 🔧 Environment Setup

### **Required Tools**
- ✅ Node.js v16+ 
- ✅ MongoDB (local or Atlas)
- ✅ Google GenAI API key
- ✅ Code editor (VS Code recommended)

### **Getting Credentials**

**Google GenAI API Key:**
1. Go to https://ai.google.dev
2. Click "Get API Key"
3. Create new API key
4. Copy to `.env` as `GOOGLE_GENAI_API_KEY`

**MongoDB Connection:**
- **Local**: `mongodb://localhost:27017/interview_db`
- **Atlas**: Get from cluster connection string

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 already in use | `lsof -i :3000` then `kill -9 <PID>` |
| Port 5173 already in use | Change in `vite.config.js` or kill process |
| MongoDB connection error | Check `.env` MONGO_URI, ensure MongoDB is running |
| 401 errors on login | Clear cookies, register new account |
| AI API errors | Verify Google GenAI API key in `.env` |
| CORS errors | Ensure frontend URL in backend CORS config |
| npm install fails | Delete `node_modules` and `package-lock.json`, retry |

---

## 📁 File Structure Quick Reference

```
Backend/
├── server.js                    ← Main entry point
├── src/
│   ├── app.js                   ← Express setup
│   ├── config/database.js       ← DB connection
│   ├── controllers/             ← Business logic
│   ├── routes/                  ← API endpoints
│   ├── models/                  ← MongoDB schemas
│   ├── services/                ← External services (AI)
│   └── middlewares/             ← Auth, validation
├── .env                         ← Environment config
└── package.json

Frontend/
├── src/
│   ├── App.jsx                  ← Root component
│   ├── main.jsx                 ← Entry point
│   ├── app.routes.jsx           ← Route definitions
│   └── features/
│       ├── auth/                ← Auth feature
│       └── interview/           ← Interview feature
├── vite.config.js
├── .env
└── package.json
```

---

## 🔑 API Quick Reference

### **Auth Endpoints**
```bash
# Register
POST /api/auth/register
Body: { username, email, password }

# Login
POST /api/auth/login
Body: { email, password }

# Get Current User
GET /api/auth/get-me
Headers: Cookie: token=<jwt_token>

# Logout
GET /api/auth/logout
Headers: Cookie: token=<jwt_token>
```

### **Interview Endpoints**
```bash
# Generate Report
POST /api/interview/generate-report
Body: { resume, selfDescription, jobDescription }
Headers: Cookie: token=<jwt_token>

# Get All Reports
GET /api/interview/reports
Headers: Cookie: token=<jwt_token>

# Get Single Report
GET /api/interview/report/:reportId
Headers: Cookie: token=<jwt_token>
```

---

## 💡 Development Tips

### **Debug Like a Pro**
```javascript
// Backend: Add logging
console.log("Request body:", req.body);
console.log("User:", req.user);

// Frontend: Network tab shows all API calls
// Use DevTools → Network → See all requests/responses
```

### **Database Inspection**
```bash
# Use MongoDB Compass (GUI)
# Connect to: mongodb://localhost:27017
# Browse databases and collections visually
```

### **Frontend Console Debugging**
```javascript
// Check what's stored in browser
localStorage
sessionStorage

// Check active cookies
document.cookie
```

---

## 🎯 Development Workflow

1. **Make changes** to code
2. **Backend auto-reloads** (Nodemon watches files)
3. **Frontend auto-reloads** (Vite HMR)
4. **Check browser console** for errors
5. **Check backend terminal** for logs
6. **Test in MongoDB Compass** if needed

---

## 📦 Project Dependencies

### **Backend Key Packages**
- `express`: Web framework
- `mongoose`: MongoDB ODM
- `jsonwebtoken`: JWT auth
- `bcryptjs`: Password hashing
- `@google/genai`: AI integration
- `dotenv`: Environment variables

### **Frontend Key Packages**
- `react`: UI framework
- `react-router`: Routing
- `axios`: HTTP client
- `sass`: CSS preprocessing
- `vite`: Build tool

---

## 🚀 Performance Tips

- Use MongoDB Compass to see query performance
- Check network tab for slow API calls
- Verify JWT token is being cached properly
- Minimize AI API calls during development (they're paid!)

---

## 📞 Support Resources

- **Node.js Docs**: https://nodejs.org/docs
- **Express.js Guide**: https://expressjs.com
- **React Documentation**: https://react.dev
- **MongoDB Manual**: https://docs.mongodb.com/manual
- **Google Gemini API**: https://ai.google.dev

---

## ✅ Before Committing

```bash
# 1. Check for errors
npm run lint          # Frontend
# (Backend doesn't have lint configured)

# 2. Test functionality
# Register → Login → Generate Report

# 3. Verify no console errors
# Check browser and backend terminal

# 4. Clean up console.logs
# Remove debug statements

# 5. Commit
git add .
git commit -m "Meaningful commit message"
```

---

**Last Updated:** May 19, 2026
**Version:** 1.0.0
