pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // ชื่อต้องตรงกับที่ตั้งไว้ใน Jenkins config
    }

    environment {
        FIREBASE_PROJECT = 'webapp-31a99'    }

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
        dir('frontend') {
            echo "Deploying to Firebase Hosting..."
            sh 'npm install -g firebase-tools' // ติดตั้ง firebase-tools ใน Jenkins agent
            sh "firebase deploy --only hosting --token ${FIREBASE_TOKEN}"
        }
    }
}

    }
}