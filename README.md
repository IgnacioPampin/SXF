# 🏆 SXF Cypress Test Automation Suite  

## 📖 Overview  
This repository contains **Cypress automated tests** for [SavageX.com](https://savagex.com).  
The suite covers **functional, UI, and regression testing** across multiple environments and devices.

## 🚀 Features  
✅ Supports **Preview, Production, and Dynamic environments**  
✅ Runs on **Desktop, iPad, and iPhone** screen sizes  
✅ Generates **detailed test reports**  

---

## 🛠️ **Installation & Setup**  
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/IgnacioPampin/SXF.git
cd SXF
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Open Cypress Test Runner  
```sh
npx cypress open
```

---

## 🌐 **Running Tests in Different Environments**  
To run tests in different environments, set the `CYPRESS_ENV` environment variable:

### Preview Environment
```sh
CYPRESS_ENV=preview npx cypress run
```

### Production Environment
```sh
CYPRESS_ENV=production npx cypress run
```

### Dynamic Environment
```sh
CYPRESS_ENV=dynamic npx cypress run
```

---

## 📱 **Running Tests in Different Viewports**  
Cypress allows you to run tests in different viewports by specifying the viewport size in your test configuration.

### Desktop
```js
cy.viewport(1280, 720)
```

### iPad
```js
cy.viewport('ipad-2')
```

### iPhone
```js
cy.viewport('iphone-15')
```

---

## 📊 **Generating Test Reports**  
To generate detailed test reports, use the following command:
```sh
npx cypress run --reporter junit --reporter-options "mochaFile=results/my-test-output.xml,toConsole=true"
```

---
