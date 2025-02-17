# 🌍 React + TypeScript Currency Converter

This is a simple **Currency Converter** built using **React, TypeScript, and Vite**.  
It allows users to convert currencies with support for **Finnish language** via **i18next**.  
The backend service is powered by **Spring Boot** and leverages the **SWOP API (free tier)**.  
<img width="1432" alt="image" src="https://github.com/user-attachments/assets/1841b0ae-8276-4648-accd-15bf16a607df" />


---

## 🚀 Getting Started

Follow the steps below to **set up and run the project**.

---

## 📥 Clone the Repository

First, clone the frontend repository and navigate into the project directory:

```sh
git clone https://github.com/Mujtaba52/currency-converter-fe.git
cd currency-converter-fe
```

---

## 🔧 Setting Up the Project

Before running the project, ensure you meet the following prerequisites.

### **📌 Prerequisites**
- **Node.js 18+** installed on your system  
- The **backend service** must be running at `http://localhost:8080`  
  - Clone and start the backend service from here:  
  ```sh
  git clone https://github.com/Mujtaba52/currency-converter.git
  cd currency-converter
  ./mvnw clean package
  java -jar target/currency-converter-0.0.1-SNAPSHOT.jar
  ```

---

### **⚡ Install Dependencies**
Once inside the frontend project, install the required dependencies:

```sh
npm install
```

---

### **🚀 Running the App in Development Mode**
After installing dependencies, start the application:

```sh
npm run dev
```

The application will now be accessible at:  
```
http://localhost:5173
```

---

## 🌎 **Localization Support**
- The application includes **Finnish language support** via **i18next**.  
- The language can be switched dynamically within the UI.  

---

## ⚠️ **Limitations**
- Currently, **only EUR to other currencies** can be converted due to SWOP API free-tier limitations.  
- **Error handling is not fully implemented** yet.  
- Ensure that the **backend is running** before using the converter.  


