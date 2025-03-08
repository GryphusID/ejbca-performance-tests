#!/bin/bash
# This script generates a CSR 

THREAD=$1
ALGORITHM=$2
SUBJECT=$3
CSR_MODE=$4 #0-make now the CSRs 1-don't do anything 2-do CSR on the fly
TOTAL_CSR=$5

STORAGE_DIR="/run/user/$(id -u)/csr_storage"
CSR_FILE="$STORAGE_DIR/csr_list.csv"

generate_csr_cmd() {
    local algorithm="$1"
    local thread="$2"
    local subject="$3"

    local key_cmd=""
    local key_algorithm
    key_algorithm=$(echo "${algorithm}" | cut -d ':' -f1)

    if [[ "${key_algorithm}" == "RSA" ]]; then
        local key_opt
        key_opt=$(echo "${algorithm}" | cut -d ':' -f2)
        key_cmd="openssl genpkey -algorithm ${key_algorithm} -pkeyopt rsa_keygen_bits:${key_opt} 2>/dev/null"
    elif [[ "${key_algorithm}" == "EC" ]]; then
        local key_opt
        key_opt=$(echo "${algorithm}" | cut -d ':' -f2)
        key_cmd="openssl genpkey -algorithm ${key_algorithm} -pkeyopt ec_paramgen_curve:${key_opt} 2>/dev/null"
    elif [[ "${key_algorithm}" == "ED25519" ]]; then
        key_cmd="openssl genpkey -algorithm ${key_algorithm} 2>/dev/null"
    fi

    # Replace "#" with the thread number
    local changed_subject
    changed_subject=$(echo "$subject" | sed "s/#/${thread}/g")

    # Construct the CSR command
    local csr_cmd
    csr_cmd="openssl req -new -key <(${key_cmd}) -subj \"${changed_subject}\""
    echo -n "-----BEGIN CERTIFICATE REQUEST-----\n"
    eval ${csr_cmd} | grep -v "CERTIFICATE REQUEST" | tr -d '\n'
    echo -n "\n-----END CERTIFICATE REQUEST-----"
    #eval ${csr_cmd}

}

# CSR_MODE=1 -> pre-made CSR which means CSR already created previously with CSR_MODE=0
if [[ "$CSR_MODE" == "1" ]]; then
  exit 0
# CSR_MODE=0 -> Create all CSRs
elif [[ "$CSR_MODE" == "0" ]]; then    

    for ((i=1; i<=TOTAL_CSR; i++)); do
        # Generate a CSR
        csr_output=$(generate_csr_cmd "$ALGORITHM" "$THREAD" "$SUBJECT")

        # Save in CSV: format "thread_id,csr"
        #echo "$i,$(echo "$csr_output" | tr -d '\n')" >> "$CSR_FILE"
        echo "$i,$(echo $csr_output)" >> "$CSR_FILE"

    done
# CSR_MODE=2 -> Create CSR on the fly    
elif [[ "$CSR_MODE" == "2" ]]; then
  key_cmd=""
  key_algorithm=$(echo ${ALGORITHM} | cut -d ':' -f1)
  
  if [[ "${key_algorithm}" == "RSA" ]]; then
    key_opt=$(echo ${ALGORITHM} | cut -d ':' -f2)
    # Generate key
    key_cmd="openssl genpkey -algorithm ${key_algorithm} -pkeyopt rsa_keygen_bits:${key_opt} 2>/dev/null"
  elif [[ "${key_algorithm}" == "EC" ]]; then
    key_opt=$(echo ${ALGORITHM} | cut -d ':' -f2)
    # Generate key
    key_cmd="openssl genpkey -algorithm ${key_algorithm} -pkeyopt ec_paramgen_curve:${key_opt} 2>/dev/null"
  elif [[ "${key_algorithm}" == "ED25519" ]]; then
    # Generate key
    key_cmd="openssl genpkey -algorithm ${key_algorithm} 2>/dev/null"
  fi

  # Change "#" with ${THREAD}
  changed_subject=$(echo "$SUBJECT" | sed "s/#/\${THREAD}/g")

  # Create CSR
  #csr_cmd="openssl req -new -key <(${key_cmd}) -subj /CN=enduser${THREAD}/O=enduser${THREAD}_org/C=PT"
  csr_cmd="openssl req -new -key <($key_cmd) -subj ${changed_subject}"
  echo -n "-----BEGIN CERTIFICATE REQUEST-----\n"
  eval ${csr_cmd} | grep -v "CERTIFICATE REQUEST" | tr -d '\n'
  echo -n "\n-----END CERTIFICATE REQUEST-----"
fi