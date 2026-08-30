# Research Content Audit — Step 1.5 Accuracy Pass

This document details the verified vs. unverified research claims across the portfolio codebase following the Step 1.5 accuracy review.

1. **01 — DIABETIC RETINOPATHY AI**
2. **02 — QUANTUM-INSPIRED RNA STORAGE**
3. **03 — CHRONOS**

---

## 01 — DIABETIC RETINOPATHY AI

### VERIFIED
- **Dataset**: EyePACS dataset with **35,126 fundus images** (corrected from 45,000).
- **Model Evaluation Metrics**:
  - **QWK**: `0.78 → 0.84`
  - **Macro-F1**: `0.71 → 0.76`
- **Architecture & Framework**: ResNet101 encoder with Joint-Embedding Predictive Architecture (JEPA) pre-training in PyTorch.
- **Problem & Classification Target**: 5-level diabetic retinopathy grading (0-4) under limited label availability.
- **Research Question**: *"How can self-supervised visual representation learning improve five-level diabetic retinopathy classification?"*

### REMOVED / UNVERIFIED
- **"+14.2% QWK improvement"**: Removed percentage claim in favor of explicit metric transition (`QWK: 0.78 → 0.84`).
- **"45,000 unlabelled images"**: Corrected to verified dataset figure of **35,126 images**.

### TO BE DOCUMENTED
- External validation on independent clinical hospital datasets (e.g. Messidor-2, APTOS).
- Real-time clinical inference latency and deployment benchmarks.
- Peer-reviewed paper / preprint URLs and public GitHub repository link.

---

## 02 — QUANTUM-INSPIRED RNA STORAGE

### VERIFIED
- **Domain & Focus**: Computational biology, biological data storage, RNA/DNA information encoding, error correction, quantum-inspired computing, tensor-network based optimization.
- **Research Question**: *"How can quantum-inspired algorithms improve error rates and density in synthetic biological RNA data storage systems?"*
- **Formulation**: Formulated sequence mapping as a tensor-network optimization problem subject to secondary structure constraints and homopolymer length limits.

### REMOVED / UNVERIFIED (Marked "To be documented")
- **"1.82 bits/nucleotide density"**: Removed (unverified quantitative claim).
- **"Full reconstruction under 3% insertion/deletion error rates"**: Removed (unverified quantitative claim).
- **"4x reduction in codeword search latency"**: Removed (unverified quantitative claim).

### TO BE DOCUMENTED
- Information density (bits/nucleotide) measured benchmarks.
- Reconstruction fidelity under physical insertion/deletion noise channels.
- Wet-lab physical synthesis (in vitro RNA/DNA sequencing and degradation cycles).
- Public repository and manuscript preprint links.

---

## 03 — CHRONOS

### VERIFIED
- **Domain & Focus**: AI infrastructure, data engineering, distributed systems, telemetry aggregation, observability, data drift and pipeline anomaly detection.
- **Technologies**: Apache Spark, Kafka, Airflow, OpenTelemetry, Prometheus.
- **Research Question**: *"How can automated telemetry aggregation detect real-time data drift and pipeline anomalies in distributed streaming architectures?"*
- **Architecture**: Zero-copy telemetry sidecar alongside Kafka brokers and Spark Executors with online rolling Kolmogorov-Smirnov (KS) test for distribution shift alerting.

### REMOVED / UNVERIFIED (Marked "To be documented")
- **">100,000 events/second stream throughput"**: Removed (unverified quantitative claim).
- **"Sub-second anomaly flagging"**: Removed (unverified quantitative claim).
- **"Zero runtime degradation"**: Removed (unverified quantitative claim).

### TO BE DOCUMENTED
- Measured stream throughput capacity benchmarks (events/second).
- Anomaly flagging latency empirical measurements.
- Production ETL runtime overhead percentage measurements.
- Multi-variate joint distribution shift detection evaluation.
- Public repository and documentation links.
