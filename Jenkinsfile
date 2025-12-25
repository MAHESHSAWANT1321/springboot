pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/MAHESHSAWANT1321/springboot.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
    }

    post {
        success {
            echo 'Build SUCCESS'
        }
        failure {
            echo 'Build FAILED'
        }
    }
}
