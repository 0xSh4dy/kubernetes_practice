#!/bin/bash
minikube kubectl apply -- -f configmap.yaml
minikube kubectl apply -- -f deployment.yaml
minikube kubectl apply -- -f service.yaml
minikube service node-express-service