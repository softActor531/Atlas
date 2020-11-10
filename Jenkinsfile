pipeline {
    agent any

    environment {
        registry = "atlas-rebuild-web"
        image = ""
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'develop',
                    credentialsId: 'github-ahomran',
                    url: 'https://github.com/azizmars/atlas-rebuild-web.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    image = docker.build registry + ":latest"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker.withRegistry("https://388578881869.dkr.ecr.us-east-2.amazonaws.com", "ecr:us-east-2:aws") {
                        image.push()
                    }
                }
            }
        }
    }
}
