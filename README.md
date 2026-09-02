# TensorFlow Playground Automation (Playwright)

This project contains an automated Playwright test that performs a full end‑to‑end interaction with **TensorFlow Playground** and reaches the exact final state shown in the assignment reference image.

The test covers dataset selection, feature manipulation, model architecture changes, learning rate tuning, simulation execution, and reporting of loss values.

---

## 📌 Test Scenario

The automated test performs the following steps:

1. **Go to the TensorFlow Playground page**  
   https://playground.tensorflow.org

2. **Read and report the initial Test Loss value**  
   The value displayed in the UI (label “h”) is logged to the console.

3. **Change dataset to “Exclusive”**  
   As shown in reference marker (a).

4. **Set Noise to 5%**  
   As shown in reference marker (b).

5. **Select two additional input features**  
   As shown in reference marker (c).

6. **Remove one neuron from the hidden layer**  
   As shown in reference markers (d) and (e).

7. **Change Learning Rate to 0.1**  
   As shown in reference marker (f).

8. **Run the simulation**  
   Click the “Play” button (g).

9. **Wait until Epoch value exceeds 0.3**  
   As shown in reference marker (i).

10. **Read and report the final Test Loss value**  
    The updated value (h) is logged to the console.

---

## 🧪 Tools & Frameworks Used

- **Playwright** (TypeScript)
- **Allure Playwright Reporter**
- **Node.js**
- **TypeScript**
- **Page Object Model (POM)** structure

---

## 👩‍💻 Author

**Reshma Elizabeth** 