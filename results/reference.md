# Environment
- Hardware
  - CPU: 12-core
  - RAM: 16GB
- Software
  - ubuntu: 22.04.5
  - openjdk: 11
  - mariadb-server: 10.6.18
    - max connections: 151
    - buffer pool size: 4GB 
  - wildfly: 26.1.3
    - max heap memory: 4GB
    - i/o threads: 24

# Results

## Fully populated tables AuditRecordData and CertificateData  

| Threads | Certificates per thread | Total certificates | Type           | Algorithm | Total time CSR+enroll (min) | Average enroll (ms) | Transactions per second enroll | Errors |
|---------|--------------------------|---------------------|----------------|-----------|------------------------------|----------------------|----------------------------------|--------|
| 1       | 10000                    | 10000               | CSR on-the-fly | ED25519   | 5                            | 20.17                | 34.67                            | 0      |
| 1       | 10000                    | 10000               | CSR on-the-fly | ED25519   | 5                            | 19.69                | 34.35                            | 0      |
| 1       | 10000                    | 10000               | CSR on-the-fly | ED25519   | 5                            | 20.2                 | 33.37                            | 0      |
| 1       | 10000                    | 10000               | CSR on-the-fly | EC P-256  | 5                            | 20.92                | 31.96                            | 0      |
| 1       | 10000                    | 10000               | CSR on-the-fly | EC P-256  | 5                            | 20.01                | 33.57                            | 0      |
| 1       | 10000                    | 10000               | CSR on-the-fly | EC P-256  | 5                            | 20.73                | 32.15                            | 0      |
| 1       | 10000                    | 10000               | CSR on-the-fly | RSA 3072  | 81                           | 32.53                | 2.05                             | 0      |
| 1       | 10000                    | 10000               | CSR on-the-fly | RSA 3072  | 81                           | 32.74                | 2.03                             | 0      |
| 32      | 2400                     | 76800               | CSR on-the-fly | ED25519   | 6                            | 99.21                | 243.25                           | 23     |
| 32      | 2400                     | 76800               | CSR on-the-fly | ED25519   | 6                            | 116.2                | 218.92                           | 65     |
| 32      | 2400                     | 76800               | CSR on-the-fly | ED25519   | 7                            | 135.85               | 190.29                           | 108    |
| 32      | 2400                     | 76800               | CSR on-the-fly | EC P-256  | 140                          | 3400.97              | 9.33                             | 7826   |
| 32      | 500                      | 16000               | CSR on-the-fly | RSA 3072  | 20                           | 51.6                 | 12.96                            | 0      |
| 32      | 500                      | 16000               | CSR on-the-fly | RSA 3072  | 21                           | 180.65               | 12.5                             | 72     |
| 24      | 3200                     | 76800               | CSR on-the-fly | ED25519   | 5                            | 68.91                | 258.45                           | 0      |
| 24      | 3200                     | 76800               | CSR on-the-fly | ED25519   | 5                            | 66.66                | 261.2                            | 7      |
| 24      | 3200                     | 76800               | CSR on-the-fly | ED25519   | 5                            | 70.85                | 254.89                           | 0      |
| 24      | 3200                     | 76800               | CSR on-the-fly | EC P-256  | 7                            | 92.36                | 200.35                           | 77     |
| 24      | 3200                     | 76800               | CSR on-the-fly | EC P-256  | 8                            | 127.3                | 154.74                           | 162    |
| 24      | 3200                     | 76800               | CSR on-the-fly | EC P-256  | 7                            | 109.62               | 176.89                           | 133    |
| 24      | 500                      | 12000               | CSR on-the-fly | RSA 3072  | 15                           | 62.11                | 12.62                            | 2      |
| 24      | 500                      | 12000               | CSR on-the-fly | RSA 3072  | 15                           | 54.54                | 13.39                            | 3      |

