pipeline {
    agent any

    tools {
        jdk 'JDK17'
        maven 'Maven3'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Clean') {
            steps {
                dir('Spring From/form-with-mvc/form-with-mvc') {
                    bat 'mvn clean'
                }
            }
        }

        stage('Build') {
            steps {
                dir('Spring From/form-with-mvc/form-with-mvc') {
                    bat 'mvn package'
                }
            }
        }

        stage('Test') {
            steps {
                dir('Spring From/form-with-mvc/form-with-mvc') {
                    bat 'mvn test'
                }
            }
        }
    }

    post {
        always {
            echo 'BUILD FINISHED'
        }
        success {
            echo 'BUILD SUCCESS'
        }
        failure {
            echo 'BUILD FAILED'
        }
    }
}
