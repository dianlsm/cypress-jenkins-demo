pipeline {
    agent any

    tools {
        nodejs 'node18'   // SESUAIKAN dengan nama NodeJS di Jenkins
    }

    environment {
        // Jika mau pakai cache Cypress di drive D (opsional)
        // CYPRESS_CACHE_FOLDER = 'D:\\CypressCache'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Verify Cypress') {
            steps {
                bat 'npx cypress verify'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }

    post {
        success {
            echo '✅ Cypress test SUCCESS'
        }
        failure {
            echo '❌ Cypress test FAILED'
        }
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
        }
    }
}
