pipeline {
    agent any

   JDK:
     Name: JDK17
   Maven:
     Name: Maven3

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/MAHESHSAWANT1321/springboot.git'
            }
        }

        stage('Clean') {
            steps {
                bat 'mvn clean'
            }
        }

        stage('Build') {
            steps {
                bat 'mvn package -DskipTests'
            }
        }

        stage('Test') {
            steps {
                bat 'mvn test'
            }
        }
    }

    post {
        success {
            echo 'BUILD SUCCESS'
        }
        failure {
            echo 'BUILD FAILED'
        }
    }
}
