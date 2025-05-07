pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // ชื่อต้องตรงกับที่ตั้งไว้ใน Jenkins config
    }

    environment {
    FIREBASE_TOKEN = credentials('0e8385b0-5e1d-4cd5-be05-dc2fda4c43db') // ถ้าคุณใช้ Jenkins Credentials plugin
}


    stages {
        stage('Clone') {
            steps {
                echo "Cloning repo..."
                checkout scm
            }
        }

        stage('Install') {
            steps {
                dir('auto-deploy') {
                    echo "Installing dependencies..."
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('auto-deploy') {
                    echo "Building React project..."
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('auto-deploy') {
                    echo "Running tests..."
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
    steps {
        dir('auto-deploy') {
            echo "Deploying to Firebase Hosting..."
            sh 'npm install -g firebase-tools' // ติดตั้ง firebase-tools ใน Jenkins agent
            sh "firebase deploy --only hosting --token ${FIREBASE_TOKEN}"
        }
    }
}

    }
}