# SENTINEL-K 🛡️
### Field Security Copilot for Cyber-Physical Infrastructure
**iQOO Hackathon 2026 Submission**

Sentinel-K is a real-time cyber-physical security copilot engineered for critical infrastructure field operators. It intercepts high-risk operational commands, evaluates multimodal human-side evidence, verifies cyber syntax and access controls, and enforces deterministic hydraulic and physical safety envelopes before execution.

---

## 🌟 Key Capabilities

1. **Mobile Field Security Intelligence (iQOO Edge Copilot)**
   - Operates on-device directly on field engineers' mobile hardware.
   - Extracts observable proof from urgent dispatches, emergency work orders, and spoofed SMS/voice directives.
   - Computes urgency confidence metrics to detect social engineering and coercive pressure vectors.

2. **Multimodal Evidence Triage & Verification Barrier**
   - 8-stage verification pipeline analyzing operational intent, command integrity, and plant authorization in under 1.8 seconds.
   - Correlates human dispatches with air-gapped physical plant telemetry.

3. **Dynamic Digital Twin Validation (EPANET & WNTR)**
   - Decompiles high-risk instructions into Modbus register sequences (`%QW104`, `%QW106`, etc.).
   - Simulates physical line pressure transients, water hammer, cavitation risk, and surge wave propagation in real-time.
   - Clamps dangerous override spikes and protects physical equipment from permanent mechanical failure.

4. **Autonomous Rejection & Safe Trajectory Replanning**
   - When unsafe commands are blocked, Sentinel-K autonomously synthesizes compliant ramp profiles (e.g., 45s–60s staged deceleration curves) to maintain grid stability.

5. **Industrial Protocol & Hardware Interoperability**
   - Seamless bridge across OpenPLC, Modbus TCP/RTU, Siemens S7, Schneider Electric Modicon, EPANET, and Vivo Office Kit edge bridge.

---

## 🏗️ Architecture & Stack

- **Frontend & Visual Architecture**:
  - React 18, Vite, Three.js, Lucide Icons, Canvas 2D Physics Engine.
  - Self-hosted typographic system (**AM Le Cygne** and **Inter**).
  - Lenis smooth momentum scrolling.
- **OT Security & Physics Core**:
  - OpenPLC formal logic checking.
  - EPANET / WNTR hydraulic dynamic twin simulation engine.
  - Modbus register boundary verification.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
node server.js
```
Or with npm:
```bash
npm run dev
```

### 3. Open in Browser
Visit **[http://localhost:3000](http://localhost:3000)** to explore the live Sentinel-K interactive copilot platform.

---

## 📄 License
Confidential & Proprietary — Developed for iQOO Hackathon 2026.
