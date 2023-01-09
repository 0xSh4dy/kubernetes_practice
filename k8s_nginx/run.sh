#!/bin/bash
export kubectl="minikube kubectl --"
minikube kubectl apply -- -f deployment.yaml
minikube kubectl apply -- -f service.yaml
minikube service nginx-service
