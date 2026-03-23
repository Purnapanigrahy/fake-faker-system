
/* Fake code with indentation */
const fakeCode = `

function connectServer() {
    let user = "admin";
    let password = "encrypted";

    if(user === "admin") {
        console.log("Access granted");

        for(let i = 0; i < 10; i++) {
            console.log("Decrypting file " + i);
        }

        system.overrideFirewall();
        network.establishSecureLink();

        if(system.ready) {
            launchPayload();
        }
    }

    function launchPayload() {
        console.log("Uploading data...");
        console.log("Transfer complete.");
    }

}

connectServer();
/* ===============================
   SYSTEM INITIALIZATION MODULE
================================= */

import network.core;
import system.security;
import encryption.module;

function initializeSystem() {

    console.log("Initializing core modules...");
    loadKernel();
    verifyIntegrity();

    if(system.status === "READY") {
        console.log("System ready.");
        establishConnection();
    }

}

function loadKernel() {

    console.log("Loading kernel drivers...");

    for(let i = 0; i < 5; i++) {

        console.log("Driver " + i + " loaded.");

    }

}

function verifyIntegrity() {

    console.log("Running checksum verification...");

    let checksum = generateChecksum();

    if(checksum === "VALID") {

        console.log("Integrity verified.");

    }
    else {

        console.log("Integrity failure.");

    }

}

/* ===============================
   NETWORK HANDSHAKE MODULE
================================= */

function establishConnection() {

    console.log("Connecting to remote node...");

    let server = "192.168.1.1";
    let port = 8080;

    openSocket(server, port);

}

function openSocket(server, port) {

    console.log("Opening socket at " + server);

    for(let retry = 0; retry < 3; retry++) {

        console.log("Attempt " + retry);

        if(handshakeSuccess()) {

            console.log("Connection established.");
            authenticateUser();
            break;

        }

    }

}

/* ===============================
   AUTHENTICATION MODULE
================================= */

function authenticateUser() {

    let username = "admin";
    let password = "encrypted_pass";

    console.log("Authenticating user...");

    if(username === "admin") {

        console.log("User validated.");

        decryptCredentials(password);

    }

}

function decryptCredentials(pass) {

    console.log("Decrypting credentials...");

    let decrypted = "";

    for(let i = 0; i < pass.length; i++) {

        decrypted += "*";

    }

    console.log("Password decrypted.");

    accessSecureLayer();

}

/* ===============================
   FIREWALL OVERRIDE MODULE
================================= */

function accessSecureLayer() {

    console.log("Accessing secure layer...");

    disableFirewall();

    scanOpenPorts();

}

function disableFirewall() {

    console.log("Firewall status: ACTIVE");

    console.log("Attempting override...");

    for(let i = 0; i < 10; i++) {

        console.log("Override packet " + i);

    }

    console.log("Firewall disabled.");

}

/* ===============================
   PORT SCANNER
================================= */

function scanOpenPorts() {

    console.log("Scanning ports...");

    let ports = [21, 22, 80, 443, 3306];

    for(let i = 0; i < ports.length; i++) {

        console.log("Checking port: " + ports[i]);

        if(ports[i] === 22) {

            console.log("Port 22 OPEN");

        }

    }

    establishTunnel();

}

/* ===============================
   SECURE TUNNEL CREATION
================================= */

function establishTunnel() {

    console.log("Creating encrypted tunnel...");

    let encryptionLevel = 256;

    if(encryptionLevel >= 256) {

        console.log("Encryption enabled.");

        uploadPayload();

    }

}

/* ===============================
   PAYLOAD UPLOADER
================================= */

function uploadPayload() {

    console.log("Uploading payload...");

    for(let i = 0; i < 20; i++) {

        console.log("Uploading block " + i);

    }

    console.log("Payload upload complete.");

    executePayload();

}

/* ===============================
   EXECUTION ENGINE
================================= */

function executePayload() {

    console.log("Executing payload...");

    let memoryBuffer = [];

    for(let i = 0; i < 50; i++) {

        memoryBuffer.push(i);

    }

    console.log("Memory buffer initialized.");

    dataExtraction();

}

/* ===============================
   DATA EXTRACTION MODULE
================================= */

function dataExtraction() {

    console.log("Extracting sensitive data...");

    let records = [];

    for(let i = 0; i < 30; i++) {

        records.push("record_" + i);

    }

    console.log("Records collected.");

    encryptData(records);

}

/* ===============================
   DATA ENCRYPTION
================================= */

function encryptData(records) {

    console.log("Encrypting data...");

    let encryptedData = [];

    for(let i = 0; i < records.length; i++) {

        encryptedData.push("***");

    }

    console.log("Encryption complete.");

    transferData(encryptedData);

}

/* ===============================
   DATA TRANSFER MODULE
================================= */

function transferData(data) {

    console.log("Transferring data to remote server...");

    for(let i = 0; i < data.length; i++) {

        console.log("Packet " + i + " sent.");

    }

    console.log("Transfer successful.");

    cleanupSystem();

}

/* ===============================
   CLEANUP MODULE
================================= */

function cleanupSystem() {

    console.log("Cleaning traces...");

    for(let i = 0; i < 10; i++) {

        console.log("Deleting temp file " + i);

    }

    console.log("Logs erased.");

    shutdownSystem();

}

/* ===============================
   SYSTEM SHUTDOWN
================================= */

function shutdownSystem() {

    console.log("System shutting down...");

    console.log("All operations completed.");

}

/* ===============================
   EXECUTION START
================================= */

initializeSystem();
/* ===============================
   SYSTEM INITIALIZATION MODULE
================================= */

import network.core;
import system.security;
import encryption.module;

function initializeSystem() {

    console.log("Initializing core modules...");
    loadKernel();
    verifyIntegrity();

    if(system.status === "READY") {
        console.log("System ready.");
        establishConnection();
    }

}

function loadKernel() {

    console.log("Loading kernel drivers...");

    for(let i = 0; i < 5; i++) {

        console.log("Driver " + i + " loaded.");

    }

}

function verifyIntegrity() {

    console.log("Running checksum verification...");

    let checksum = generateChecksum();

    if(checksum === "VALID") {

        console.log("Integrity verified.");

    }
    else {

        console.log("Integrity failure.");

    }

}

/* ===============================
   NETWORK HANDSHAKE MODULE
================================= */

function establishConnection() {

    console.log("Connecting to remote node...");

    let server = "192.168.1.1";
    let port = 8080;

    openSocket(server, port);

}

function openSocket(server, port) {

    console.log("Opening socket at " + server);

    for(let retry = 0; retry < 3; retry++) {

        console.log("Attempt " + retry);

        if(handshakeSuccess()) {

            console.log("Connection established.");
            authenticateUser();
            break;

        }

    }

}

/* ===============================
   AUTHENTICATION MODULE
================================= */

function authenticateUser() {

    let username = "admin";
    let password = "encrypted_pass";

    console.log("Authenticating user...");

    if(username === "admin") {

        console.log("User validated.");

        decryptCredentials(password);

    }

}

function decryptCredentials(pass) {

    console.log("Decrypting credentials...");

    let decrypted = "";

    for(let i = 0; i < pass.length; i++) {

        decrypted += "*";

    }

    console.log("Password decrypted.");

    accessSecureLayer();

}

/* ===============================
   FIREWALL OVERRIDE MODULE
================================= */

function accessSecureLayer() {

    console.log("Accessing secure layer...");

    disableFirewall();

    scanOpenPorts();

}

function disableFirewall() {

    console.log("Firewall status: ACTIVE");

    console.log("Attempting override...");

    for(let i = 0; i < 10; i++) {

        console.log("Override packet " + i);

    }

    console.log("Firewall disabled.");

}

/* ===============================
   PORT SCANNER
================================= */

function scanOpenPorts() {

    console.log("Scanning ports...");

    let ports = [21, 22, 80, 443, 3306];

    for(let i = 0; i < ports.length; i++) {

        console.log("Checking port: " + ports[i]);

        if(ports[i] === 22) {

            console.log("Port 22 OPEN");

        }

    }

    establishTunnel();

}

/* ===============================
   SECURE TUNNEL CREATION
================================= */

function establishTunnel() {

    console.log("Creating encrypted tunnel...");

    let encryptionLevel = 256;

    if(encryptionLevel >= 256) {

        console.log("Encryption enabled.");

        uploadPayload();

    }

}

/* ===============================
   PAYLOAD UPLOADER
================================= */

function uploadPayload() {

    console.log("Uploading payload...");

    for(let i = 0; i < 20; i++) {

        console.log("Uploading block " + i);

    }

    console.log("Payload upload complete.");

    executePayload();

}

/* ===============================
   EXECUTION ENGINE
================================= */

function executePayload() {

    console.log("Executing payload...");

    let memoryBuffer = [];

    for(let i = 0; i < 50; i++) {

        memoryBuffer.push(i);

    }

    console.log("Memory buffer initialized.");

    dataExtraction();

}

/* ===============================
   DATA EXTRACTION MODULE
================================= */

function dataExtraction() {

    console.log("Extracting sensitive data...");

    let records = [];

    for(let i = 0; i < 30; i++) {

        records.push("record_" + i);

    }

    console.log("Records collected.");

    encryptData(records);

}

/* ===============================
   DATA ENCRYPTION
================================= */

function encryptData(records) {

    console.log("Encrypting data...");

    let encryptedData = [];

    for(let i = 0; i < records.length; i++) {

        encryptedData.push("***");

    }

    console.log("Encryption complete.");

    transferData(encryptedData);

}

/* ===============================
   DATA TRANSFER MODULE
================================= */

function transferData(data) {

    console.log("Transferring data to remote server...");

    for(let i = 0; i < data.length; i++) {

        console.log("Packet " + i + " sent.");

    }

    console.log("Transfer successful.");

    cleanupSystem();

}

/* ===============================
   CLEANUP MODULE
================================= */

function cleanupSystem() {

    console.log("Cleaning traces...");

    for(let i = 0; i < 10; i++) {

        console.log("Deleting temp file " + i);

    }

    console.log("Logs erased.");

    shutdownSystem();

}

/* ===============================
   SYSTEM SHUTDOWN
================================= */

function shutdownSystem() {

    console.log("System shutting down...");

    console.log("All operations completed.");

}

/* ===============================
   EXECUTION START
================================= */

initializeSystem();

`;


let position = 0;
const chunkSize = 5;

let heading = document.getElementById('heading');
const terminal = document.getElementById("terminal");

// Named function (IMPORTANT)
function handleKeydown(event) {

    // BACKSPACE handling
    if (event.key === "Backspace") {

        position -= 1;

        if (position < 0) {
            position = 0;
        }

    } 
    else if (event.key === "Enter") {

        heading.style.display = 'block';

        // 🔴 STOP event listener here
        document.removeEventListener("keydown", handleKeydown);
        
        console.log("Event listener stopped");
        window.scrollTo(0, document.body.scrollHeight);

        return; // optional but clean
    } 
    else {

        position += chunkSize;

        if (position > fakeCode.length) {
            position = fakeCode.length;

            // 🔴 Stop when fakeCode ends
            document.removeEventListener("keydown", handleKeydown);
        }

    }

    // Show text
    terminal.textContent = fakeCode.substring(0, position);

    // Auto scroll
    window.scrollTo(0, document.body.scrollHeight);
}

// Add listener
document.addEventListener("keydown", handleKeydown);
